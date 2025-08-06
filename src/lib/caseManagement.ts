// Case Management System for tracking family law cases
// Provides comprehensive case tracking, timeline management, and task organization

import { EventEmitter } from 'events';

export interface CaseParty {
  id: string;
  name: string;
  role: 'petitioner' | 'respondent' | 'child' | 'attorney' | 'guardian' | 'mediator' | 'expert';
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  attorney?: {
    name: string;
    barNumber: string;
    firm?: string;
    email?: string;
    phone?: string;
  };
  represented: boolean;
}

export interface Case {
  id: string;
  caseNumber: string;
  title: string;
  type: 'divorce' | 'custody' | 'support' | 'modification' | 'protection_order' | 'paternity' | 'adoption';
  status: 'intake' | 'filed' | 'served' | 'discovery' | 'negotiation' | 'trial_prep' | 'trial' | 'settled' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: Date;
  filedDate?: Date;
  serviceDate?: Date;
  parties: CaseParty[];
  court: {
    name: string;
    address?: string;
    department?: string;
    judge?: string;
    commissioner?: string;
  };
  children?: {
    name: string;
    dateOfBirth: Date;
    primaryResidence?: 'petitioner' | 'respondent' | 'joint';
  }[];
  issues: {
    divorce?: boolean;
    legalSeparation?: boolean;
    custody?: boolean;
    childSupport?: boolean;
    spousalMaintenance?: boolean;
    propertyDivision?: boolean;
    debts?: boolean;
    attorneysFees?: boolean;
  };
  financials?: {
    petitionerMonthlyIncome?: number;
    respondentMonthlyIncome?: number;
    childSupportAmount?: number;
    spousalMaintenanceAmount?: number;
    propertyValue?: number;
    debtsTotal?: number;
  };
  notes?: string;
  tags?: string[];
}

export interface CaseEvent {
  id: string;
  caseId: string;
  type: 'filing' | 'hearing' | 'deadline' | 'meeting' | 'communication' | 'discovery' | 'motion' | 'order' | 'settlement' | 'other';
  title: string;
  description?: string;
  date: Date;
  time?: string;
  duration?: number; // in minutes
  location?: string;
  participants?: string[];
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled' | 'missed';
  outcome?: string;
  documents?: string[]; // Document IDs
  reminders?: {
    type: 'email' | 'push' | 'sms';
    beforeMinutes: number;
    sent: boolean;
  }[];
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    until?: Date;
    occurrences?: number;
  };
  linkedEvents?: string[]; // Related event IDs
  category?: string;
  visibility: 'public' | 'private' | 'attorney_only';
}

export interface CaseTask {
  id: string;
  caseId: string;
  title: string;
  description?: string;
  assignedTo?: string;
  category: 'filing' | 'discovery' | 'communication' | 'court' | 'financial' | 'investigation' | 'preparation' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'blocked';
  dueDate?: Date;
  completedDate?: Date;
  estimatedHours?: number;
  actualHours?: number;
  dependencies?: string[]; // Task IDs that must be completed first
  subtasks?: {
    id: string;
    title: string;
    completed: boolean;
    completedDate?: Date;
  }[];
  attachments?: string[]; // Document IDs
  notes?: string;
  recurring?: boolean;
  billable?: boolean;
  billingRate?: number;
  blockedReason?: string;
  tags?: string[];
}

export interface CaseTimeline {
  caseId: string;
  events: CaseEvent[];
  milestones: {
    id: string;
    title: string;
    date: Date;
    achieved: boolean;
    description?: string;
    icon?: string;
  }[];
  phases: {
    name: string;
    startDate: Date;
    endDate?: Date;
    status: 'pending' | 'active' | 'completed';
    description?: string;
    tasks?: string[]; // Task IDs
  }[];
}

export interface CaseStatistics {
  caseId: string;
  totalEvents: number;
  completedEvents: number;
  upcomingEvents: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  documentsCount: number;
  communicationsCount: number;
  totalBillableHours: number;
  estimatedCompletion?: Date;
  daysActive: number;
  nextCriticalDate?: Date;
  complianceStatus: 'compliant' | 'at_risk' | 'non_compliant';
}

export interface CaseTemplate {
  id: string;
  name: string;
  type: Case['type'];
  description: string;
  defaultTasks: Omit<CaseTask, 'id' | 'caseId' | 'status' | 'completedDate'>[];
  defaultEvents: Omit<CaseEvent, 'id' | 'caseId' | 'status'>[];
  defaultPhases: {
    name: string;
    duration: number; // days
    tasks: string[];
  }[];
  estimatedDuration: number; // days
  requiredDocuments: string[];
}

class CaseManagementService extends EventEmitter {
  private cases: Map<string, Case> = new Map();
  private events: Map<string, CaseEvent[]> = new Map();
  private tasks: Map<string, CaseTask[]> = new Map();
  private templates: Map<string, CaseTemplate> = new Map();
  private notifications: Map<string, any[]> = new Map();

  constructor() {
    super();
    this.initializeTemplates();
  }

  private initializeTemplates() {
    const divorceTemplate: CaseTemplate = {
      id: 'divorce-standard',
      name: 'Standard Divorce',
      type: 'divorce',
      description: 'Template for standard divorce proceedings',
      estimatedDuration: 180,
      defaultTasks: [
        {
          title: 'Prepare and file petition',
          category: 'filing',
          priority: 'high',
          estimatedHours: 3
        },
        {
          title: 'Serve respondent',
          category: 'filing',
          priority: 'high',
          estimatedHours: 1,
          dependencies: ['Prepare and file petition']
        },
        {
          title: 'Complete financial disclosure',
          category: 'discovery',
          priority: 'high',
          estimatedHours: 5
        },
        {
          title: 'Attend parenting class',
          category: 'court',
          priority: 'medium',
          estimatedHours: 4
        },
        {
          title: 'Prepare parenting plan',
          category: 'preparation',
          priority: 'high',
          estimatedHours: 3
        }
      ],
      defaultEvents: [
        {
          type: 'deadline',
          title: 'Service deadline (120 days)',
          date: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000),
          visibility: 'public'
        },
        {
          type: 'deadline',
          title: 'Financial disclosure due',
          date: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000),
          visibility: 'public'
        }
      ],
      defaultPhases: [
        {
          name: 'Filing & Service',
          duration: 30,
          tasks: ['Prepare and file petition', 'Serve respondent']
        },
        {
          name: 'Discovery',
          duration: 60,
          tasks: ['Complete financial disclosure']
        },
        {
          name: 'Negotiation',
          duration: 45,
          tasks: ['Prepare parenting plan']
        },
        {
          name: 'Resolution',
          duration: 45,
          tasks: []
        }
      ],
      requiredDocuments: [
        'Petition for Dissolution',
        'Summons',
        'Preliminary Injunction',
        'Financial Affidavit',
        'Parenting Plan'
      ]
    };

    this.templates.set(divorceTemplate.id, divorceTemplate);
  }

  // Create a new case
  createCase(caseData: Omit<Case, 'id' | 'createdAt'>): Case {
    const caseId = this.generateId('case');
    
    const newCase: Case = {
      id: caseId,
      createdAt: new Date(),
      ...caseData
    };

    this.cases.set(caseId, newCase);
    this.events.set(caseId, []);
    this.tasks.set(caseId, []);

    // Apply template if specified
    if (caseData.type) {
      const template = Array.from(this.templates.values()).find(t => t.type === caseData.type);
      if (template) {
        this.applyTemplate(caseId, template.id);
      }
    }

    this.emit('case-created', newCase);
    
    return newCase;
  }

  // Apply a template to a case
  applyTemplate(caseId: string, templateId: string): boolean {
    const template = this.templates.get(templateId);
    const caseData = this.cases.get(caseId);
    
    if (!template || !caseData) return false;

    // Add default tasks
    const caseTasks = this.tasks.get(caseId) || [];
    template.defaultTasks.forEach(taskTemplate => {
      const task: CaseTask = {
        id: this.generateId('task'),
        caseId,
        status: 'pending',
        ...taskTemplate
      };
      caseTasks.push(task);
    });
    this.tasks.set(caseId, caseTasks);

    // Add default events
    const caseEvents = this.events.get(caseId) || [];
    template.defaultEvents.forEach(eventTemplate => {
      const event: CaseEvent = {
        id: this.generateId('event'),
        caseId,
        status: 'scheduled',
        ...eventTemplate
      };
      caseEvents.push(event);
    });
    this.events.set(caseId, caseEvents);

    this.emit('template-applied', { caseId, templateId });
    
    return true;
  }

  // Add an event to a case
  addEvent(caseId: string, eventData: Omit<CaseEvent, 'id' | 'caseId'>): CaseEvent | null {
    const caseEvents = this.events.get(caseId);
    if (!caseEvents) return null;

    const event: CaseEvent = {
      id: this.generateId('event'),
      caseId,
      ...eventData
    };

    caseEvents.push(event);
    
    // Schedule reminders
    if (event.reminders) {
      this.scheduleReminders(event);
    }

    // Handle recurring events
    if (event.recurring) {
      this.createRecurringEvents(caseId, event);
    }

    this.emit('event-added', event);
    
    return event;
  }

  // Add a task to a case
  addTask(caseId: string, taskData: Omit<CaseTask, 'id' | 'caseId' | 'status'>): CaseTask | null {
    const caseTasks = this.tasks.get(caseId);
    if (!caseTasks) return null;

    const task: CaseTask = {
      id: this.generateId('task'),
      caseId,
      status: 'pending',
      ...taskData
    };

    caseTasks.push(task);
    
    this.emit('task-added', task);
    
    return task;
  }

  // Update case status
  updateCaseStatus(caseId: string, status: Case['status']): boolean {
    const caseData = this.cases.get(caseId);
    if (!caseData) return false;

    const oldStatus = caseData.status;
    caseData.status = status;

    // Log status change
    this.addEvent(caseId, {
      type: 'other',
      title: `Case status changed from ${oldStatus} to ${status}`,
      date: new Date(),
      status: 'completed',
      visibility: 'private'
    });

    this.emit('case-status-changed', { caseId, oldStatus, newStatus: status });
    
    return true;
  }

  // Update event status
  updateEventStatus(eventId: string, status: CaseEvent['status'], outcome?: string): boolean {
    for (const [caseId, events] of this.events.entries()) {
      const event = events.find(e => e.id === eventId);
      if (event) {
        event.status = status;
        if (outcome) event.outcome = outcome;
        
        this.emit('event-status-changed', { eventId, status, outcome });
        return true;
      }
    }
    return false;
  }

  // Update task status
  updateTaskStatus(taskId: string, status: CaseTask['status']): boolean {
    for (const [caseId, tasks] of this.tasks.entries()) {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        task.status = status;
        
        if (status === 'completed') {
          task.completedDate = new Date();
          
          // Check dependencies for other tasks
          this.checkTaskDependencies(caseId, taskId);
        }
        
        this.emit('task-status-changed', { taskId, status });
        return true;
      }
    }
    return false;
  }

  // Check and update tasks with dependencies
  private checkTaskDependencies(caseId: string, completedTaskId: string): void {
    const tasks = this.tasks.get(caseId);
    if (!tasks) return;

    tasks.forEach(task => {
      if (task.dependencies?.includes(completedTaskId)) {
        const allDependenciesMet = task.dependencies.every(depId => {
          const depTask = tasks.find(t => t.id === depId);
          return depTask?.status === 'completed';
        });

        if (allDependenciesMet && task.status === 'blocked') {
          task.status = 'pending';
          this.emit('task-unblocked', task);
        }
      }
    });
  }

  // Get case timeline
  getCaseTimeline(caseId: string): CaseTimeline | null {
    const caseData = this.cases.get(caseId);
    const events = this.events.get(caseId);
    
    if (!caseData || !events) return null;

    // Generate milestones based on case events
    const milestones = [
      {
        id: 'filing',
        title: 'Case Filed',
        date: caseData.filedDate || caseData.createdAt,
        achieved: !!caseData.filedDate,
        icon: 'file'
      },
      {
        id: 'service',
        title: 'Service Complete',
        date: caseData.serviceDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        achieved: !!caseData.serviceDate,
        icon: 'check'
      }
    ];

    // Generate phases based on case type and status
    const phases = this.generatePhases(caseData);

    return {
      caseId,
      events: events.sort((a, b) => a.date.getTime() - b.date.getTime()),
      milestones,
      phases
    };
  }

  // Generate phases based on case type
  private generatePhases(caseData: Case): CaseTimeline['phases'] {
    const phases: CaseTimeline['phases'] = [];
    
    if (caseData.type === 'divorce') {
      phases.push(
        {
          name: 'Filing & Service',
          startDate: caseData.createdAt,
          endDate: caseData.serviceDate,
          status: caseData.serviceDate ? 'completed' : 'active',
          description: 'Initial filing and service of process'
        },
        {
          name: 'Discovery',
          startDate: caseData.serviceDate || new Date(),
          status: caseData.status === 'discovery' ? 'active' : 
                  caseData.status === 'filed' || caseData.status === 'served' ? 'pending' : 'completed',
          description: 'Exchange of financial information and documents'
        },
        {
          name: 'Negotiation/Mediation',
          startDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
          status: caseData.status === 'negotiation' ? 'active' : 'pending',
          description: 'Attempt to reach settlement'
        },
        {
          name: 'Trial/Resolution',
          startDate: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000),
          status: caseData.status === 'trial' || caseData.status === 'settled' ? 'active' : 'pending',
          description: 'Final resolution through trial or settlement'
        }
      );
    }

    return phases;
  }

  // Get case statistics
  getCaseStatistics(caseId: string): CaseStatistics | null {
    const caseData = this.cases.get(caseId);
    const events = this.events.get(caseId) || [];
    const tasks = this.tasks.get(caseId) || [];

    if (!caseData) return null;

    const now = new Date();
    const upcomingEvents = events.filter(e => e.date > now && e.status === 'scheduled');
    const completedEvents = events.filter(e => e.status === 'completed');
    const completedTasks = tasks.filter(t => t.status === 'completed');
    const overdueTasks = tasks.filter(t => 
      t.dueDate && t.dueDate < now && t.status !== 'completed' && t.status !== 'cancelled'
    );

    const totalBillableHours = tasks.reduce((sum, task) => {
      if (task.billable && task.actualHours) {
        return sum + task.actualHours;
      }
      return sum;
    }, 0);

    const daysActive = Math.floor((now.getTime() - caseData.createdAt.getTime()) / (1000 * 60 * 60 * 24));

    const nextCriticalDate = upcomingEvents
      .filter(e => e.type === 'hearing' || e.type === 'deadline')
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0]?.date;

    // Check compliance status
    const complianceStatus = overdueTasks.some(t => t.priority === 'urgent' || t.priority === 'high')
      ? 'non_compliant'
      : overdueTasks.length > 0
      ? 'at_risk'
      : 'compliant';

    return {
      caseId,
      totalEvents: events.length,
      completedEvents: completedEvents.length,
      upcomingEvents: upcomingEvents.length,
      totalTasks: tasks.length,
      completedTasks: completedTasks.length,
      overdueTasks: overdueTasks.length,
      documentsCount: 0, // Would be calculated from document service
      communicationsCount: 0, // Would be calculated from messaging service
      totalBillableHours,
      daysActive,
      nextCriticalDate,
      complianceStatus
    };
  }

  // Get upcoming events
  getUpcomingEvents(caseId?: string, days: number = 30): CaseEvent[] {
    const cutoffDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    const now = new Date();
    
    let allEvents: CaseEvent[] = [];
    
    if (caseId) {
      allEvents = this.events.get(caseId) || [];
    } else {
      for (const events of this.events.values()) {
        allEvents.push(...events);
      }
    }

    return allEvents
      .filter(e => e.date >= now && e.date <= cutoffDate && e.status === 'scheduled')
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  // Get overdue tasks
  getOverdueTasks(caseId?: string): CaseTask[] {
    const now = new Date();
    let allTasks: CaseTask[] = [];
    
    if (caseId) {
      allTasks = this.tasks.get(caseId) || [];
    } else {
      for (const tasks of this.tasks.values()) {
        allTasks.push(...tasks);
      }
    }

    return allTasks
      .filter(t => 
        t.dueDate && 
        t.dueDate < now && 
        t.status !== 'completed' && 
        t.status !== 'cancelled'
      )
      .sort((a, b) => {
        const aDue = a.dueDate!.getTime();
        const bDue = b.dueDate!.getTime();
        return aDue - bDue;
      });
  }

  // Create recurring events
  private createRecurringEvents(caseId: string, baseEvent: CaseEvent): void {
    if (!baseEvent.recurring) return;

    const { frequency, until, occurrences } = baseEvent.recurring;
    const events: CaseEvent[] = [];
    let currentDate = new Date(baseEvent.date);
    let count = 0;

    while (
      (!until || currentDate <= until) &&
      (!occurrences || count < occurrences)
    ) {
      // Increment date based on frequency
      switch (frequency) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + 7);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + 1);
          break;
      }

      if ((!until || currentDate <= until) && (!occurrences || count < occurrences - 1)) {
        const recurringEvent: CaseEvent = {
          ...baseEvent,
          id: this.generateId('event'),
          date: new Date(currentDate),
          linkedEvents: [...(baseEvent.linkedEvents || []), baseEvent.id]
        };
        
        events.push(recurringEvent);
        count++;
      }
    }

    const caseEvents = this.events.get(caseId);
    if (caseEvents) {
      caseEvents.push(...events);
    }
  }

  // Schedule reminders for an event
  private scheduleReminders(event: CaseEvent): void {
    if (!event.reminders) return;

    event.reminders.forEach(reminder => {
      const reminderTime = new Date(event.date.getTime() - reminder.beforeMinutes * 60 * 1000);
      
      // In production, this would schedule actual notifications
      if (reminderTime > new Date()) {
        setTimeout(() => {
          this.emit('reminder-triggered', {
            event,
            type: reminder.type,
            time: reminderTime
          });
          reminder.sent = true;
        }, reminderTime.getTime() - Date.now());
      }
    });
  }

  // Search cases
  searchCases(query: string): Case[] {
    const results: Case[] = [];
    const searchLower = query.toLowerCase();

    for (const caseData of this.cases.values()) {
      if (
        caseData.caseNumber.toLowerCase().includes(searchLower) ||
        caseData.title.toLowerCase().includes(searchLower) ||
        caseData.parties.some(p => p.name.toLowerCase().includes(searchLower)) ||
        caseData.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      ) {
        results.push(caseData);
      }
    }

    return results;
  }

  // Get all cases
  getAllCases(): Case[] {
    return Array.from(this.cases.values());
  }

  // Get case by ID
  getCase(caseId: string): Case | null {
    return this.cases.get(caseId) || null;
  }

  // Get case events
  getCaseEvents(caseId: string): CaseEvent[] {
    return this.events.get(caseId) || [];
  }

  // Get case tasks
  getCaseTasks(caseId: string): CaseTask[] {
    return this.tasks.get(caseId) || [];
  }

  // Generate unique ID
  private generateId(prefix: string): string {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Export case data
  exportCase(caseId: string): any {
    const caseData = this.cases.get(caseId);
    const events = this.events.get(caseId);
    const tasks = this.tasks.get(caseId);

    if (!caseData) return null;

    return {
      case: caseData,
      events,
      tasks,
      timeline: this.getCaseTimeline(caseId),
      statistics: this.getCaseStatistics(caseId),
      exportedAt: new Date()
    };
  }
}

// Export singleton instance
export const caseManagementService = new CaseManagementService();

// Export types
export type CaseType = Case['type'];
export type CaseStatus = Case['status'];
export type EventType = CaseEvent['type'];
export type TaskCategory = CaseTask['category'];
export type TaskStatus = CaseTask['status'];