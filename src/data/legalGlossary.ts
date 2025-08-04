export interface GlossaryTerm {
  term: string;
  definition: string;
  pronunciation?: string;
  relatedTerms?: string[];
  category: 'custody' | 'financial' | 'court' | 'property' | 'general';
}

export const legalGlossary: Record<string, GlossaryTerm> = {
  'legal-decision-making': {
    term: 'Legal Decision Making',
    definition: 'The legal right to make major decisions about a child, including education, healthcare, and religious upbringing. Formerly called "legal custody" in Arizona.',
    pronunciation: 'LEE-gul deh-SI-zhun MAY-king',
    relatedTerms: ['parenting-time', 'sole-legal-decision-making', 'joint-legal-decision-making'],
    category: 'custody'
  },
  'parenting-time': {
    term: 'Parenting Time',
    definition: 'The schedule that determines when each parent spends time with their children. Formerly called "visitation" in Arizona.',
    relatedTerms: ['legal-decision-making', 'parenting-plan'],
    category: 'custody'
  },
  'community-property': {
    term: 'Community Property',
    definition: 'Property acquired by either spouse during marriage that belongs equally to both spouses. Arizona is a community property state, meaning marital assets are divided 50/50.',
    relatedTerms: ['separate-property', 'equitable-distribution'],
    category: 'property'
  },
  'separate-property': {
    term: 'Separate Property',
    definition: 'Property owned by one spouse before marriage, or received as a gift or inheritance during marriage. This property is not divided in divorce.',
    relatedTerms: ['community-property', 'commingling'],
    category: 'property'
  },
  'spousal-maintenance': {
    term: 'Spousal Maintenance',
    definition: 'Financial support paid by one spouse to another after divorce. Also known as "alimony" in other states.',
    pronunciation: 'SPOW-zul MAYN-teh-nans',
    relatedTerms: ['temporary-spousal-maintenance', 'rehabilitative-maintenance'],
    category: 'financial'
  },
  'petition': {
    term: 'Petition',
    definition: 'The legal document that starts a court case. In divorce, it\'s called a "Petition for Dissolution of Marriage."',
    relatedTerms: ['petitioner', 'respondent', 'response'],
    category: 'court'
  },
  'petitioner': {
    term: 'Petitioner',
    definition: 'The person who files the initial court papers to start a case. In divorce, this is the spouse who files for divorce.',
    relatedTerms: ['respondent', 'petition'],
    category: 'court'
  },
  'respondent': {
    term: 'Respondent',
    definition: 'The person who must respond to court papers filed by the petitioner. In divorce, this is the spouse who didn\'t file first.',
    relatedTerms: ['petitioner', 'response'],
    category: 'court'
  },
  'service-of-process': {
    term: 'Service of Process',
    definition: 'The legal procedure for delivering court papers to ensure the other party knows about the case. Must be done by someone over 18 who is not involved in the case.',
    pronunciation: 'SER-vis of PRO-sess',
    relatedTerms: ['process-server', 'acceptance-of-service'],
    category: 'court'
  },
  'temporary-orders': {
    term: 'Temporary Orders',
    definition: 'Court orders that apply while a case is pending. These can include temporary custody, support, and use of property.',
    relatedTerms: ['preliminary-injunction', 'emergency-orders'],
    category: 'court'
  },
  'disclosure': {
    term: 'Disclosure',
    definition: 'The requirement to provide financial information to the other party, including income, expenses, assets, and debts.',
    relatedTerms: ['affidavit-of-financial-information', 'discovery'],
    category: 'financial'
  },
  'decree': {
    term: 'Decree',
    definition: 'The final court order that officially ends a marriage and sets out all terms of the divorce, custody, and support.',
    relatedTerms: ['consent-decree', 'default-decree'],
    category: 'court'
  },
  'arrearage': {
    term: 'Arrearage',
    definition: 'Unpaid child support or spousal maintenance that has accumulated over time. Also called "back support."',
    pronunciation: 'uh-REER-ij',
    relatedTerms: ['child-support', 'contempt'],
    category: 'financial'
  },
  'best-interests': {
    term: 'Best Interests of the Child',
    definition: 'The legal standard courts use to make decisions about children. Considers factors like the child\'s relationship with each parent, stability, and safety.',
    relatedTerms: ['legal-decision-making', 'parenting-time'],
    category: 'custody'
  },
  'mediation': {
    term: 'Mediation',
    definition: 'A process where a neutral third party helps parents reach agreements about custody and parenting time without going to trial.',
    relatedTerms: ['alternative-dispute-resolution', 'conciliation'],
    category: 'court'
  },
  'parenting-plan': {
    term: 'Parenting Plan',
    definition: 'A detailed written agreement that specifies legal decision-making, parenting time schedules, holidays, and how parents will communicate.',
    relatedTerms: ['legal-decision-making', 'parenting-time'],
    category: 'custody'
  },
  'contempt': {
    term: 'Contempt of Court',
    definition: 'Willfully disobeying a court order. Can result in fines or jail time. Common in cases involving unpaid support or violation of parenting orders.',
    relatedTerms: ['enforcement', 'order-to-show-cause'],
    category: 'court'
  },
  'qro': {
    term: 'Qualified Domestic Relations Order (QDRO)',
    definition: 'A court order that divides retirement accounts in divorce. Required for 401(k)s, pensions, and other qualified retirement plans.',
    pronunciation: 'KWAH-dro',
    relatedTerms: ['community-property', 'retirement-division'],
    category: 'financial'
  },
  'sole-legal-decision-making': {
    term: 'Sole Legal Decision Making',
    definition: 'When one parent has the exclusive right to make major decisions about the children without consulting the other parent.',
    relatedTerms: ['legal-decision-making', 'joint-legal-decision-making'],
    category: 'custody'
  },
  'joint-legal-decision-making': {
    term: 'Joint Legal Decision Making',
    definition: 'When both parents share the right to make major decisions about the children and must consult each other.',
    relatedTerms: ['legal-decision-making', 'sole-legal-decision-making'],
    category: 'custody'
  }
};

// Helper function to find terms in text
export function findGlossaryTerms(text: string): string[] {
  const foundTerms: string[] = [];
  const lowerText = text.toLowerCase();
  
  Object.keys(legalGlossary).forEach(key => {
    const term = legalGlossary[key].term.toLowerCase();
    if (lowerText.includes(term)) {
      foundTerms.push(key);
    }
  });
  
  return foundTerms;
}

// Get a specific term
export function getGlossaryTerm(key: string): GlossaryTerm | undefined {
  return legalGlossary[key];
}

// Get all terms in a category
export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return Object.values(legalGlossary).filter(term => term.category === category);
}