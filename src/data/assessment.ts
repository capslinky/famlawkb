export interface AssessmentQuestion {
  id: string;
  question: string;
  description?: string;
  options: AssessmentOption[];
}

export interface AssessmentOption {
  id: string;
  label: string;
  nextQuestionId?: string;
  resultPath?: string;
  tags?: string[];
}

export interface AssessmentResult {
  path: string;
  title: string;
  description: string;
  recommendedActions: string[];
  urgencyLevel: 'immediate' | 'high' | 'medium' | 'low';
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'start',
    question: 'What best describes your current situation?',
    description: 'Select the option that most closely matches what you need help with.',
    options: [
      {
        id: 'divorce-start',
        label: 'I want to get divorced',
        nextQuestionId: 'divorce-status',
        tags: ['divorce']
      },
      {
        id: 'custody-issue',
        label: 'I have questions about child custody',
        nextQuestionId: 'custody-status',
        tags: ['custody', 'children']
      },
      {
        id: 'danger',
        label: 'I am in immediate danger',
        resultPath: '/emergency-help',
        tags: ['emergency', 'dv']
      },
      {
        id: 'served',
        label: 'I was served with papers',
        nextQuestionId: 'served-type',
        tags: ['responding']
      },
      {
        id: 'modify',
        label: 'I need to change an existing order',
        nextQuestionId: 'modify-type',
        tags: ['modification']
      },
      {
        id: 'support',
        label: 'I have questions about child/spousal support',
        nextQuestionId: 'support-type',
        tags: ['support', 'financial']
      }
    ]
  },
  
  // Divorce flow
  {
    id: 'divorce-status',
    question: 'What is your current marital status?',
    options: [
      {
        id: 'divorce-married',
        label: 'Currently married',
        nextQuestionId: 'divorce-children'
      },
      {
        id: 'divorce-separated',
        label: 'Separated but not divorced',
        nextQuestionId: 'divorce-children'
      },
      {
        id: 'divorce-filed',
        label: 'Divorce already filed',
        resultPath: '/modules/responding'
      }
    ]
  },
  
  {
    id: 'divorce-children',
    question: 'Do you have children under 18 with your spouse?',
    options: [
      {
        id: 'divorce-kids-yes',
        label: 'Yes',
        nextQuestionId: 'divorce-agreement'
      },
      {
        id: 'divorce-kids-no',
        label: 'No',
        nextQuestionId: 'divorce-agreement-simple'
      }
    ]
  },
  
  {
    id: 'divorce-agreement',
    question: 'Do you and your spouse agree on custody and support?',
    options: [
      {
        id: 'divorce-agree-yes',
        label: 'Yes, we agree on everything',
        resultPath: '/divorce/uncontested-with-children'
      },
      {
        id: 'divorce-agree-partial',
        label: 'We agree on some things',
        resultPath: '/divorce/contested-partial'
      },
      {
        id: 'divorce-agree-no',
        label: 'No, we disagree on most things',
        resultPath: '/divorce/contested-full'
      }
    ]
  },
  
  {
    id: 'divorce-agreement-simple',
    question: 'Do you and your spouse agree on property division?',
    options: [
      {
        id: 'divorce-property-yes',
        label: 'Yes, we agree',
        resultPath: '/divorce/uncontested-simple'
      },
      {
        id: 'divorce-property-no',
        label: 'No, we have disagreements',
        resultPath: '/divorce/contested-property'
      }
    ]
  },
  
  // Custody flow
  {
    id: 'custody-status',
    question: 'What is your current custody situation?',
    options: [
      {
        id: 'custody-none',
        label: 'No current custody order',
        nextQuestionId: 'custody-parents'
      },
      {
        id: 'custody-informal',
        label: 'Informal arrangement only',
        nextQuestionId: 'custody-working'
      },
      {
        id: 'custody-order',
        label: 'Have a court order',
        nextQuestionId: 'custody-change'
      }
    ]
  },
  
  {
    id: 'custody-parents',
    question: 'Are both parents on the birth certificate?',
    options: [
      {
        id: 'custody-both-yes',
        label: 'Yes, both parents',
        resultPath: '/custody/establish-order'
      },
      {
        id: 'custody-both-no',
        label: 'No, only one parent',
        resultPath: '/custody/paternity-first'
      },
      {
        id: 'custody-unsure',
        label: 'Not sure',
        resultPath: '/custody/determine-paternity'
      }
    ]
  },
  
  {
    id: 'custody-working',
    question: 'Is your current arrangement working?',
    options: [
      {
        id: 'custody-work-yes',
        label: 'Yes, but want it formalized',
        resultPath: '/custody/formalize-agreement'
      },
      {
        id: 'custody-work-no',
        label: 'No, need changes',
        resultPath: '/custody/establish-order'
      }
    ]
  },
  
  {
    id: 'custody-change',
    question: 'Why do you need to change custody?',
    options: [
      {
        id: 'custody-danger',
        label: 'Child is in danger',
        resultPath: '/custody/emergency-order'
      },
      {
        id: 'custody-moved',
        label: 'Someone relocated',
        resultPath: '/custody/relocation'
      },
      {
        id: 'custody-circumstances',
        label: 'Circumstances changed',
        resultPath: '/modules/modifications'
      }
    ]
  },
  
  // Served papers flow
  {
    id: 'served-type',
    question: 'What type of papers were you served?',
    options: [
      {
        id: 'served-divorce',
        label: 'Divorce papers',
        nextQuestionId: 'served-timeline'
      },
      {
        id: 'served-custody',
        label: 'Custody/paternity papers',
        nextQuestionId: 'served-timeline'
      },
      {
        id: 'served-protection',
        label: 'Order of Protection',
        resultPath: '/protection/responding-emergency'
      },
      {
        id: 'served-other',
        label: 'Other/Not sure',
        resultPath: '/modules/responding'
      }
    ]
  },
  
  {
    id: 'served-timeline',
    question: 'When were you served?',
    options: [
      {
        id: 'served-recent',
        label: 'Within the last 10 days',
        resultPath: '/responding/urgent-timeline'
      },
      {
        id: 'served-midrange',
        label: '10-20 days ago',
        resultPath: '/responding/standard-timeline'
      },
      {
        id: 'served-late',
        label: 'More than 20 days ago',
        resultPath: '/responding/late-response'
      }
    ]
  },
  
  // Modification flow
  {
    id: 'modify-type',
    question: 'What type of order do you need to modify?',
    options: [
      {
        id: 'modify-custody',
        label: 'Custody/Parenting time',
        resultPath: '/modules/modifications'
      },
      {
        id: 'modify-support',
        label: 'Child support',
        resultPath: '/support/modification'
      },
      {
        id: 'modify-spousal',
        label: 'Spousal maintenance',
        resultPath: '/support/spousal-modification'
      }
    ]
  },
  
  // Support flow
  {
    id: 'support-type',
    question: 'What type of support question do you have?',
    options: [
      {
        id: 'support-calculate',
        label: 'How much should support be?',
        resultPath: '/support/calculator'
      },
      {
        id: 'support-not-paying',
        label: 'Not receiving ordered support',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'support-change',
        label: 'Need to change support amount',
        resultPath: '/support/modification'
      }
    ]
  }
];

export const assessmentResults: Record<string, AssessmentResult> = {
  '/emergency-help': {
    path: '/emergency-help',
    title: 'Immediate Safety Resources',
    description: 'Your safety is the top priority. Here are immediate resources.',
    recommendedActions: [
      'Call 911 if in immediate danger',
      'Contact National Domestic Violence Hotline: 1-800-799-7233',
      'Create a safety plan',
      'Document any injuries or threats'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/divorce/uncontested-simple': {
    path: '/divorce/uncontested-simple',
    title: 'Uncontested Divorce Without Children',
    description: 'You may qualify for a simplified divorce process.',
    recommendedActions: [
      'Review eligibility for consent decree',
      'Gather financial documents',
      'Complete disclosure requirements',
      'File petition and waiver'
    ],
    urgencyLevel: 'low'
  },
  
  '/divorce/uncontested-with-children': {
    path: '/divorce/uncontested-with-children',
    title: 'Uncontested Divorce With Children',
    description: 'You can file jointly but must address custody and support.',
    recommendedActions: [
      'Complete parenting plan',
      'Calculate child support',
      'Attend required parenting class',
      'File joint petition'
    ],
    urgencyLevel: 'medium'
  },
  
  '/divorce/contested-full': {
    path: '/divorce/contested-full',
    title: 'Contested Divorce Process',
    description: 'Your divorce will require negotiation or court decisions.',
    recommendedActions: [
      'Consider hiring an attorney',
      'File petition and serve spouse',
      'Complete mandatory disclosures',
      'Prepare for temporary orders hearing'
    ],
    urgencyLevel: 'high'
  },
  
  '/custody/emergency-order': {
    path: '/custody/emergency-order',
    title: 'Emergency Custody Orders',
    description: 'Immediate action may be needed to protect your child.',
    recommendedActions: [
      'Document the danger/emergency',
      'File emergency motion today',
      'Request ex parte hearing',
      'Prepare evidence of immediate harm'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/responding/urgent-timeline': {
    path: '/responding/urgent-timeline',
    title: 'Urgent Response Required',
    description: 'You have limited time to respond to avoid default.',
    recommendedActions: [
      'Count your deadline carefully',
      'File response within 20 days',
      'Consider requesting extension',
      'Gather necessary documents immediately'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/modules/responding': {
    path: '/modules/responding',
    title: 'How to Respond to Legal Papers',
    description: 'Learn how to properly respond to court filings.',
    recommendedActions: [
      'Identify the type of papers',
      'Calculate response deadline',
      'Choose appropriate response form',
      'File and serve your response'
    ],
    urgencyLevel: 'high'
  }
};

export function getAssessmentResult(path: string): AssessmentResult | undefined {
  return assessmentResults[path];
}