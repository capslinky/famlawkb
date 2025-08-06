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

export interface AssessmentResource {
  title: string;
  description: string;
  url: string;
}

export interface AssessmentResult {
  path: string;
  title: string;
  description: string;
  recommendedActions: string[];
  urgencyLevel: 'immediate' | 'high' | 'medium' | 'low';
  resources: AssessmentResource[];
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'start',
    question: 'What best describes your current situation?',
    description: 'Select the option that most closely matches what you need help with.',
    options: [
      {
        id: 'divorce-start',
        label: 'I want to get divorced or legally separated',
        nextQuestionId: 'divorce-status',
        tags: ['divorce', 'separation']
      },
      {
        id: 'custody-issue',
        label: 'I have questions about child custody or parenting time',
        nextQuestionId: 'custody-status',
        tags: ['custody', 'children', 'parenting']
      },
      {
        id: 'danger',
        label: 'I am in immediate danger or fear for my safety',
        resultPath: '/emergency-help',
        tags: ['emergency', 'dv', 'protection']
      },
      {
        id: 'served',
        label: 'I was served with legal papers',
        nextQuestionId: 'served-type',
        tags: ['responding', 'papers']
      },
      {
        id: 'modify',
        label: 'I need to change an existing court order',
        nextQuestionId: 'modify-type',
        tags: ['modification', 'change']
      },
      {
        id: 'support',
        label: 'I have questions about child support or spousal maintenance',
        nextQuestionId: 'support-type',
        tags: ['support', 'financial', 'alimony']
      },
      {
        id: 'protection',
        label: 'I need protection from harassment or abuse',
        nextQuestionId: 'protection-type',
        tags: ['protection', 'harassment', 'abuse']
      },
      {
        id: 'enforcement',
        label: 'Someone is not following a court order',
        nextQuestionId: 'enforcement-type',
        tags: ['enforcement', 'contempt', 'violation']
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
        resultPath: '/divorce/contested-full'
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
        resultPath: '/divorce/contested-full'
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
        resultPath: '/custody-special-cases/paternity'
      },
      {
        id: 'custody-unsure',
        label: 'Not sure',
        resultPath: '/custody-special-cases/paternity'
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
        resultPath: '/custody/establish-order'
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
        resultPath: '/custody-special-cases/emergency'
      },
      {
        id: 'custody-moved',
        label: 'Someone relocated',
        resultPath: '/custody-special-cases/relocation'
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
        resultPath: '/support-modification/child-support'
      },
      {
        id: 'modify-spousal',
        label: 'Spousal maintenance',
        resultPath: '/support-modification/spousal-support'
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
        nextQuestionId: 'support-change-reason'
      },
      {
        id: 'support-establish',
        label: 'Need to establish support for the first time',
        nextQuestionId: 'support-relationship'
      }
    ]
  },

  {
    id: 'support-change-reason',
    question: 'Why do you need to change the support amount?',
    options: [
      {
        id: 'support-income-change',
        label: 'Income changed significantly (15% or more)',
        resultPath: '/support-modification/child-support'
      },
      {
        id: 'support-circumstances',
        label: 'Parenting time or other circumstances changed',
        resultPath: '/support-modification/child-support'
      },
      {
        id: 'support-spousal-change',
        label: 'Spousal maintenance needs to change',
        resultPath: '/support-modification/spousal-support'
      }
    ]
  },

  {
    id: 'support-relationship',
    question: 'What is your relationship to the other parent?',
    options: [
      {
        id: 'support-married',
        label: 'We are married but separating/divorcing',
        resultPath: '/getting-divorced'
      },
      {
        id: 'support-never-married',
        label: 'We were never married',
        resultPath: '/custody-special-cases/paternity'
      },
      {
        id: 'support-divorced',
        label: 'We are divorced but support was never established',
        resultPath: '/support-modification/child-support'
      }
    ]
  },

  // Protection Orders flow
  {
    id: 'protection-type',
    question: 'What type of protection do you need?',
    options: [
      {
        id: 'protection-domestic',
        label: 'Protection from domestic violence (family/dating relationship)',
        nextQuestionId: 'protection-urgency'
      },
      {
        id: 'protection-harassment',
        label: 'Protection from harassment (not family/dating)',
        resultPath: '/protection/types'
      },
      {
        id: 'protection-workplace',
        label: 'Workplace harassment or stalking',
        resultPath: '/protection/types'
      },
      {
        id: 'protection-modify',
        label: 'I have a protection order that needs to be changed',
        resultPath: '/modules/modifications'
      }
    ]
  },

  {
    id: 'protection-urgency',
    question: 'How urgent is your situation?',
    options: [
      {
        id: 'protection-immediate',
        label: 'I am in immediate danger right now',
        resultPath: '/emergency-help'
      },
      {
        id: 'protection-recent',
        label: 'Recent threats or violence (within last few days)',
        resultPath: '/protection/emergency'
      },
      {
        id: 'protection-ongoing',
        label: 'Ongoing pattern of abuse or threats',
        resultPath: '/protection/how-to-file'
      },
      {
        id: 'protection-preventive',
        label: 'Want protection before situation escalates',
        resultPath: '/protection/how-to-file'
      }
    ]
  },

  // Enforcement flow
  {
    id: 'enforcement-type',
    question: 'What type of court order is being violated?',
    options: [
      {
        id: 'enforcement-support',
        label: 'Child support or spousal maintenance not being paid',
        nextQuestionId: 'enforcement-support-details'
      },
      {
        id: 'enforcement-custody',
        label: 'Custody or parenting time order not being followed',
        nextQuestionId: 'enforcement-custody-details'
      },
      {
        id: 'enforcement-protection',
        label: 'Order of Protection being violated',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-property',
        label: 'Property division order not being followed',
        resultPath: '/modules/enforcement-appeals'
      }
    ]
  },

  {
    id: 'enforcement-support-details',
    question: 'What is the support payment situation?',
    options: [
      {
        id: 'enforcement-no-payments',
        label: 'No payments being made at all',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-partial-payments',
        label: 'Only partial payments being made',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-late-payments',
        label: 'Payments are consistently late',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-lost-job',
        label: 'They lost their job but support continues',
        resultPath: '/support-modification/child-support'
      }
    ]
  },

  {
    id: 'enforcement-custody-details',
    question: 'What custody/parenting time issue are you having?',
    options: [
      {
        id: 'enforcement-no-visits',
        label: 'Other parent not exercising parenting time',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-denied-visits',
        label: 'Other parent denying me parenting time',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-late-returns',
        label: 'Consistently returning child late',
        resultPath: '/modules/enforcement-appeals'
      },
      {
        id: 'enforcement-move-violation',
        label: 'Other parent moved without permission',
        resultPath: '/custody-special-cases/relocation'
      }
    ]
  }
];


// Assessment results moved to assessmentResults.ts
export { assessmentResults, getAssessmentResult } from './assessmentResults';
