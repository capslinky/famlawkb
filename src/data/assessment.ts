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
        resultPath: '/enforcement-protection-order'
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

export const assessmentResults: Record<string, AssessmentResult> = {
  '/emergency-help': {
    path: '/emergency-help',
    title: 'Immediate Safety Resources',
    description: 'Your safety is the top priority. Here are immediate resources.',
    recommendedActions: [
      'Call 911 if in immediate danger',
      'Contact National Domestic Violence Hotline: 1-800-799-7233',
      'Create a safety plan for you and your children',
      'Document any injuries or threats with photos/medical records',
      'Consider filing for an Order of Protection'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/divorce/uncontested-simple': {
    path: '/divorce/uncontested-simple',
    title: 'Uncontested Divorce Without Children',
    description: 'You may qualify for a simplified divorce process since you agree on all issues.',
    recommendedActions: [
      'Review eligibility requirements for consent decree',
      'Gather all financial documents (tax returns, bank statements, assets)',
      'Complete mandatory financial disclosure within 40 days',
      'File petition and have spouse sign acceptance of service',
      'Consider filing for fee waiver if you qualify'
    ],
    urgencyLevel: 'low'
  },
  
  '/divorce/uncontested-with-children': {
    path: '/divorce/uncontested-with-children',
    title: 'Uncontested Divorce With Children',
    description: 'Since you agree on custody and support, you can use a streamlined process.',
    recommendedActions: [
      'Complete detailed parenting plan with custody and visitation schedule',
      'Calculate child support using Arizona guidelines',
      'Both parents must attend required parenting class',
      'File joint petition or petition with acceptance of service',
      'Prepare for brief court hearing to finalize decree'
    ],
    urgencyLevel: 'medium'
  },
  
  '/divorce/contested-full': {
    path: '/divorce/contested-full',
    title: 'Contested Divorce Process',
    description: 'Your divorce will require negotiation, mediation, or court decisions on disputed issues.',
    recommendedActions: [
      'Strongly consider hiring a family law attorney',
      'File petition for dissolution and arrange for service',
      'Complete mandatory financial disclosures within 40 days',
      'Prepare for temporary orders hearing if immediate decisions needed',
      'Consider mediation to resolve disputes outside of court',
      'Gather evidence to support your position on contested issues'
    ],
    urgencyLevel: 'high'
  },
  
  '/custody-special-cases/emergency': {
    path: '/custody-special-cases/emergency',
    title: 'Emergency Custody Orders',
    description: 'Immediate action may be needed to protect your child from danger.',
    recommendedActions: [
      'Document the specific danger or emergency situation',
      'File emergency motion for custody today',
      'Request ex parte hearing (without other parent present)',
      'Prepare evidence of immediate harm or substantial risk',
      'Contact child protective services if abuse is involved',
      'Consider temporary relocation if child is in immediate danger'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/responding/urgent-timeline': {
    path: '/responding/urgent-timeline',
    title: 'Urgent Response Required',
    description: 'You have limited time to respond to avoid a default judgment against you.',
    recommendedActions: [
      'Count your deadline carefully (20 days from service in Arizona)',
      'File your response before the deadline expires',
      'Consider requesting a time extension if you need more time',
      'Gather necessary documents and information immediately',
      'Seek legal advice quickly if the issues are complex',
      'Do not ignore the papers - responding protects your rights'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/responding/standard-timeline': {
    path: '/responding/standard-timeline',
    title: 'Response Timeline - Standard Process',
    description: 'You have time to prepare a thoughtful response to the legal papers.',
    recommendedActions: [
      'Review all papers carefully to understand what is being requested',
      'Calculate your exact response deadline',
      'Gather supporting documents and evidence',
      'Complete appropriate response forms',
      'Consider whether you need legal representation',
      'File and serve your response properly'
    ],
    urgencyLevel: 'high'
  },
  
  '/responding/late-response': {
    path: '/responding/late-response',
    title: 'Late Response Options',
    description: 'You may have missed the deadline, but options may still be available.',
    recommendedActions: [
      'File your response immediately, even if late',
      'Check if a default judgment has been entered against you',
      'File a motion to set aside default if one exists',
      'Prepare to explain why you were late (good cause)',
      'Consider hiring an attorney for complex default situations',
      'Act quickly - waiting longer makes it harder to fix'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/modules/responding': {
    path: '/modules/responding',
    title: 'How to Respond to Legal Papers',
    description: 'Learn the proper process for responding to different types of court filings.',
    recommendedActions: [
      'Identify the specific type of papers you received',
      'Calculate your response deadline accurately',
      'Choose the appropriate response form for your situation',
      'Complete the response thoroughly and honestly',
      'File the original with the court and serve copy on other party',
      'Keep copies of all documents for your records'
    ],
    urgencyLevel: 'high'
  },
  
  '/support/calculator': {
    path: '/support/calculator',
    title: 'Child Support Calculator',
    description: 'Calculate Arizona guideline child support based on current income and parenting time.',
    recommendedActions: [
      'Gather current income information for both parents',
      'Calculate actual parenting time percentage',
      'Include cost of health insurance and childcare',
      'Use the official Arizona child support guidelines',
      'Review calculation for accuracy before filing',
      'Update calculation if circumstances change significantly'
    ],
    urgencyLevel: 'medium'
  },
  
  '/support-modification/child-support': {
    path: '/support-modification/child-support',
    title: 'Child Support Modification',
    description: 'Learn how to request changes to existing child support orders.',
    recommendedActions: [
      'Document the significant change in circumstances',
      'Calculate new support amount using current guidelines',
      'Ensure the change meets the 15% threshold or $50/month minimum',
      'File petition to modify child support',
      'Serve the other parent and provide financial disclosures',
      'Attend court hearing to present your case'
    ],
    urgencyLevel: 'medium'
  },
  
  '/support-modification/spousal-support': {
    path: '/support-modification/spousal-support',
    title: 'Spousal Maintenance Modification',
    description: 'Request changes to spousal maintenance based on changed circumstances.',
    recommendedActions: [
      'Document substantial and continuing change in circumstances',
      'Gather evidence of changed financial situation',
      'Review current spousal maintenance guidelines',
      'File petition to modify spousal maintenance',
      'Complete updated financial disclosures',
      'Prepare for court hearing with supporting evidence'
    ],
    urgencyLevel: 'medium'
  },
  
  '/protection/emergency': {
    path: '/protection/emergency',
    title: 'Emergency Order of Protection',
    description: 'Get immediate court protection from domestic violence or threats.',
    recommendedActions: [
      'File petition for Order of Protection immediately',
      'Request emergency (ex parte) hearing',
      'Document recent incidents of violence or threats',
      'Include specific details about what protection you need',
      'Serve the order on the other party once granted',
      'Attend follow-up hearing within 10 days'
    ],
    urgencyLevel: 'immediate'
  },
  
  '/protection/how-to-file': {
    path: '/protection/how-to-file',
    title: 'Filing for Order of Protection',
    description: 'Step-by-step process for filing protective orders in Arizona.',
    recommendedActions: [
      'Complete petition for Order of Protection',
      'Provide detailed description of incidents requiring protection',
      'Request specific protections you need (no contact, stay away, etc.)',
      'File petition with family court clerk',
      'Attend scheduled court hearing',
      'Bring evidence and witnesses to support your case'
    ],
    urgencyLevel: 'high'
  },
  
  '/modules/enforcement-appeals': {
    path: '/modules/enforcement-appeals',
    title: 'Enforcement and Contempt Actions',
    description: 'Take legal action when someone violates court orders.',
    recommendedActions: [
      'Document all violations of the court order',
      'File motion for contempt of court',
      'Request specific remedies (wage garnishment, jail time, etc.)',
      'Serve the motion on the other party',
      'Gather evidence of willful violation of court orders',
      'Attend contempt hearing with proof of violations'
    ],
    urgencyLevel: 'high'
  },
  
  '/custody/establish-order': {
    path: '/custody/establish-order',
    title: 'Establishing Custody Orders',
    description: 'Get formal court orders for child custody and parenting time.',
    recommendedActions: [
      'File petition to establish custody and parenting time',
      'Complete parenting plan proposal',
      'Attend required parenting class',
      'Consider mediation to reach agreement',
      'Prepare evidence supporting your proposed custody arrangement',
      'Attend court hearing if no agreement reached'
    ],
    urgencyLevel: 'medium'
  },
  
  '/custody-special-cases/paternity': {
    path: '/custody-special-cases/paternity',
    title: 'Paternity and Custody',
    description: 'Establish paternity and custody rights for unmarried parents.',
    recommendedActions: [
      'File petition to establish paternity if needed',
      'Request genetic testing if paternity is disputed',
      'Include custody and support requests in paternity case',
      'Complete required parenting class',
      'Prepare parenting plan and support calculation',
      'Attend court hearings as scheduled'
    ],
    urgencyLevel: 'medium'
  },
  
  '/custody-special-cases/relocation': {
    path: '/custody-special-cases/relocation',
    title: 'Relocation with Children',
    description: 'Legal requirements for moving with children when you have custody orders.',
    recommendedActions: [
      'File petition for relocation at least 45 days before move',
      'Provide detailed information about the proposed move',
      'Explain how relocation serves child\'s best interests',
      'Propose modified parenting time plan',
      'Serve other parent with relocation notice',
      'Attend court hearing if other parent objects'
    ],
    urgencyLevel: 'high'
  },
  
  '/modules/modifications': {
    path: '/modules/modifications',
    title: 'Modifying Court Orders',
    description: 'Change existing court orders when circumstances have substantially changed.',
    recommendedActions: [
      'Identify substantial and continuing change in circumstances',
      'File appropriate petition to modify existing order',
      'Provide evidence supporting the requested changes',
      'Complete updated financial disclosures if applicable',
      'Serve other party with modification petition',
      'Attend court hearing to present your case'
    ],
    urgencyLevel: 'medium'
  }
};

export function getAssessmentResult(path: string): AssessmentResult | undefined {
  return assessmentResults[path];
}