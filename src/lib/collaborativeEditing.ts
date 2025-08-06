// Collaborative Form Editing Service
// Enables multiple parties to work on forms together with real-time updates

import { EventEmitter } from 'events';
import React from 'react';

export interface Collaborator {
  id: string;
  name: string;
  email: string;
  role: 'petitioner' | 'respondent' | 'attorney' | 'helper';
  permissions: {
    canEdit: boolean;
    canComment: boolean;
    canApprove: boolean;
    canShare: boolean;
  };
  status: 'active' | 'invited' | 'inactive';
  lastActive?: Date;
  color: string;
}

export interface FormSession {
  id: string;
  formId: string;
  formType: string;
  createdBy: string;
  createdAt: Date;
  lastModified: Date;
  collaborators: Collaborator[];
  status: 'draft' | 'in_review' | 'approved' | 'submitted';
  version: number;
  shareLink?: string;
  expiresAt?: Date;
}

export interface FormChange {
  id: string;
  sessionId: string;
  fieldName: string;
  oldValue: any;
  newValue: any;
  changedBy: string;
  changedAt: Date;
  changeType: 'edit' | 'comment' | 'approval';
  comment?: string;
}

export interface FormComment {
  id: string;
  sessionId: string;
  fieldName?: string;
  comment: string;
  author: string;
  createdAt: Date;
  resolved: boolean;
  replies?: FormComment[];
}

export interface ConflictResolution {
  fieldName: string;
  yourValue: any;
  theirValue: any;
  timestamp: Date;
  resolvedBy?: string;
  resolution?: 'yours' | 'theirs' | 'merged';
}

class CollaborativeEditingService extends EventEmitter {
  private sessions: Map<string, FormSession> = new Map();
  private changes: Map<string, FormChange[]> = new Map();
  private comments: Map<string, FormComment[]> = new Map();
  private activeConnections: Map<string, Set<string>> = new Map();
  private fieldLocks: Map<string, { sessionId: string; userId: string; fieldName: string }> = new Map();

  // Create a new collaborative session
  createSession(
    formId: string,
    formType: string,
    creatorId: string,
    creatorName: string,
    creatorEmail: string
  ): FormSession {
    const sessionId = this.generateSessionId();
    const creator: Collaborator = {
      id: creatorId,
      name: creatorName,
      email: creatorEmail,
      role: 'petitioner',
      permissions: {
        canEdit: true,
        canComment: true,
        canApprove: true,
        canShare: true
      },
      status: 'active',
      lastActive: new Date(),
      color: this.generateUserColor(0)
    };

    const session: FormSession = {
      id: sessionId,
      formId,
      formType,
      createdBy: creatorId,
      createdAt: new Date(),
      lastModified: new Date(),
      collaborators: [creator],
      status: 'draft',
      version: 1,
      shareLink: this.generateShareLink(sessionId),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
    };

    this.sessions.set(sessionId, session);
    this.changes.set(sessionId, []);
    this.comments.set(sessionId, []);
    this.activeConnections.set(sessionId, new Set());

    return session;
  }

  // Add a collaborator to the session
  addCollaborator(
    sessionId: string,
    collaborator: Omit<Collaborator, 'color' | 'status'>
  ): Collaborator | null {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    const existingCollaborator = session.collaborators.find(c => c.email === collaborator.email);
    if (existingCollaborator) return existingCollaborator;

    const newCollaborator: Collaborator = {
      ...collaborator,
      status: 'invited',
      color: this.generateUserColor(session.collaborators.length),
      lastActive: undefined
    };

    session.collaborators.push(newCollaborator);
    session.lastModified = new Date();
    
    this.emit('collaborator-added', { sessionId, collaborator: newCollaborator });
    
    return newCollaborator;
  }

  // Remove a collaborator
  removeCollaborator(sessionId: string, collaboratorId: string): boolean {
    const session = this.sessions.get(sessionId);
    if (!session) return false;

    const index = session.collaborators.findIndex(c => c.id === collaboratorId);
    if (index === -1) return false;

    // Can't remove the creator
    if (session.collaborators[index].id === session.createdBy) return false;

    session.collaborators.splice(index, 1);
    session.lastModified = new Date();

    this.emit('collaborator-removed', { sessionId, collaboratorId });
    
    return true;
  }

  // Join a session (mark user as active)
  joinSession(sessionId: string, userId: string): boolean {
    const session = this.sessions.get(sessionId);
    if (!session) return false;

    const collaborator = session.collaborators.find(c => c.id === userId);
    if (!collaborator) return false;

    collaborator.status = 'active';
    collaborator.lastActive = new Date();

    let connections = this.activeConnections.get(sessionId);
    if (!connections) {
      connections = new Set();
      this.activeConnections.set(sessionId, connections);
    }
    connections.add(userId);

    this.emit('user-joined', { sessionId, userId });
    this.broadcastPresence(sessionId);

    return true;
  }

  // Leave a session
  leaveSession(sessionId: string, userId: string): boolean {
    const connections = this.activeConnections.get(sessionId);
    if (!connections) return false;

    connections.delete(userId);

    const session = this.sessions.get(sessionId);
    if (session) {
      const collaborator = session.collaborators.find(c => c.id === userId);
      if (collaborator) {
        collaborator.status = 'inactive';
      }
    }

    // Release any field locks held by this user
    this.releaseAllFieldLocks(sessionId, userId);

    this.emit('user-left', { sessionId, userId });
    this.broadcastPresence(sessionId);

    return true;
  }

  // Lock a field for editing
  lockField(sessionId: string, userId: string, fieldName: string): boolean {
    const lockKey = `${sessionId}-${fieldName}`;
    const existingLock = this.fieldLocks.get(lockKey);

    if (existingLock && existingLock.userId !== userId) {
      return false; // Field is locked by another user
    }

    this.fieldLocks.set(lockKey, { sessionId, userId, fieldName });
    this.emit('field-locked', { sessionId, userId, fieldName });

    // Auto-release lock after 5 minutes of inactivity
    setTimeout(() => {
      this.unlockField(sessionId, userId, fieldName);
    }, 5 * 60 * 1000);

    return true;
  }

  // Unlock a field
  unlockField(sessionId: string, userId: string, fieldName: string): boolean {
    const lockKey = `${sessionId}-${fieldName}`;
    const lock = this.fieldLocks.get(lockKey);

    if (!lock || lock.userId !== userId) {
      return false;
    }

    this.fieldLocks.delete(lockKey);
    this.emit('field-unlocked', { sessionId, userId, fieldName });

    return true;
  }

  // Release all locks for a user in a session
  private releaseAllFieldLocks(sessionId: string, userId: string): void {
    const locksToRelease: string[] = [];

    this.fieldLocks.forEach((lock, key) => {
      if (lock.sessionId === sessionId && lock.userId === userId) {
        locksToRelease.push(key);
      }
    });

    locksToRelease.forEach(key => {
      this.fieldLocks.delete(key);
      const lock = this.fieldLocks.get(key);
      if (lock) {
        this.emit('field-unlocked', { 
          sessionId, 
          userId, 
          fieldName: lock.fieldName 
        });
      }
    });
  }

  // Apply a change to a form field
  applyChange(
    sessionId: string,
    userId: string,
    fieldName: string,
    oldValue: any,
    newValue: any,
    comment?: string
  ): FormChange | null {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    const collaborator = session.collaborators.find(c => c.id === userId);
    if (!collaborator || !collaborator.permissions.canEdit) return null;

    const change: FormChange = {
      id: this.generateChangeId(),
      sessionId,
      fieldName,
      oldValue,
      newValue,
      changedBy: userId,
      changedAt: new Date(),
      changeType: 'edit',
      comment
    };

    const sessionChanges = this.changes.get(sessionId) || [];
    sessionChanges.push(change);
    this.changes.set(sessionId, sessionChanges);

    session.lastModified = new Date();
    session.version++;

    this.emit('field-changed', change);
    this.broadcastChange(sessionId, change);

    return change;
  }

  // Add a comment to a field or form
  addComment(
    sessionId: string,
    userId: string,
    comment: string,
    fieldName?: string
  ): FormComment | null {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    const collaborator = session.collaborators.find(c => c.id === userId);
    if (!collaborator || !collaborator.permissions.canComment) return null;

    const newComment: FormComment = {
      id: this.generateCommentId(),
      sessionId,
      fieldName,
      comment,
      author: userId,
      createdAt: new Date(),
      resolved: false,
      replies: []
    };

    const sessionComments = this.comments.get(sessionId) || [];
    sessionComments.push(newComment);
    this.comments.set(sessionId, sessionComments);

    this.emit('comment-added', newComment);
    this.broadcastComment(sessionId, newComment);

    return newComment;
  }

  // Resolve a comment
  resolveComment(sessionId: string, commentId: string, userId: string): boolean {
    const sessionComments = this.comments.get(sessionId);
    if (!sessionComments) return false;

    const comment = sessionComments.find(c => c.id === commentId);
    if (!comment) return false;

    comment.resolved = true;
    
    this.emit('comment-resolved', { sessionId, commentId, userId });
    
    return true;
  }

  // Get session history
  getSessionHistory(sessionId: string): FormChange[] {
    return this.changes.get(sessionId) || [];
  }

  // Get session comments
  getSessionComments(sessionId: string, fieldName?: string): FormComment[] {
    const sessionComments = this.comments.get(sessionId) || [];
    
    if (fieldName) {
      return sessionComments.filter(c => c.fieldName === fieldName);
    }
    
    return sessionComments;
  }

  // Get active collaborators
  getActiveCollaborators(sessionId: string): Collaborator[] {
    const session = this.sessions.get(sessionId);
    if (!session) return [];

    const activeConnections = this.activeConnections.get(sessionId) || new Set();
    
    return session.collaborators.filter(c => 
      activeConnections.has(c.id) || c.status === 'active'
    );
  }

  // Check if a field is locked
  isFieldLocked(sessionId: string, fieldName: string): { locked: boolean; by?: string } {
    const lockKey = `${sessionId}-${fieldName}`;
    const lock = this.fieldLocks.get(lockKey);

    if (lock) {
      return { locked: true, by: lock.userId };
    }

    return { locked: false };
  }

  // Approve form for submission
  approveForm(sessionId: string, userId: string): boolean {
    const session = this.sessions.get(sessionId);
    if (!session) return false;

    const collaborator = session.collaborators.find(c => c.id === userId);
    if (!collaborator || !collaborator.permissions.canApprove) return false;

    session.status = 'approved';
    session.lastModified = new Date();

    const change: FormChange = {
      id: this.generateChangeId(),
      sessionId,
      fieldName: '_form_status',
      oldValue: 'in_review',
      newValue: 'approved',
      changedBy: userId,
      changedAt: new Date(),
      changeType: 'approval'
    };

    const sessionChanges = this.changes.get(sessionId) || [];
    sessionChanges.push(change);
    this.changes.set(sessionId, sessionChanges);

    this.emit('form-approved', { sessionId, userId });

    return true;
  }

  // Detect and resolve conflicts
  detectConflicts(
    sessionId: string,
    fieldName: string,
    userValue: any,
    timestamp: Date
  ): ConflictResolution | null {
    const sessionChanges = this.changes.get(sessionId) || [];
    
    // Find changes to this field after the given timestamp
    const conflictingChanges = sessionChanges.filter(c => 
      c.fieldName === fieldName && 
      c.changedAt > timestamp
    );

    if (conflictingChanges.length === 0) {
      return null;
    }

    const latestChange = conflictingChanges[conflictingChanges.length - 1];

    return {
      fieldName,
      yourValue: userValue,
      theirValue: latestChange.newValue,
      timestamp: latestChange.changedAt,
      resolvedBy: undefined,
      resolution: undefined
    };
  }

  // Resolve a conflict
  resolveConflict(
    sessionId: string,
    fieldName: string,
    resolution: 'yours' | 'theirs' | 'merged',
    mergedValue?: any,
    userId?: string
  ): boolean {
    const finalValue = resolution === 'merged' ? mergedValue : 
                       resolution === 'yours' ? undefined : undefined;

    if (resolution === 'merged' && finalValue !== undefined && userId) {
      this.applyChange(sessionId, userId, fieldName, undefined, finalValue, 'Merged conflict resolution');
    }

    this.emit('conflict-resolved', { sessionId, fieldName, resolution });

    return true;
  }

  // Broadcast changes to all active collaborators
  private broadcastChange(sessionId: string, change: FormChange): void {
    this.emit('broadcast-change', { sessionId, change });
  }

  // Broadcast comments to all active collaborators
  private broadcastComment(sessionId: string, comment: FormComment): void {
    this.emit('broadcast-comment', { sessionId, comment });
  }

  // Broadcast presence updates
  private broadcastPresence(sessionId: string): void {
    const activeCollaborators = this.getActiveCollaborators(sessionId);
    this.emit('presence-update', { sessionId, collaborators: activeCollaborators });
  }

  // Generate unique IDs
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateChangeId(): string {
    return `change_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateCommentId(): string {
    return `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateShareLink(sessionId: string): string {
    const code = Buffer.from(sessionId).toString('base64').substr(0, 8);
    return `${process.env.NEXT_PUBLIC_BASE_URL || ''}/forms/collaborate/${code}`;
  }

  private generateUserColor(index: number): string {
    const colors = [
      '#3B82F6', // blue
      '#10B981', // green
      '#F59E0B', // amber
      '#EF4444', // red
      '#8B5CF6', // purple
      '#EC4899', // pink
      '#14B8A6', // teal
      '#F97316'  // orange
    ];
    return colors[index % colors.length];
  }

  // Export session data
  exportSession(sessionId: string): any {
    const session = this.sessions.get(sessionId);
    const changes = this.changes.get(sessionId) || [];
    const comments = this.comments.get(sessionId) || [];

    return {
      session,
      changes,
      comments,
      exportDate: new Date(),
      version: '1.0'
    };
  }
}

// Export singleton instance
export const collaborativeEditing = new CollaborativeEditingService();

// React hooks for collaborative editing
export const useCollaborativeEditing = (sessionId: string, userId: string) => {
  const [session, setSession] = React.useState<FormSession | null>(null);
  const [collaborators, setCollaborators] = React.useState<Collaborator[]>([]);
  const [changes, setChanges] = React.useState<FormChange[]>([]);
  const [comments, setComments] = React.useState<FormComment[]>([]);
  const [fieldLocks, setFieldLocks] = React.useState<Map<string, string>>(new Map());

  React.useEffect(() => {
    // Join session
    collaborativeEditing.joinSession(sessionId, userId);

    // Set up event listeners
    const handleFieldChanged = (data: any) => {
      if (data.sessionId === sessionId) {
        setChanges(prev => [...prev, data]);
      }
    };

    const handleCommentAdded = (data: any) => {
      if (data.sessionId === sessionId) {
        setComments(prev => [...prev, data]);
      }
    };

    const handlePresenceUpdate = (data: any) => {
      if (data.sessionId === sessionId) {
        setCollaborators(data.collaborators);
      }
    };

    const handleFieldLocked = (data: any) => {
      if (data.sessionId === sessionId) {
        setFieldLocks(prev => {
          const newLocks = new Map(prev);
          newLocks.set(data.fieldName, data.userId);
          return newLocks;
        });
      }
    };

    const handleFieldUnlocked = (data: any) => {
      if (data.sessionId === sessionId) {
        setFieldLocks(prev => {
          const newLocks = new Map(prev);
          newLocks.delete(data.fieldName);
          return newLocks;
        });
      }
    };

    collaborativeEditing.on('field-changed', handleFieldChanged);
    collaborativeEditing.on('comment-added', handleCommentAdded);
    collaborativeEditing.on('presence-update', handlePresenceUpdate);
    collaborativeEditing.on('field-locked', handleFieldLocked);
    collaborativeEditing.on('field-unlocked', handleFieldUnlocked);

    // Cleanup
    return () => {
      collaborativeEditing.leaveSession(sessionId, userId);
      collaborativeEditing.off('field-changed', handleFieldChanged);
      collaborativeEditing.off('comment-added', handleCommentAdded);
      collaborativeEditing.off('presence-update', handlePresenceUpdate);
      collaborativeEditing.off('field-locked', handleFieldLocked);
      collaborativeEditing.off('field-unlocked', handleFieldUnlocked);
    };
  }, [sessionId, userId]);

  return {
    session,
    collaborators,
    changes,
    comments,
    fieldLocks,
    lockField: (fieldName: string) => collaborativeEditing.lockField(sessionId, userId, fieldName),
    unlockField: (fieldName: string) => collaborativeEditing.unlockField(sessionId, userId, fieldName),
    applyChange: (fieldName: string, oldValue: any, newValue: any, comment?: string) => 
      collaborativeEditing.applyChange(sessionId, userId, fieldName, oldValue, newValue, comment),
    addComment: (comment: string, fieldName?: string) => 
      collaborativeEditing.addComment(sessionId, userId, comment, fieldName),
    resolveComment: (commentId: string) => 
      collaborativeEditing.resolveComment(sessionId, commentId, userId),
    approveForm: () => collaborativeEditing.approveForm(sessionId, userId)
  };
};