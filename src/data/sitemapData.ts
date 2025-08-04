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
    status: 'placeholder',
    category: 'Core Topics',
    priority: 'high',
    notes: 'Minimal content, needs full development'
  },
  {
    path: '/get-protection',
    title: 'Get Protection',
    description: 'Information about protection orders and domestic violence resources',
    status: 'placeholder',
    category: 'Protection',
    priority: 'high',
    notes: 'Basic routing, needs content'
  },

  // Divorce Workflow Pages
  {
    path: '/divorce/uncontested-simple',
    title: 'Uncontested Divorce (Simple)',
    description: 'Step-by-step guide for simple uncontested divorce',
    status: 'placeholder',
    category: 'Divorce Workflows',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/divorce/uncontested-with-children',
    title: 'Uncontested Divorce (With Children)',
    description: 'Uncontested divorce process when children are involved',
    status: 'placeholder',
    category: 'Divorce Workflows',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/divorce/contested-full',
    title: 'Contested Divorce',
    description: 'Full contested divorce process and procedures',
    status: 'placeholder',
    category: 'Divorce Workflows',
    priority: 'high',
    notes: 'Page exists but needs content'
  },

  // Custody Pages
  {
    path: '/custody/establish-order',
    title: 'Establish Custody Order',
    description: 'How to establish initial custody orders',
    status: 'placeholder',
    category: 'Custody',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/custody-special-cases/emergency',
    title: 'Emergency Custody',
    description: 'Emergency custody situations and procedures',
    status: 'placeholder',
    category: 'Custody',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/custody-special-cases/paternity',
    title: 'Paternity Cases',
    description: 'Establishing paternity and related custody issues',
    status: 'placeholder',
    category: 'Custody',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },
  {
    path: '/custody-special-cases/relocation',
    title: 'Relocation with Children',
    description: 'Moving out of state with children',
    status: 'placeholder',
    category: 'Custody',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },

  // Protection Order Pages
  {
    path: '/protection/emergency',
    title: 'Emergency Protection Orders',
    description: 'How to get emergency protection orders',
    status: 'placeholder',
    category: 'Protection',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/protection/how-to-file',
    title: 'How to File Protection Orders',
    description: 'Step-by-step filing process for protection orders',
    status: 'placeholder',
    category: 'Protection',
    priority: 'high',
    notes: 'Page exists but needs content'
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
    status: 'placeholder',
    category: 'Protection',
    priority: 'high',
    notes: 'Page exists but needs content'
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
    status: 'placeholder',
    category: 'Response Workflows',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/responding/urgent-timeline',
    title: 'Responding (Urgent Timeline)',
    description: 'Responding to urgent court papers',
    status: 'placeholder',
    category: 'Response Workflows',
    priority: 'high',
    notes: 'Page exists but needs content'
  },
  {
    path: '/responding/late-response',
    title: 'Late Response Options',
    description: 'What to do if you missed the deadline to respond',
    status: 'placeholder',
    category: 'Response Workflows',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },

  // Forms Pages
  {
    path: '/forms',
    title: 'Court Forms',
    description: 'Arizona family court forms and instructions',
    status: 'placeholder',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Page exists but needs comprehensive form catalog'
  },
  {
    path: '/forms/divorce-petition-children',
    title: 'Divorce Petition (With Children)',
    description: 'Help completing divorce petition when children are involved',
    status: 'placeholder',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Page exists but needs form assistance content'
  },
  {
    path: '/forms/response-petition',
    title: 'Response to Petition',
    description: 'How to complete and file response to divorce petition',
    status: 'placeholder',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Page exists but needs form assistance content'
  },

  // Support Pages
  {
    path: '/support/calculator',
    title: 'Child Support Calculator',
    description: 'Arizona child support calculation tool',
    status: 'placeholder',
    category: 'Forms & Tools',
    priority: 'high',
    notes: 'Page exists but needs interactive calculator'
  },
  {
    path: '/support-modification/child-support',
    title: 'Modify Child Support',
    description: 'How to modify existing child support orders',
    status: 'placeholder',
    category: 'Modifications',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },
  {
    path: '/support-modification/spousal-support',
    title: 'Modify Spousal Support',
    description: 'How to modify existing spousal maintenance orders',
    status: 'placeholder',
    category: 'Modifications',
    priority: 'low',
    notes: 'Page exists but needs content'
  },

  // Resources
  {
    path: '/resources',
    title: 'Resources',
    description: 'Legal resources and helpful links',
    status: 'placeholder',
    category: 'Resources',
    priority: 'medium',
    notes: 'Page exists but needs comprehensive resource list'
  },
  {
    path: '/resources/legal-representation',
    title: 'Legal Representation',
    description: 'Finding and working with attorneys',
    status: 'placeholder',
    category: 'Resources',
    priority: 'medium',
    notes: 'Page exists but needs content'
  },
  {
    path: '/resources/self-representation-guide',
    title: 'Self-Representation Guide',
    description: 'Guide for representing yourself in family court',
    status: 'placeholder',
    category: 'Resources',
    priority: 'high',
    notes: 'Page exists but needs comprehensive guide'
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
    status: 'planned',
    category: 'Missing - Core Topics',
    priority: 'high',
    notes: 'Critical missing content from MkDocs'
  },
  {
    path: '/reference/faq',
    title: 'Frequently Asked Questions',
    description: 'Common questions about Arizona family law',
    status: 'planned',
    category: 'Missing - Reference',
    priority: 'high',
    notes: 'High-demand content from MkDocs'
  },
  {
    path: '/procedures/court-procedures',
    title: 'Court Procedures',
    description: 'How family court works in Arizona',
    status: 'planned',
    category: 'Missing - Procedures',
    priority: 'high',
    notes: 'Essential for self-represented litigants'
  },
  {
    path: '/procedures/emergency-orders',
    title: 'Emergency Orders',
    description: 'Getting emergency court orders',
    status: 'planned',
    category: 'Missing - Procedures',
    priority: 'high',
    notes: 'Critical for urgent situations'
  },
  {
    path: '/legal-disclaimer',
    title: 'Legal Disclaimer',
    description: 'Important legal disclaimers and limitations',
    status: 'planned',
    category: 'Missing - Legal',
    priority: 'high',
    notes: 'Required for legal compliance'
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