/**
 * Implementation Plan Progress Tracker
 * Based on IMPLEMENTATION_PLAN.md - 16 week development plan
 */

export interface Sprint {
  id: string;
  name: string;
  phase: string;
  weekStart: number;
  weekEnd: number;
  status: 'not-started' | 'in-progress' | 'completed';
  deliverables: string[];
  completedDeliverables: string[];
}

export interface ImplementationProgress {
  totalWeeks: number;
  currentWeek: number;
  startDate: string;
  phases: Phase[];
  sprints: Sprint[];
  budget: {
    total: number;
    spent: number;
  };
}

export interface Phase {
  name: string;
  weeks: string;
  status: 'not-started' | 'in-progress' | 'completed';
  description: string;
}

export const implementationData: ImplementationProgress = {
  totalWeeks: 16,
  currentWeek: 6, // Week 6 - Sprint 3 complete!
  startDate: '2025-01-06', // Project kickoff
  
  phases: [
    {
      name: 'Foundation',
      weeks: '1-4',
      status: 'completed',
      description: 'Critical infrastructure and gaps'
    },
    {
      name: 'User Journey Enhancement',
      weeks: '5-8',
      status: 'in-progress',
      description: 'Assessment and financial tools'
    },
    {
      name: 'Form & Document System',
      weeks: '9-12',
      status: 'not-started',
      description: 'Automation and management'
    },
    {
      name: 'Advanced Features',
      weeks: '13-14',
      status: 'not-started',
      description: 'Personalization and communication'
    },
    {
      name: 'Polish & Launch',
      weeks: '15-16',
      status: 'not-started',
      description: 'Optimization and deployment'
    }
  ],
  
  sprints: [
    {
      id: 'sprint-1',
      name: 'Critical Infrastructure',
      phase: 'Foundation',
      weekStart: 1,
      weekEnd: 2,
      status: 'completed',
      deliverables: [
        'Development environment setup',
        'Component library foundation',
        'Child Support Calculator v1.0',
        'Quick Exit implementation',
        'Crisis keyword detection system',
        'Placeholder page completion'
      ],
      completedDeliverables: [
        'Development environment setup',
        'Component library foundation',
        'Child Support Calculator v1.0',
        'Quick Exit implementation',
        'Crisis keyword detection system',
        'Placeholder page completion'
      ]
    },
    {
      id: 'sprint-2',
      name: 'Core Tools',
      phase: 'Foundation',
      weekStart: 3,
      weekEnd: 4,
      status: 'completed',
      deliverables: [
        'Interactive Timeline Builder',
        'Document Checklist Generator',
        'Parenting Plan Builder v1.0',
        'Deadline Calculator',
        'Cost Estimation Tool'
      ],
      completedDeliverables: [
        'Interactive Timeline Builder',
        'Document Checklist Generator',
        'Parenting Plan Builder v1.0',
        'Deadline Calculator',
        'Cost Estimation Tool'
      ]
    },
    {
      id: 'sprint-3',
      name: 'Assessment Enhancement',
      phase: 'User Journey',
      weekStart: 5,
      weekEnd: 6,
      status: 'completed',
      deliverables: [
        'Save/Resume functionality',
        'Confidence scoring algorithm',
        'Printable action plans',
        'Time estimation system',
        'SMS/Email results delivery',
        'Follow-up reminder system'
      ],
      completedDeliverables: [
        'Save/Resume functionality',
        'Confidence scoring algorithm',
        'Printable action plans',
        'Time estimation system',
        'SMS/Email results delivery',
        'Follow-up reminder system'
      ]
    },
    {
      id: 'sprint-4',
      name: 'Financial Calculators',
      phase: 'User Journey',
      weekStart: 7,
      weekEnd: 8,
      status: 'not-started',
      deliverables: [
        'Spousal Maintenance Calculator',
        'Property Division Analyzer',
        'Modification Predictor',
        'Tax Impact Calculator',
        'Arrears Calculator',
        'Payment Method Comparator'
      ],
      completedDeliverables: []
    },
    {
      id: 'sprint-5',
      name: 'Form Automation',
      phase: 'Forms & Documents',
      weekStart: 9,
      weekEnd: 10,
      status: 'not-started',
      deliverables: [
        'Form Selection Wizard',
        'Auto-fill System',
        'Real-time Validation',
        'Version Control',
        'Collaborative Editing',
        'Form Packet Builder'
      ],
      completedDeliverables: []
    },
    {
      id: 'sprint-6',
      name: 'Document Management',
      phase: 'Forms & Documents',
      weekStart: 11,
      weekEnd: 12,
      status: 'not-started',
      deliverables: [
        'Document Organization System',
        'Template Library',
        'Deadline Tracker',
        'Evidence Manager',
        'Service Proof Generator',
        'Document Preview System'
      ],
      completedDeliverables: []
    },
    {
      id: 'sprint-7',
      name: 'Personalization',
      phase: 'Advanced Features',
      weekStart: 13,
      weekEnd: 13,
      status: 'not-started',
      deliverables: [
        'User Dashboard',
        'Progress Tracking',
        'Personalized Recommendations',
        'Multi-case Management',
        'Bookmark System',
        'Note-taking Feature'
      ],
      completedDeliverables: []
    },
    {
      id: 'sprint-8',
      name: 'Communication Tools',
      phase: 'Advanced Features',
      weekStart: 14,
      weekEnd: 14,
      status: 'not-started',
      deliverables: [
        'Secure Messaging System',
        'Peer Support Forums',
        'Expert Q&A Platform',
        'Video Tutorial Library',
        'Live Chat Widget',
        'Community Resources'
      ],
      completedDeliverables: []
    },
    {
      id: 'sprint-9',
      name: 'Optimization',
      phase: 'Polish & Launch',
      weekStart: 15,
      weekEnd: 15,
      status: 'not-started',
      deliverables: [
        'Performance optimization',
        'Accessibility audit and fixes',
        'Mobile optimization',
        'Cross-browser testing',
        'Security audit',
        'Load testing'
      ],
      completedDeliverables: []
    },
    {
      id: 'sprint-10',
      name: 'Launch Preparation',
      phase: 'Polish & Launch',
      weekStart: 16,
      weekEnd: 16,
      status: 'not-started',
      deliverables: [
        'Final bug fixes',
        'Documentation completion',
        'Training materials',
        'Deployment procedures',
        'Monitoring setup',
        'Launch communication'
      ],
      completedDeliverables: []
    }
  ],
  
  budget: {
    total: 540800,
    spent: 146700 // Sprint 1, 2 & 3 completed (6 weeks of development)
  }
};

// Helper functions
export function getImplementationProgress(): number {
  const { sprints } = implementationData;
  const totalDeliverables = sprints.reduce((sum, sprint) => sum + sprint.deliverables.length, 0);
  const completedDeliverables = sprints.reduce((sum, sprint) => sum + sprint.completedDeliverables.length, 0);
  
  if (totalDeliverables === 0) return 0;
  return Math.round((completedDeliverables / totalDeliverables) * 100);
}

export function getCurrentPhase(): Phase | null {
  return implementationData.phases.find(phase => phase.status === 'in-progress') || null;
}

export function getCurrentSprint(): Sprint | null {
  return implementationData.sprints.find(sprint => sprint.status === 'in-progress') || null;
}

export function getSprintProgress(sprintId: string): number {
  const sprint = implementationData.sprints.find(s => s.id === sprintId);
  if (!sprint) return 0;
  if (sprint.deliverables.length === 0) return 0;
  return Math.round((sprint.completedDeliverables.length / sprint.deliverables.length) * 100);
}

export function getPhaseProgress(phaseName: string): number {
  const phaseSprints = implementationData.sprints.filter(s => s.phase === phaseName);
  const totalDeliverables = phaseSprints.reduce((sum, sprint) => sum + sprint.deliverables.length, 0);
  const completedDeliverables = phaseSprints.reduce((sum, sprint) => sum + sprint.completedDeliverables.length, 0);
  
  if (totalDeliverables === 0) return 0;
  return Math.round((completedDeliverables / totalDeliverables) * 100);
}

export function getBudgetProgress(): number {
  const { budget } = implementationData;
  if (budget.total === 0) return 0;
  return Math.round((budget.spent / budget.total) * 100);
}

export function getTimeProgress(): number {
  const { currentWeek, totalWeeks } = implementationData;
  if (totalWeeks === 0) return 0;
  return Math.round((currentWeek / totalWeeks) * 100);
}

export function getImplementationStats() {
  const totalSprints = implementationData.sprints.length;
  const completedSprints = implementationData.sprints.filter(s => s.status === 'completed').length;
  const inProgressSprints = implementationData.sprints.filter(s => s.status === 'in-progress').length;
  const totalDeliverables = implementationData.sprints.reduce((sum, sprint) => sum + sprint.deliverables.length, 0);
  const completedDeliverables = implementationData.sprints.reduce((sum, sprint) => sum + sprint.completedDeliverables.length, 0);
  
  return {
    totalSprints,
    completedSprints,
    inProgressSprints,
    totalDeliverables,
    completedDeliverables,
    progressPercentage: getImplementationProgress(),
    budgetPercentage: getBudgetProgress(),
    timePercentage: getTimeProgress(),
    currentPhase: getCurrentPhase()?.name || 'Not Started',
    currentSprint: getCurrentSprint()?.name || 'Not Started',
    weeksRemaining: implementationData.totalWeeks - implementationData.currentWeek
  };
}