export interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  category: 'module' | 'topic' | 'form' | 'calculator' | 'emergency';
  tags: string[];
  synonyms?: string[];
}

export const searchIndex: SearchResult[] = [
  // Modules
  {
    id: 'module-pre-filing',
    title: 'Pre-Filing Considerations',
    description: 'Decide if legal action is right for you and gather essential documents.',
    path: '/modules/pre-filing',
    category: 'module',
    tags: ['preparation', 'documents', 'before filing', 'getting started'],
    synonyms: ['prefiling', 'pre filing', 'before divorce', 'should i file']
  },
  {
    id: 'module-starting-case',
    title: 'Starting Your Case',
    description: 'Find the correct court, complete initial forms, and file them.',
    path: '/modules/starting-case',
    category: 'module',
    tags: ['filing', 'petition', 'forms', 'court', 'begin'],
    synonyms: ['file for divorce', 'start divorce', 'divorce papers']
  },
  {
    id: 'module-responding',
    title: 'Responding to Legal Papers',
    description: 'Understand served documents and file your timely response.',
    path: '/modules/responding',
    category: 'module',
    tags: ['served', 'response', 'answer', 'deadline'],
    synonyms: ['got served', 'received papers', 'respond to divorce']
  },
  {
    id: 'module-temporary-orders',
    title: 'Temporary Orders',
    description: 'Seek interim custody, support, or property arrangements.',
    path: '/modules/temporary-orders',
    category: 'module',
    tags: ['temporary', 'emergency', 'interim', 'pending'],
    synonyms: ['temp orders', 'emergency custody', 'temporary support']
  },
  
  // Main Topics
  {
    id: 'topic-divorce',
    title: 'Getting Divorced in Arizona',
    description: 'Complete guide to filing for divorce, requirements, and process.',
    path: '/getting-divorced',
    category: 'topic',
    tags: ['divorce', 'dissolution', 'marriage', 'separate'],
    synonyms: ['devorce', 'divorse', 'get divorced', 'end marriage']
  },
  {
    id: 'topic-custody',
    title: 'Child Custody',
    description: 'Understanding custody, parenting time, and legal decision making.',
    path: '/child-custody',
    category: 'topic',
    tags: ['custody', 'children', 'parenting time', 'visitation'],
    synonyms: ['custidy', 'child custidy', 'kids', 'parenting plan']
  },
  {
    id: 'topic-protection',
    title: 'Get Protection',
    description: 'Orders of Protection and safety resources for domestic violence.',
    path: '/get-protection',
    category: 'topic',
    tags: ['protection', 'safety', 'domestic violence', 'abuse'],
    synonyms: ['restraining order', 'order of protection', 'protective order']
  },
  {
    id: 'emergency-help',
    title: 'Emergency Help',
    description: 'Immediate safety resources and crisis hotlines.',
    path: '/emergency-help',
    category: 'emergency',
    tags: ['emergency', 'crisis', 'danger', 'help', '911'],
    synonyms: ['urgent', 'immediate help', 'crisis help', 'in danger']
  },
  
  // Common Questions/Searches
  {
    id: 'calc-child-support',
    title: 'Child Support Calculator',
    description: 'Calculate estimated child support based on Arizona guidelines.',
    path: '/support/calculator',
    category: 'calculator',
    tags: ['calculator', 'child support', 'money', 'payment'],
    synonyms: ['support calculator', 'how much child support', 'support amount']
  },
  {
    id: 'calc-spousal',
    title: 'Spousal Maintenance Calculator',
    description: 'Estimate spousal maintenance (alimony) payments.',
    path: '/support/spousal-calculator',
    category: 'calculator',
    tags: ['calculator', 'spousal support', 'alimony', 'maintenance'],
    synonyms: ['alimony calculator', 'spousal maintenance', 'spouse support']
  },
  {
    id: 'form-divorce-petition',
    title: 'Divorce Petition Forms',
    description: 'Initial divorce filing forms for Arizona.',
    path: '/forms/divorce-petition',
    category: 'form',
    tags: ['forms', 'petition', 'divorce forms', 'filing'],
    synonyms: ['divorce papers', 'petition for dissolution']
  },
  {
    id: 'form-parenting-plan',
    title: 'Parenting Plan Forms',
    description: 'Create a detailed parenting time schedule.',
    path: '/forms/parenting-plan',
    category: 'form',
    tags: ['forms', 'parenting plan', 'custody forms', 'schedule'],
    synonyms: ['custody agreement', 'visitation schedule']
  },
  
  // Process/Timeline
  {
    id: 'timeline-divorce',
    title: 'Divorce Timeline',
    description: 'How long does divorce take in Arizona?',
    path: '/process/divorce-timeline',
    category: 'topic',
    tags: ['timeline', 'how long', 'duration', 'process'],
    synonyms: ['divorce time', 'how long divorce takes', 'divorce duration']
  },
  {
    id: 'cost-divorce',
    title: 'Divorce Costs',
    description: 'Filing fees and typical costs for divorce in Arizona.',
    path: '/process/divorce-costs',
    category: 'topic',
    tags: ['cost', 'fees', 'price', 'money', 'afford'],
    synonyms: ['how much divorce costs', 'divorce fees', 'filing fee']
  },
  
  // Legal Terms
  {
    id: 'term-community-property',
    title: 'Community Property',
    description: 'Arizona law on dividing marital assets 50/50.',
    path: '/terms/community-property',
    category: 'topic',
    tags: ['property', 'assets', 'division', 'marital'],
    synonyms: ['comunity property', 'marital property', 'property division']
  },
  {
    id: 'term-legal-decision',
    title: 'Legal Decision Making',
    description: 'Authority to make major decisions for children.',
    path: '/terms/legal-decision-making',
    category: 'topic',
    tags: ['custody', 'decisions', 'legal custody', 'authority'],
    synonyms: ['decision making', 'legal custody', 'custody rights']
  }
];

// Helper function to search with fuzzy matching
export function searchContent(query: string, filters?: {
  category?: SearchResult['category'][];
  limit?: number;
}): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  const results: Array<SearchResult & { score: number }> = [];
  
  searchIndex.forEach(item => {
    let score = 0;
    
    // Check each search term
    searchTerms.forEach(term => {
      // Exact match in title (highest score)
      if (item.title.toLowerCase().includes(term)) {
        score += 10;
      }
      
      // Match in description
      if (item.description.toLowerCase().includes(term)) {
        score += 5;
      }
      
      // Match in tags
      if (item.tags.some(tag => tag.includes(term))) {
        score += 3;
      }
      
      // Match in synonyms (helps with misspellings)
      if (item.synonyms?.some(syn => syn.includes(term))) {
        score += 3;
      }
      
      // Partial match bonus for longer terms
      if (term.length > 3) {
        if (item.title.toLowerCase().includes(term.substring(0, 3))) {
          score += 1;
        }
      }
    });
    
    // Apply category filter if provided
    if (filters?.category && !filters.category.includes(item.category)) {
      score = 0;
    }
    
    if (score > 0) {
      results.push({ ...item, score });
    }
  });
  
  // Sort by score and limit results
  results.sort((a, b) => b.score - a.score);
  const limit = filters?.limit || 10;
  
  return results.slice(0, limit);
}

// Get search suggestions for autocomplete
export function getSearchSuggestions(query: string): string[] {
  if (!query || query.trim().length < 2) return [];
  
  const suggestions = new Set<string>();
  const searchTerm = query.toLowerCase().trim();
  
  // Add matching titles
  searchIndex.forEach(item => {
    if (item.title.toLowerCase().startsWith(searchTerm)) {
      suggestions.add(item.title);
    }
  });
  
  // Add matching tags
  searchIndex.forEach(item => {
    item.tags.forEach(tag => {
      if (tag.startsWith(searchTerm) && tag.length > searchTerm.length) {
        suggestions.add(tag.charAt(0).toUpperCase() + tag.slice(1));
      }
    });
  });
  
  // Common search phrases
  const commonPhrases = [
    'How to file for divorce',
    'Child custody laws',
    'Calculate child support',
    'Order of protection',
    'Divorce timeline',
    'Divorce costs',
    'Temporary orders',
    'Parenting plan',
    'Community property',
    'Spousal support'
  ];
  
  commonPhrases.forEach(phrase => {
    if (phrase.toLowerCase().includes(searchTerm)) {
      suggestions.add(phrase);
    }
  });
  
  return Array.from(suggestions).slice(0, 5);
}