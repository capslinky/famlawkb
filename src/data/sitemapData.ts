import { modules } from './modules';

export type PageStatus = 'complete' | 'partial' | 'placeholder' | 'planned';

export interface SitemapPage {
  path: string;
  title: string;
  description: string;
  status: PageStatus;
  category: string;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

export const sitemapData: SitemapPage[] = [
  // Core Application Pages
  {
    path: '/',
    title: 'Home - Arizona Family Law Guide',
    description: 'Main landing page with assessment tool and navigation',
    status: 'complete',
    category: 'Core',
    priority: 'high'
  },
  {
    path: '/assessment',
    title: 'Legal Assessment Tool',
    description: 'Interactive questionnaire to guide users to appropriate resources',
    status: 'complete',
    category: 'Core',
    priority: 'high'
  },
  {
    path: '/search',
    title: 'Search',
    description: 'Site-wide search functionality',
    status: 'complete',
    category: 'Core',
    priority: 'high'
  },
  {
    path: '/emergency-help',
    title: 'Emergency Help',
    description: 'Immediate assistance for dangerous situations',
    status: 'complete',
    category: 'Emergency',
    priority: 'high'
  },
  {
    path: '/glossary',
    title: 'Legal Glossary',
    description: 'Definitions of legal terms and concepts',
    status: 'complete',
    category: 'Reference',
    priority: 'medium'
  },

  // Main Topic Pages (Current)
  {
    path: '/child-custody',
    title: 'Child Custody',
    description: 'Comprehensive guide to Arizona child custody laws and procedures',
    status: 'complete',
    category: 'Core Topics',
    priority: 'high',
    notes: 'Complete with comprehensive legal information, best interests factors, process guide, and resources'
  },
  {
    path: '/getting-divorced',
    title: 'Getting Divorced',
    description: 'Overview of divorce process in Arizona',
    status: 'complete',
    category: 'Core Topics',
    priority: 'high',
    notes: 'Complete with comprehensive decision framework, divorce path comparison, step-by-step process guide, and financial considerations (900+ lines)'
  },
  {
    path: '/get-protection',
    title: 'Get Protection',
    description: 'Information about protection orders and domestic violence resources',
    status: 'complete',
    category: 'Protection',
    priority: 'high',
    notes: 'Complete with comprehensive protection order overview, emergency procedures, filing guidance, and resource navigation (750+ lines)'
  },

  // Divorce Workflow Pages
  {
    path: '/divorce/uncontested-simple',
    title: 'Uncontested Divorce (Simple)',
    description: 'Step-by-step guide for simple uncontested divorce',
    status: 'complete',
    category: 'Divorce Workflows',
    priority: 'high',
    notes: 'Complete with detailed 7-step process guide, eligibility requirements, property division guidelines, and post-divorce considerations (800+ lines)'
  },
  {
    path: '/divorce/uncontested-with-children',
    title: 'Uncontested Divorce (With Children)',
    description: 'Uncontested divorce process when children are involved',
    status: 'complete',
    category: 'Divorce Workflows',
    priority: 'high',
    notes: 'Complete with comprehensive child-focused divorce process, parenting plan requirements, child support calculations, and parenting education info (900+ lines)'
  },
  {
    path: '/divorce/contested-full',
    title: 'Contested Divorce',
    description: 'Full contested divorce process and procedures',
    status: 'complete',
    category: 'Divorce Workflows',
    priority: 'high',
    notes: 'Complete with litigation process guide, 6-phase timeline, strategic considerations, reality check on costs/timeline, and comprehensive do\'s/don\'ts (950+ lines)'
  },

  // Custody Pages
  {
    path: '/custody/establish-order',
    title: 'Establish Custody Order',
    description: 'How to establish initial custody orders',
    status: 'complete',
    category: 'Custody',
    priority: 'high',
    notes: 'Complete with comprehensive custody establishment procedures, initial filing process, parenting plan requirements, and court process timeline'
  },
  {
    path: '/custody-special-cases/emergency',
    title: 'Emergency Custody',
    description: 'Emergency custody situations and procedures',
    status: 'complete',
    category: 'Custody',
    priority: 'high',
    notes: 'Complete with comprehensive emergency custody procedures, required documentation, and court process guidance'
  },
  {
    path: '/custody-special-cases/paternity',
    title: 'Paternity Cases',
    description: 'Establishing paternity and related custody issues',
    status: 'complete',
    category: 'Custody',
    priority: 'medium',
    notes: 'Complete with comprehensive paternity establishment procedures, genetic testing information, and custody/support implications'
  },
  {
    path: '/custody-special-cases/relocation',
    title: 'Relocation with Children',
    description: 'Moving out of state with children',
    status: 'complete',
    category: 'Custody',
    priority: 'medium',
    notes: 'Complete with comprehensive interstate move requirements, court approval procedures, and best interests analysis'
  },

  // Protection Order Pages
  {
    path: '/protection/emergency',
    title: 'Emergency Protection Orders',
    description: 'How to get emergency protection orders',
    status: 'complete',
    category: 'Protection',
    priority: 'high',
    notes: 'Complete with comprehensive emergency resources, statewide crisis hotlines, emergency shelter information, and after-hours protection order process (650+ lines)'
  },
  {
    path: '/protection/how-to-file',
    title: 'How to File Protection Orders',
    description: 'Step-by-step filing process for protection orders',
    status: 'complete',
    category: 'Protection',
    priority: 'high',
    notes: 'Complete with comprehensive filing guide, protection order type explanations, 5-step filing process, petition writing tips, and evidence preparation guidance (768 lines)'
  },
  {
    path: '/protection/responding-emergency',
    title: 'Responding to Emergency Orders',
    description: 'How to respond when served with emergency orders',
    status: 'placeholder',
    category: 'Protection',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },
  {
    path: '/protection/safety-plan',
    title: 'Safety Planning',
    description: 'Creating safety plans for domestic violence situations',
    status: 'complete',
    category: 'Protection',
    priority: 'high',
    notes: 'Complete with comprehensive safety planning guide, crisis management strategies, three types of safety planning, escalation warning signs, and emergency communication systems (498 lines)'
  },
  {
    path: '/protection/types',
    title: 'Types of Protection Orders',
    description: 'Different types of protection orders available in Arizona',
    status: 'placeholder',
    category: 'Protection',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },

  // Response Workflow Pages
  {
    path: '/responding/standard-timeline',
    title: 'Responding (Standard Timeline)',
    description: 'How to respond to court papers within normal timeframes',
    status: 'complete',
    category: 'Response Workflows',
    priority: 'high',
    notes: 'Complete with comprehensive week-by-week action plan, response types, strategic considerations, and resource navigation (287 lines)'
  },
  {
    path: '/responding/urgent-timeline',
    title: 'Responding (Urgent Timeline)',
    description: 'Responding to urgent court papers',
    status: 'complete',
    category: 'Response Workflows',
    priority: 'high',
    notes: 'Complete with comprehensive immediate action steps, emergency legal resources, document identification guide, and deadline management (293 lines)'
  },
  {
    path: '/responding/late-response',
    title: 'Late Response Options',
    description: 'What to do if you missed the deadline to respond',
    status: 'complete',
    category: 'Response Workflows',
    priority: 'medium',
    notes: 'Complete with comprehensive late response options, default judgment implications, motion to set aside procedures, and strategic considerations'
  },

  // Forms Pages
  {
    path: '/forms',
    title: 'Court Forms',
    description: 'Arizona family court forms and instructions',
    status: 'complete',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Complete with comprehensive form catalog, county-specific variations, and current form version tracking (328 lines)'
  },
  {
    path: '/forms/divorce-petition-children',
    title: 'Divorce Petition (With Children)',
    description: 'Help completing divorce petition when children are involved',
    status: 'complete',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Complete with interactive form completion guidance, field-by-field assistance, and error checking validation (310 lines)'
  },
  {
    path: '/forms/response-petition',
    title: 'Response to Petition',
    description: 'How to complete and file response to divorce petition',
    status: 'complete',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Complete with response deadline calculator, guided response completion, and strategy recommendations (296 lines)'
  },

  // Support Pages
  {
    path: '/support/calculator',
    title: 'Child Support Calculator',
    description: 'Arizona child support calculation tool',
    status: 'complete',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Complete with interactive Arizona Income Shares Model calculator, parenting time adjustments, and printable results'
  },
  {
    path: '/support-modification/child-support',
    title: 'Modify Child Support',
    description: 'How to modify existing child support orders',
    status: 'complete',
    category: 'Modifications',
    priority: 'medium',
    notes: 'Complete with substantial change requirements, modification filing procedures, and calculation adjustments'
  },
  {
    path: '/support-modification/spousal-support',
    title: 'Modify Spousal Support',
    description: 'How to modify existing spousal maintenance orders',
    status: 'complete',
    category: 'Modifications',
    priority: 'low',
    notes: 'Complete with modification criteria, filing procedures, and termination conditions'
  },

  // Resources
  {
    path: '/resources',
    title: 'Resources',
    description: 'Legal resources and helpful links',
    status: 'complete',
    category: 'Resources',
    priority: 'medium',
    notes: 'Complete with comprehensive resource directory including county-specific resources and community support services (311 lines)'
  },
  {
    path: '/resources/legal-representation',
    title: 'Legal Representation',
    description: 'Finding and working with attorneys',
    status: 'complete',
    category: 'Resources',
    priority: 'medium',
    notes: 'Complete with attorney selection criteria, cost analysis, limited scope representation options, and emergency legal help resources (371 lines)'
  },
  {
    path: '/resources/self-representation-guide',
    title: 'Self-Representation Guide',
    description: 'Guide for representing yourself in family court',
    status: 'complete',
    category: 'Resources',
    priority: 'high',
    notes: 'Complete with comprehensive pro se handbook, court etiquette, procedures, common pitfalls, and resource navigation (356 lines)'
  },

  // MISSING PAGES FROM MKDOCS - HIGH PRIORITY
  {
    path: '/topics/child-support',
    title: 'Child Support (Comprehensive)',
    description: 'Complete guide to Arizona child support laws, calculation, and enforcement',
    status: 'complete',
    category: 'Core Topics',
    priority: 'high',
    notes: 'Complete with comprehensive legal information, income guidelines, modification procedures, and enforcement options'
  },
  {
    path: '/topics/property-division',
    title: 'Property Division',
    description: 'Community property division in Arizona divorce',
    status: 'complete',
    category: 'Core Topics',
    priority: 'high',
    notes: 'Complete with comprehensive community property laws, asset valuation, debt division, and professional guidance'
  },
  {
    path: '/topics/spousal-maintenance',
    title: 'Spousal Maintenance',
    description: 'Alimony and spousal support in Arizona',
    status: 'complete',
    category: 'Core Topics',
    priority: 'high',
    notes: 'Complete with comprehensive legal information, eligibility factors, 2023 guidelines, modification procedures, and enforcement options'
  },
  {
    path: '/reference/faq',
    title: 'Frequently Asked Questions',
    description: 'Common questions about Arizona family law',
    status: 'complete',
    category: 'Reference',
    priority: 'high',
    notes: 'Complete with comprehensive Q&A covering divorce, custody, support, property, protection orders, legal process, and special situations'
  },
  {
    path: '/procedures/court-procedures',
    title: 'Court Procedures',
    description: 'How family court works in Arizona',
    status: 'complete',
    category: 'Procedures',
    priority: 'high',
    notes: 'Complete with comprehensive court procedures guide including filing, service, deadlines, hearings, disclosure requirements, motion practice, trial preparation, and local rules'
  },
  {
    path: '/procedures/emergency-orders',
    title: 'Emergency Orders',
    description: 'Getting emergency court orders',
    status: 'complete',
    category: 'Procedures',
    priority: 'high',
    notes: 'Complete with comprehensive emergency orders guide including legal standards, types of orders, evidence requirements, filing procedures, and enforcement options'
  },
  {
    path: '/legal-disclaimer',
    title: 'Legal Disclaimer',
    description: 'Important legal disclaimers and limitations',
    status: 'complete',
    category: 'Legal',
    priority: 'high',
    notes: 'Complete with comprehensive legal disclaimers, Arizona Bar compliance, liability limitations, and professional responsibility guidelines'
  }
];

// Add dynamic module pages
export const getModulePages = (): SitemapPage[] => {
  return modules.map(module => ({
    path: `/modules/${module.slug}`,
    title: module.title,
    description: module.description,
    status: module.hasComprehensiveContent ? 'complete' as PageStatus : 'partial' as PageStatus,
    category: 'Process Modules',
    priority: 'medium' as const,
    notes: module.hasComprehensiveContent 
      ? 'Complete with comprehensive content covering all aspects of the process'
      : 'Framework exists, needs comprehensive content'
  }));
};

// Get all pages including modules
export const getAllSitemapPages = (): SitemapPage[] => {
  return [...sitemapData, ...getModulePages()];
};

// Statistics helpers
export const getSitemapStats = () => {
  const allPages = getAllSitemapPages();
  const total = allPages.length;
  const complete = allPages.filter(p => p.status === 'complete').length;
  const partial = allPages.filter(p => p.status === 'partial').length;
  const placeholder = allPages.filter(p => p.status === 'placeholder').length;
  const planned = allPages.filter(p => p.status === 'planned').length;
  
  return {
    total,
    complete,
    partial,
    placeholder,
    planned,
    completionRate: Math.round((complete / total) * 100),
    categories: [...new Set(allPages.map(p => p.category))].sort()
  };
};