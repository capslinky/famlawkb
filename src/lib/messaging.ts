// Secure Messaging System for Communication Between Parties
// Provides encrypted messaging with audit trails and court-admissible records

import { EventEmitter } from 'events';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'attorney' | 'client' | 'opposing_party' | 'mediator' | 'court_staff';
  avatar?: string;
  publicKey?: string; // For encryption
  verified: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  recipientIds: string[];
  content: string;
  timestamp: Date;
  edited?: boolean;
  editedAt?: Date;
  deleted?: boolean;
  deletedAt?: Date;
  attachments?: MessageAttachment[];
  readBy: Map<string, Date>;
  deliveredTo: Map<string, Date>;
  encrypted: boolean;
  signature?: string; // Digital signature for authenticity
  metadata?: {
    caseNumber?: string;
    subject?: string;
    urgent?: boolean;
    requiresResponse?: boolean;
    responseDeadline?: Date;
    legallyPrivileged?: boolean;
  };
}

export interface MessageAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: Date;
  scanned?: boolean; // Virus scan status
  encrypted: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  participants: User[];
  createdAt: Date;
  lastMessageAt: Date;
  lastMessage?: Message;
  type: 'direct' | 'group' | 'case_discussion' | 'mediation';
  caseId?: string;
  archived: boolean;
  pinned: boolean;
  muted: Map<string, boolean>; // User preferences for notifications
  settings: {
    endToEndEncryption: boolean;
    messageRetention: number; // days
    allowEditing: boolean;
    allowDeleting: boolean;
    requireReadReceipts: boolean;
    courtAdmissible: boolean;
  };
}

export interface MessageTemplate {
  id: string;
  name: string;
  category: string;
  subject: string;
  content: string;
  variables?: string[]; // Placeholders like {{clientName}}, {{caseNumber}}
  attachments?: string[]; // Default attachment IDs
}

export interface MessageDraft {
  id: string;
  conversationId?: string;
  recipientIds: string[];
  subject?: string;
  content: string;
  attachments: MessageAttachment[];
  createdAt: Date;
  lastSaved: Date;
}

export interface NotificationPreferences {
  userId: string;
  email: {
    enabled: boolean;
    immediateFor: ('urgent' | 'attorney' | 'court' | 'deadline')[];
    digestFrequency: 'immediate' | 'hourly' | 'daily' | 'weekly';
  };
  push: {
    enabled: boolean;
    types: ('message' | 'document' | 'deadline' | 'hearing')[];
  };
  sms: {
    enabled: boolean;
    onlyUrgent: boolean;
    phoneNumber?: string;
  };
  doNotDisturb: {
    enabled: boolean;
    startTime?: string; // "22:00"
    endTime?: string; // "08:00"
    weekendsOnly?: boolean;
  };
}

class MessagingService extends EventEmitter {
  private conversations: Map<string, Conversation> = new Map();
  private messages: Map<string, Message[]> = new Map();
  private drafts: Map<string, MessageDraft> = new Map();
  private templates: Map<string, MessageTemplate> = new Map();
  private users: Map<string, User> = new Map();
  private notificationPrefs: Map<string, NotificationPreferences> = new Map();
  private blockedUsers: Map<string, Set<string>> = new Map(); // userId -> Set of blocked userIds

  constructor() {
    super();
    this.initializeTemplates();
  }

  private initializeTemplates() {
    const defaultTemplates: MessageTemplate[] = [
      {
        id: 'initial-contact',
        name: 'Initial Client Contact',
        category: 'Client Communication',
        subject: 'Re: Your Family Law Case - {{caseNumber}}',
        content: `Dear {{clientName}},

Thank you for contacting our office regarding your family law matter. This message confirms receipt of your inquiry.

Next Steps:
1. Review the attached intake form
2. Gather the requested documents
3. Schedule your consultation

Please respond with any questions or to confirm your availability.

Best regards,
{{attorneyName}}`,
        variables: ['clientName', 'caseNumber', 'attorneyName']
      },
      {
        id: 'document-request',
        name: 'Document Request',
        category: 'Discovery',
        subject: 'Document Request - Response Required by {{deadline}}',
        content: `Dear {{recipientName}},

Please provide the following documents by {{deadline}}:

{{documentList}}

Documents can be uploaded securely through this messaging system or delivered to our office.

Thank you for your cooperation.

{{senderName}}`,
        variables: ['recipientName', 'deadline', 'documentList', 'senderName']
      },
      {
        id: 'settlement-proposal',
        name: 'Settlement Proposal',
        category: 'Negotiation',
        subject: 'Settlement Proposal for Review',
        content: `Dear {{recipientName}},

Please find attached our settlement proposal for your review. This proposal addresses:

- Property division
- Child custody arrangements
- Support obligations
- Other relevant matters

Please review and respond by {{responseDate}} with any questions or counter-proposals.

This communication is intended for settlement purposes only.

{{senderName}}`,
        variables: ['recipientName', 'responseDate', 'senderName']
      }
    ];

    defaultTemplates.forEach(template => {
      this.templates.set(template.id, template);
    });
  }

  // Create a new conversation
  createConversation(
    title: string,
    participants: User[],
    type: Conversation['type'],
    settings?: Partial<Conversation['settings']>
  ): Conversation {
    const conversationId = this.generateId('conv');
    
    const conversation: Conversation = {
      id: conversationId,
      title,
      participants,
      createdAt: new Date(),
      lastMessageAt: new Date(),
      type,
      archived: false,
      pinned: false,
      muted: new Map(),
      settings: {
        endToEndEncryption: true,
        messageRetention: 365, // 1 year default
        allowEditing: true,
        allowDeleting: false, // Preserve for legal record
        requireReadReceipts: true,
        courtAdmissible: true,
        ...settings
      }
    };

    this.conversations.set(conversationId, conversation);
    this.messages.set(conversationId, []);
    
    this.emit('conversation-created', conversation);
    
    return conversation;
  }

  // Send a message
  sendMessage(
    conversationId: string,
    senderId: string,
    content: string,
    recipientIds: string[],
    attachments?: MessageAttachment[],
    metadata?: Message['metadata']
  ): Message | null {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) return null;

    // Check if sender is blocked by any recipient
    for (const recipientId of recipientIds) {
      if (this.isUserBlocked(recipientId, senderId)) {
        this.emit('message-blocked', { senderId, recipientId });
        return null;
      }
    }

    const message: Message = {
      id: this.generateId('msg'),
      conversationId,
      senderId,
      recipientIds,
      content: conversation.settings.endToEndEncryption ? this.encryptContent(content) : content,
      timestamp: new Date(),
      attachments: attachments || [],
      readBy: new Map([[senderId, new Date()]]),
      deliveredTo: new Map(recipientIds.map(id => [id, new Date()])),
      encrypted: conversation.settings.endToEndEncryption,
      metadata
    };

    // Add signature for court admissibility
    if (conversation.settings.courtAdmissible) {
      message.signature = this.generateDigitalSignature(message);
    }

    const conversationMessages = this.messages.get(conversationId) || [];
    conversationMessages.push(message);
    this.messages.set(conversationId, conversationMessages);

    // Update conversation
    conversation.lastMessageAt = new Date();
    conversation.lastMessage = message;

    // Trigger notifications
    this.sendNotifications(message, conversation);

    this.emit('message-sent', message);

    return message;
  }

  // Mark message as read
  markAsRead(messageId: string, userId: string): boolean {
    for (const [convId, messages] of this.messages.entries()) {
      const message = messages.find(m => m.id === messageId);
      if (message) {
        message.readBy.set(userId, new Date());
        this.emit('message-read', { messageId, userId });
        return true;
      }
    }
    return false;
  }

  // Edit a message (if allowed)
  editMessage(messageId: string, userId: string, newContent: string): boolean {
    for (const [convId, messages] of this.messages.entries()) {
      const conversation = this.conversations.get(convId);
      const message = messages.find(m => m.id === messageId);
      
      if (message && conversation && 
          message.senderId === userId && 
          conversation.settings.allowEditing &&
          !message.deleted) {
        
        // Preserve original for audit trail
        const originalContent = message.content;
        
        message.content = conversation.settings.endToEndEncryption 
          ? this.encryptContent(newContent) 
          : newContent;
        message.edited = true;
        message.editedAt = new Date();
        
        // Log edit for court admissibility
        this.logMessageEdit(message.id, userId, originalContent, message.content);
        
        this.emit('message-edited', message);
        return true;
      }
    }
    return false;
  }

  // Soft delete a message (preserve for legal record)
  deleteMessage(messageId: string, userId: string): boolean {
    for (const [convId, messages] of this.messages.entries()) {
      const conversation = this.conversations.get(convId);
      const message = messages.find(m => m.id === messageId);
      
      if (message && conversation && 
          message.senderId === userId && 
          conversation.settings.allowDeleting) {
        
        // Soft delete only - preserve for legal record
        message.deleted = true;
        message.deletedAt = new Date();
        
        this.emit('message-deleted', message);
        return true;
      }
    }
    return false;
  }

  // Save draft message
  saveDraft(
    userId: string,
    content: string,
    recipientIds: string[],
    conversationId?: string,
    subject?: string
  ): MessageDraft {
    const draftId = this.generateId('draft');
    
    const draft: MessageDraft = {
      id: draftId,
      conversationId,
      recipientIds,
      subject,
      content,
      attachments: [],
      createdAt: new Date(),
      lastSaved: new Date()
    };

    this.drafts.set(draftId, draft);
    
    // Auto-save every 30 seconds
    setTimeout(() => {
      if (this.drafts.has(draftId)) {
        draft.lastSaved = new Date();
        this.emit('draft-saved', draft);
      }
    }, 30000);

    return draft;
  }

  // Get conversation history (with pagination)
  getConversationHistory(
    conversationId: string,
    limit: number = 50,
    before?: Date
  ): Message[] {
    const messages = this.messages.get(conversationId) || [];
    
    let filtered = messages;
    if (before) {
      filtered = messages.filter(m => m.timestamp < before);
    }

    // Return latest messages first
    return filtered
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit)
      .reverse(); // Reverse to show oldest first in conversation view
  }

  // Search messages
  searchMessages(
    userId: string,
    query: string,
    conversationId?: string,
    dateRange?: { start: Date; end: Date }
  ): Message[] {
    const results: Message[] = [];
    
    const conversationsToSearch = conversationId 
      ? [conversationId] 
      : Array.from(this.conversations.keys());

    for (const convId of conversationsToSearch) {
      const conversation = this.conversations.get(convId);
      const messages = this.messages.get(convId) || [];
      
      // Check if user is participant
      if (!conversation?.participants.some(p => p.id === userId)) continue;

      for (const message of messages) {
        // Skip deleted messages
        if (message.deleted) continue;

        // Check date range
        if (dateRange) {
          if (message.timestamp < dateRange.start || message.timestamp > dateRange.end) {
            continue;
          }
        }

        // Search in content (decrypt if needed)
        const content = message.encrypted ? this.decryptContent(message.content) : message.content;
        if (content.toLowerCase().includes(query.toLowerCase())) {
          results.push(message);
        }
      }
    }

    return results;
  }

  // Block/unblock user
  blockUser(userId: string, blockedUserId: string): boolean {
    const blocked = this.blockedUsers.get(userId) || new Set();
    blocked.add(blockedUserId);
    this.blockedUsers.set(userId, blocked);
    
    this.emit('user-blocked', { userId, blockedUserId });
    return true;
  }

  unblockUser(userId: string, blockedUserId: string): boolean {
    const blocked = this.blockedUsers.get(userId);
    if (blocked) {
      blocked.delete(blockedUserId);
      this.emit('user-unblocked', { userId, blockedUserId });
      return true;
    }
    return false;
  }

  isUserBlocked(userId: string, checkUserId: string): boolean {
    const blocked = this.blockedUsers.get(userId);
    return blocked ? blocked.has(checkUserId) : false;
  }

  // Update notification preferences
  updateNotificationPreferences(
    userId: string,
    preferences: Partial<NotificationPreferences>
  ): NotificationPreferences {
    const current = this.notificationPrefs.get(userId) || this.getDefaultPreferences(userId);
    const updated = { ...current, ...preferences };
    
    this.notificationPrefs.set(userId, updated);
    
    this.emit('preferences-updated', updated);
    return updated;
  }

  // Get default notification preferences
  private getDefaultPreferences(userId: string): NotificationPreferences {
    return {
      userId,
      email: {
        enabled: true,
        immediateFor: ['urgent', 'court', 'deadline'],
        digestFrequency: 'daily'
      },
      push: {
        enabled: true,
        types: ['message', 'document', 'deadline', 'hearing']
      },
      sms: {
        enabled: false,
        onlyUrgent: true
      },
      doNotDisturb: {
        enabled: false
      }
    };
  }

  // Send notifications based on preferences
  private sendNotifications(message: Message, conversation: Conversation): void {
    for (const recipientId of message.recipientIds) {
      // Check if conversation is muted for this user
      if (conversation.muted.get(recipientId)) continue;

      const prefs = this.notificationPrefs.get(recipientId) || this.getDefaultPreferences(recipientId);
      
      // Check Do Not Disturb
      if (this.isInDoNotDisturb(prefs)) continue;

      // Determine notification urgency
      const isUrgent = message.metadata?.urgent || false;
      const isFromAttorney = this.users.get(message.senderId)?.role === 'attorney';
      const isFromCourt = this.users.get(message.senderId)?.role === 'court_staff';
      const hasDeadline = message.metadata?.responseDeadline !== undefined;

      // Email notifications
      if (prefs.email.enabled) {
        const sendImmediate = 
          prefs.email.digestFrequency === 'immediate' ||
          (isUrgent && prefs.email.immediateFor.includes('urgent')) ||
          (isFromAttorney && prefs.email.immediateFor.includes('attorney')) ||
          (isFromCourt && prefs.email.immediateFor.includes('court')) ||
          (hasDeadline && prefs.email.immediateFor.includes('deadline'));

        if (sendImmediate) {
          this.emit('send-email', { recipientId, message, conversation });
        } else {
          this.queueForDigest(recipientId, message, conversation);
        }
      }

      // Push notifications
      if (prefs.push.enabled && prefs.push.types.includes('message')) {
        this.emit('send-push', { recipientId, message, conversation });
      }

      // SMS for urgent messages
      if (prefs.sms.enabled && isUrgent && prefs.sms.phoneNumber) {
        this.emit('send-sms', { 
          recipientId, 
          phoneNumber: prefs.sms.phoneNumber, 
          message, 
          conversation 
        });
      }
    }
  }

  // Check if user is in Do Not Disturb period
  private isInDoNotDisturb(prefs: NotificationPreferences): boolean {
    if (!prefs.doNotDisturb.enabled) return false;

    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // Check weekend setting
    if (prefs.doNotDisturb.weekendsOnly) {
      const dayOfWeek = now.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) return false; // Not weekend
    }

    // Check time range
    if (prefs.doNotDisturb.startTime && prefs.doNotDisturb.endTime) {
      const start = prefs.doNotDisturb.startTime;
      const end = prefs.doNotDisturb.endTime;
      
      if (start < end) {
        // Same day range (e.g., 09:00 to 17:00)
        return currentTime >= start && currentTime <= end;
      } else {
        // Overnight range (e.g., 22:00 to 08:00)
        return currentTime >= start || currentTime <= end;
      }
    }

    return false;
  }

  // Queue message for digest
  private queueForDigest(recipientId: string, message: Message, conversation: Conversation): void {
    // In production, this would add to a queue for batch processing
    this.emit('queue-digest', { recipientId, message, conversation });
  }

  // Export conversation for legal records
  exportConversation(conversationId: string, format: 'pdf' | 'json' | 'txt'): any {
    const conversation = this.conversations.get(conversationId);
    const messages = this.messages.get(conversationId) || [];

    if (!conversation) return null;

    const exportData: any = {
      conversation: {
        id: conversation.id,
        title: conversation.title,
        participants: conversation.participants,
        createdAt: conversation.createdAt,
        type: conversation.type,
        caseId: conversation.caseId,
        settings: conversation.settings
      },
      messages: messages.map(msg => ({
        ...msg,
        content: msg.encrypted ? '[ENCRYPTED]' : msg.content,
        readBy: Array.from(msg.readBy.entries()),
        deliveredTo: Array.from(msg.deliveredTo.entries())
      })),
      exportedAt: new Date(),
      exportFormat: format,
      disclaimer: 'This export is a true and accurate record of the conversation as of the export date.'
    };

    // Add digital signature for authenticity
    exportData.signature = this.generateExportSignature(exportData);

    return exportData;
  }

  // Encryption/Decryption (simplified - would use real crypto in production)
  private encryptContent(content: string): string {
    // In production, use proper encryption (AES-256, RSA, etc.)
    return Buffer.from(content).toString('base64');
  }

  private decryptContent(encrypted: string): string {
    // In production, use proper decryption
    return Buffer.from(encrypted, 'base64').toString();
  }

  // Generate digital signature for court admissibility
  private generateDigitalSignature(message: Message): string {
    // In production, use proper digital signature (RSA, ECDSA, etc.)
    const data = `${message.id}:${message.senderId}:${message.timestamp.toISOString()}:${message.content}`;
    return Buffer.from(data).toString('base64').substring(0, 32);
  }

  private generateExportSignature(data: any): string {
    // In production, use proper digital signature
    return Buffer.from(JSON.stringify(data)).toString('base64').substring(0, 32);
  }

  // Log message edits for audit trail
  private logMessageEdit(messageId: string, userId: string, originalContent: string, newContent: string): void {
    // In production, this would write to an immutable audit log
    this.emit('audit-log', {
      type: 'message-edit',
      messageId,
      userId,
      originalContent,
      newContent,
      timestamp: new Date()
    });
  }

  // Generate unique IDs
  private generateId(prefix: string): string {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Get user's conversations
  getUserConversations(userId: string): Conversation[] {
    const userConversations: Conversation[] = [];
    
    for (const conversation of this.conversations.values()) {
      if (conversation.participants.some(p => p.id === userId) && !conversation.archived) {
        userConversations.push(conversation);
      }
    }

    return userConversations.sort((a, b) => 
      b.lastMessageAt.getTime() - a.lastMessageAt.getTime()
    );
  }

  // Archive conversation
  archiveConversation(conversationId: string, userId: string): boolean {
    const conversation = this.conversations.get(conversationId);
    
    if (conversation && conversation.participants.some(p => p.id === userId)) {
      conversation.archived = true;
      this.emit('conversation-archived', { conversationId, userId });
      return true;
    }
    
    return false;
  }

  // Pin/unpin conversation
  togglePinConversation(conversationId: string, userId: string): boolean {
    const conversation = this.conversations.get(conversationId);
    
    if (conversation && conversation.participants.some(p => p.id === userId)) {
      conversation.pinned = !conversation.pinned;
      this.emit('conversation-pin-toggled', { conversationId, pinned: conversation.pinned });
      return true;
    }
    
    return false;
  }

  // Get message templates
  getTemplates(category?: string): MessageTemplate[] {
    const templates = Array.from(this.templates.values());
    
    if (category) {
      return templates.filter(t => t.category === category);
    }
    
    return templates;
  }

  // Apply template
  applyTemplate(templateId: string, variables: Record<string, string>): string {
    const template = this.templates.get(templateId);
    if (!template) return '';

    let content = template.content;
    
    // Replace variables
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      content = content.replace(regex, value);
    }

    return content;
  }
}

// Export singleton instance
export const messagingService = new MessagingService();

// Export types for message status
export type MessageStatus = 'sent' | 'delivered' | 'read';
export type ConversationType = Conversation['type'];
export type UserRole = User['role'];