import { AssessmentResult, AssessmentResource } from './assessment';

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
    urgencyLevel: 'immediate',
    resources: [
      {
        title: 'Emergency Safety Resources',
        description: 'Immediate help and crisis hotlines',
        url: '/emergency-help'
      },
      {
        title: 'Order of Protection Guide',
        description: 'How to get emergency court protection',
        url: '/protection/emergency'
      },
      {
        title: 'Safety Planning',
        description: 'Create a safety plan for you and your children',
        url: '/protection/safety-plan'
      }
    ]
  },
  
  '/divorce/uncontested-simple': {
    path: '/divorce/uncontested-simple',
    title: 'Uncontested Divorce Without Children',
    description: 'You may qualify for a simplified divorce process since you agree on all issues.',
    recommendedActions: [
      'Review eligibility requirements for consent decree',
      'Complete and file divorce petition',
      'Serve your spouse with divorce papers',
      'Complete financial disclosures',
      'Submit consent decree for court approval',
      'Attend final hearing if required'
    ],
    urgencyLevel: 'low',
    resources: [
      {
        title: 'Uncontested Divorce Guide',
        description: 'Step-by-step process for simple divorce',
        url: '/divorce/uncontested-simple'
      },
      {
        title: 'Court Forms',
        description: 'Download required divorce forms',
        url: '/forms'
      },
      {
        title: 'Cost Estimator',
        description: 'Estimate your divorce costs',
        url: '/tools#cost-estimator'
      }
    ]
  },
  
  '/divorce/uncontested-with-children': {
    path: '/divorce/uncontested-with-children',
    title: 'Uncontested Divorce With Children',
    description: 'You agree on divorce terms but need to address custody and support.',
    recommendedActions: [
      'Complete Parent Information Program class',
      'Create detailed parenting plan',
      'Calculate child support using state guidelines',
      'File joint petition with agreements',
      'Submit all required disclosures',
      'Attend final hearing to finalize divorce'
    ],
    urgencyLevel: 'medium',
    resources: [
      {
        title: 'Divorce with Children Guide',
        description: 'Complete process for divorce with custody',
        url: '/divorce/uncontested-with-children'
      },
      {
        title: 'Parenting Plan Builder',
        description: 'Create your custody agreement',
        url: '/tools#parenting-plan'
      },
      {
        title: 'Child Support Calculator',
        description: 'Calculate support payments',
        url: '/support/calculator'
      }
    ]
  },
  
  '/divorce/contested-full': {
    path: '/divorce/contested-full',
    title: 'Contested Divorce Process',
    description: 'You disagree on major issues and need court intervention.',
    recommendedActions: [
      'Consider hiring an attorney for complex issues',
      'File petition and serve spouse',
      'Attend temporary orders hearing if needed',
      'Complete mandatory disclosure requirements',
      'Participate in mediation or settlement conferences',
      'Prepare for trial if no agreement reached'
    ],
    urgencyLevel: 'high',
    resources: [
      {
        title: 'Contested Divorce Guide',
        description: 'Navigate complex divorce proceedings',
        url: '/divorce/contested-full'
      },
      {
        title: 'Legal Representation',
        description: 'Find an attorney for your case',
        url: '/resources/legal-representation'
      },
      {
        title: 'Timeline Builder',
        description: 'Track your case milestones',
        url: '/tools'
      }
    ]
  },
  
  '/responding/standard-timeline': {
    path: '/responding/standard-timeline',
    title: 'Respond to Divorce Papers',
    description: 'You have been served with divorce papers and need to respond.',
    recommendedActions: [
      'Read all served documents carefully',
      'Note response deadline (typically 20 days)',
      'Decide whether to contest or agree',
      'File written response with court',
      'Serve copy on petitioner',
      'Begin gathering financial documents'
    ],
    urgencyLevel: 'high',
    resources: [
      {
        title: 'Response Timeline',
        description: 'Deadlines for responding to papers',
        url: '/responding/standard-timeline'
      },
      {
        title: 'Response Forms',
        description: 'Forms to respond to petition',
        url: '/forms/response-petition'
      },
      {
        title: 'Document Checklist',
        description: 'Organize required documents',
        url: '/tools'
      }
    ]
  },
  
  '/responding/urgent-timeline': {
    path: '/responding/urgent-timeline',
    title: 'Urgent Response Required',
    description: 'You have been served with emergency orders requiring immediate action.',
    recommendedActions: [
      'Comply with all emergency orders immediately',
      'Request hearing within 10 days if desired',
      'Gather evidence to present your side',
      'Consider hiring attorney for emergency hearing',
      'File written response before deadline',
      'Attend scheduled hearing without fail'
    ],
    urgencyLevel: 'immediate',
    resources: [
      {
        title: 'Emergency Response Guide',
        description: 'Respond to emergency orders',
        url: '/responding/urgent-timeline'
      },
      {
        title: 'Emergency Legal Help',
        description: 'Find immediate legal assistance',
        url: '/emergency-help'
      },
      {
        title: 'Court Procedures',
        description: 'Understand court process',
        url: '/procedures/emergency-orders'
      }
    ]
  },
  
  '/modules/modifications': {
    path: '/modules/modifications',
    title: 'Modify Existing Orders',
    description: 'Change custody, support, or other court orders based on new circumstances.',
    recommendedActions: [
      'Document substantial change in circumstances',
      'Gather evidence supporting modification',
      'Calculate financial changes if applicable',
      'File petition to modify with court',
      'Serve other party with petition',
      'Attend court hearing on modification'
    ],
    urgencyLevel: 'medium',
    resources: [
      {
        title: 'Modification Guide',
        description: 'How to change court orders',
        url: '/modules/modifications'
      },
      {
        title: 'Child Support Modification',
        description: 'Change support payments',
        url: '/support-modification/child-support'
      },
      {
        title: 'Deadline Calculator',
        description: 'Track modification deadlines',
        url: '/tools#deadline-calculator'
      }
    ]
  },
  
  '/support/calculator': {
    path: '/support/calculator',
    title: 'Calculate Child Support',
    description: 'Determine child support obligations under Arizona guidelines.',
    recommendedActions: [
      'Gather income information for both parents',
      'Document childcare and health insurance costs',
      'Calculate parenting time percentages',
      'Use Arizona child support calculator',
      'Consider deviation factors if applicable',
      'File support worksheet with court'
    ],
    urgencyLevel: 'medium',
    resources: [
      {
        title: 'Child Support Calculator',
        description: 'Calculate support amounts',
        url: '/support/calculator'
      },
      {
        title: 'Child Support Guide',
        description: 'Understanding support laws',
        url: '/topics/child-support'
      },
      {
        title: 'Financial Forms',
        description: 'Required financial disclosures',
        url: '/forms'
      }
    ]
  },
  
  '/topics/spousal-maintenance': {
    path: '/topics/spousal-maintenance',
    title: 'Spousal Maintenance (Alimony)',
    description: 'Understand spousal support rights and obligations.',
    recommendedActions: [
      'Review spousal maintenance factors',
      'Document marriage length and contributions',
      'Gather financial information for both spouses',
      'Calculate reasonable needs and ability to pay',
      'Consider temporary vs permanent maintenance',
      'Negotiate or litigate maintenance terms'
    ],
    urgencyLevel: 'medium',
    resources: [
      {
        title: 'Spousal Maintenance Guide',
        description: 'Complete alimony information',
        url: '/topics/spousal-maintenance'
      },
      {
        title: 'Cost Estimator',
        description: 'Estimate legal costs',
        url: '/tools#cost-estimator'
      },
      {
        title: 'Financial Disclosure',
        description: 'Required financial documents',
        url: '/forms'
      }
    ]
  },
  
  '/protection/how-to-file': {
    path: '/protection/how-to-file',
    title: 'Filing for Order of Protection',
    description: 'Step-by-step process for filing protective orders in Arizona.',
    recommendedActions: [
      'Complete petition for Order of Protection',
      'Provide detailed description of incidents',
      'Request specific protections needed',
      'File petition with family court clerk',
      'Attend scheduled court hearing',
      'Bring evidence and witnesses to support case'
    ],
    urgencyLevel: 'high',
    resources: [
      {
        title: 'Protection Order Guide',
        description: 'How to file for protection',
        url: '/protection/how-to-file'
      },
      {
        title: 'Emergency Protection',
        description: 'Get immediate protection',
        url: '/protection/emergency'
      },
      {
        title: 'Safety Planning',
        description: 'Create a safety plan',
        url: '/protection/safety-plan'
      }
    ]
  },
  
  '/modules/enforcement-appeals': {
    path: '/modules/enforcement-appeals',
    title: 'Enforcement and Contempt Actions',
    description: 'Take legal action when someone violates court orders.',
    recommendedActions: [
      'Document all violations of court order',
      'File motion for contempt of court',
      'Request specific remedies',
      'Serve motion on other party',
      'Gather evidence of willful violation',
      'Attend contempt hearing with proof'
    ],
    urgencyLevel: 'high',
    resources: [
      {
        title: 'Enforcement Guide',
        description: 'Enforce court orders',
        url: '/modules/enforcement-appeals'
      },
      {
        title: 'Court Procedures',
        description: 'Understanding court process',
        url: '/procedures/court-procedures'
      },
      {
        title: 'Legal Representation',
        description: 'Find an attorney',
        url: '/resources/legal-representation'
      }
    ]
  },
  
  '/custody/establish-order': {
    path: '/custody/establish-order',
    title: 'Establishing Custody Orders',
    description: 'Get formal court orders for child custody and parenting time.',
    recommendedActions: [
      'File petition to establish custody',
      'Complete parenting plan proposal',
      'Attend required parenting class',
      'Consider mediation to reach agreement',
      'Prepare evidence supporting arrangement',
      'Attend court hearing if needed'
    ],
    urgencyLevel: 'medium',
    resources: [
      {
        title: 'Custody Order Guide',
        description: 'Establish custody arrangements',
        url: '/custody/establish-order'
      },
      {
        title: 'Parenting Plan Builder',
        description: 'Create parenting plan',
        url: '/tools#parenting-plan'
      },
      {
        title: 'Mediation Information',
        description: 'Alternative dispute resolution',
        url: '/modules/mediation'
      }
    ]
  }
};

export function getAssessmentResult(path: string): AssessmentResult | undefined {
  return assessmentResults[path];
}