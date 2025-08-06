// Global Search Service for the Arizona Family Law Knowledge Base
// Provides unified search across all content types and resources

interface SearchResult {
  id: string;
  type: 'page' | 'form' | 'calculator' | 'document' | 'help' | 'case' | 'task' | 'event' | 'glossary';
  title: string;
  description: string;
  url: string;
  category?: string;
  relevance: number;
  highlights?: string[];
  metadata?: {
    lastModified?: Date;
    author?: string;
    tags?: string[];
    caseNumber?: string;
    formNumber?: string;
  };
}

interface SearchIndex {
  id: string;
  type: SearchResult['type'];
  title: string;
  content: string;
  url: string;
  category?: string;
  tags?: string[];
  synonyms?: string[];
  weight?: number;
}

class SearchService {
  private searchIndex: SearchIndex[] = [];
  private searchHistory: Map<string, SearchResult[]> = new Map();
  private popularSearches: Map<string, number> = new Map();
  private searchSuggestions: Set<string> = new Set();

  constructor() {
    this.initializeSearchIndex();
    this.loadPopularSearches();
  }

  private initializeSearchIndex() {
    // Initialize with static content index
    this.searchIndex = [
      // Pages
      {
        id: 'page-divorce',
        type: 'page',
        title: 'Getting Divorced in Arizona',
        content: 'Comprehensive guide to divorce process filing petition dissolution marriage requirements residency grounds',
        url: '/getting-divorced',
        category: 'Divorce',
        tags: ['divorce', 'dissolution', 'marriage', 'separation'],
        weight: 10
      },
      {
        id: 'page-custody',
        type: 'page',
        title: 'Child Custody',
        content: 'Child custody parenting time legal decision making joint sole custody arrangements visitation',
        url: '/child-custody',
        category: 'Children',
        tags: ['custody', 'children', 'parenting', 'visitation'],
        weight: 10
      },
      {
        id: 'page-support',
        type: 'page',
        title: 'Child Support',
        content: 'Child support calculator guidelines income shares model payments enforcement modification',
        url: '/topics/child-support',
        category: 'Financial',
        tags: ['support', 'children', 'payments', 'financial'],
        weight: 10
      },
      {
        id: 'page-protection',
        type: 'page',
        title: 'Get Protection',
        content: 'Protection order restraining order domestic violence emergency safety planning',
        url: '/get-protection',
        category: 'Safety',
        tags: ['protection', 'safety', 'emergency', 'violence'],
        weight: 10
      },

      // Forms
      {
        id: 'form-divorce-petition',
        type: 'form',
        title: 'Divorce Petition with Children',
        content: 'Petition dissolution marriage children form DR11p initial filing',
        url: '/forms/divorce-petition-children',
        category: 'Forms',
        tags: ['forms', 'petition', 'divorce', 'children'],
        weight: 8
      },
      {
        id: 'form-response',
        type: 'form',
        title: 'Response to Petition',
        content: 'Response petition answer filing deadline 20 days',
        url: '/forms/response-petition',
        category: 'Forms',
        tags: ['forms', 'response', 'answer', 'deadline'],
        weight: 8
      },
      {
        id: 'form-smart',
        type: 'form',
        title: 'Smart Form - Divorce Petition',
        content: 'Smart form auto-save validation guided assistance divorce petition',
        url: '/forms/smart/divorce-petition',
        category: 'Forms',
        tags: ['forms', 'smart', 'auto-save', 'guided'],
        weight: 9
      },

      // Calculators
      {
        id: 'calc-child-support',
        type: 'calculator',
        title: 'Child Support Calculator',
        content: 'Calculate child support Arizona guidelines income shares model monthly payment',
        url: '/support/calculator',
        category: 'Calculators',
        tags: ['calculator', 'support', 'children', 'financial'],
        weight: 9
      },
      {
        id: 'calc-spousal',
        type: 'calculator',
        title: 'Spousal Maintenance Calculator',
        content: 'Spousal maintenance alimony calculator duration amount guidelines',
        url: '/calculators#spousal-maintenance',
        category: 'Calculators',
        tags: ['calculator', 'spousal', 'maintenance', 'alimony'],
        weight: 8
      },
      {
        id: 'calc-property',
        type: 'calculator',
        title: 'Property Division Analyzer',
        content: 'Property division community property separate equitable distribution assets debts',
        url: '/calculators#property-division',
        category: 'Calculators',
        tags: ['calculator', 'property', 'assets', 'division'],
        weight: 8
      },

      // Help Topics
      {
        id: 'help-filing',
        type: 'help',
        title: 'How to File Documents',
        content: 'Filing documents court clerk electronic filing in person requirements',
        url: '/procedures/court-procedures',
        category: 'Help',
        tags: ['help', 'filing', 'court', 'procedures'],
        weight: 7
      },
      {
        id: 'help-service',
        type: 'help',
        title: 'Service of Process',
        content: 'Service process serve papers sheriff process server acceptance waiver',
        url: '/procedures/court-procedures#service',
        category: 'Help',
        tags: ['help', 'service', 'process', 'papers'],
        weight: 7
      },
      {
        id: 'help-emergency',
        type: 'help',
        title: 'Emergency Orders',
        content: 'Emergency orders temporary ex parte urgent relief protection',
        url: '/procedures/emergency-orders',
        category: 'Help',
        tags: ['help', 'emergency', 'urgent', 'temporary'],
        weight: 9
      },

      // Glossary Terms
      {
        id: 'glossary-petitioner',
        type: 'glossary',
        title: 'Petitioner',
        content: 'Petitioner person who files initiates case plaintiff',
        url: '/glossary#petitioner',
        category: 'Glossary',
        tags: ['glossary', 'terms', 'legal', 'definitions'],
        weight: 5
      },
      {
        id: 'glossary-respondent',
        type: 'glossary',
        title: 'Respondent',
        content: 'Respondent person who responds defendant answer case',
        url: '/glossary#respondent',
        category: 'Glossary',
        tags: ['glossary', 'terms', 'legal', 'definitions'],
        weight: 5
      },
      {
        id: 'glossary-decree',
        type: 'glossary',
        title: 'Decree',
        content: 'Decree final order judgment divorce dissolution court',
        url: '/glossary#decree',
        category: 'Glossary',
        tags: ['glossary', 'terms', 'legal', 'definitions'],
        weight: 5
      }
    ];

    // Build search suggestions from titles and common terms
    this.searchIndex.forEach(item => {
      // Add title words to suggestions
      item.title.toLowerCase().split(' ').forEach(word => {
        if (word.length > 3) {
          this.searchSuggestions.add(word);
        }
      });

      // Add tags to suggestions
      item.tags?.forEach(tag => {
        this.searchSuggestions.add(tag);
      });
    });

    // Add common search terms
    const commonTerms = [
      'divorce', 'custody', 'child support', 'alimony', 'property division',
      'protection order', 'mediation', 'parenting time', 'visitation',
      'temporary orders', 'financial disclosure', 'settlement',
      'court forms', 'filing', 'service', 'response', 'petition',
      'calculator', 'deadlines', 'fees', 'attorney', 'self-representation'
    ];

    commonTerms.forEach(term => this.searchSuggestions.add(term.toLowerCase()));
  }

  private loadPopularSearches() {
    // Load popular searches (would be from analytics in production)
    const popular = [
      'divorce process',
      'child support calculator', 
      'custody agreement',
      'filing for divorce',
      'protection order',
      'spousal maintenance',
      'property division',
      'parenting plan',
      'court forms',
      'response deadline'
    ];

    popular.forEach((term, index) => {
      this.popularSearches.set(term, 100 - index * 10);
    });
  }

  // Perform search
  search(query: string, filters?: {
    types?: SearchResult['type'][];
    categories?: string[];
    limit?: number;
  }): SearchResult[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    
    // Check cache
    const cacheKey = `${searchTerm}-${JSON.stringify(filters)}`;
    if (this.searchHistory.has(cacheKey)) {
      return this.searchHistory.get(cacheKey)!;
    }

    // Track search for popular searches
    this.trackSearch(searchTerm);

    // Perform search
    const results: SearchResult[] = [];
    
    this.searchIndex.forEach(item => {
      // Apply type filter
      if (filters?.types && !filters.types.includes(item.type)) {
        return;
      }

      // Apply category filter
      if (filters?.categories && item.category && !filters.categories.includes(item.category)) {
        return;
      }

      // Calculate relevance score
      let relevance = 0;
      const searchWords = searchTerm.split(' ').filter(w => w.length > 2);
      const highlights: string[] = [];

      // Title match (highest weight)
      const titleLower = item.title.toLowerCase();
      if (titleLower.includes(searchTerm)) {
        relevance += 100 * (item.weight || 1);
        highlights.push(this.highlightMatch(item.title, searchTerm));
      } else {
        searchWords.forEach(word => {
          if (titleLower.includes(word)) {
            relevance += 50 * (item.weight || 1);
            highlights.push(this.highlightMatch(item.title, word));
          }
        });
      }

      // Content match
      const contentLower = item.content.toLowerCase();
      if (contentLower.includes(searchTerm)) {
        relevance += 50 * (item.weight || 1);
        highlights.push(this.extractHighlight(item.content, searchTerm));
      } else {
        searchWords.forEach(word => {
          if (contentLower.includes(word)) {
            relevance += 25 * (item.weight || 1);
            highlights.push(this.extractHighlight(item.content, word));
          }
        });
      }

      // Tag match
      if (item.tags) {
        item.tags.forEach(tag => {
          if (tag.includes(searchTerm) || searchTerm.includes(tag)) {
            relevance += 30 * (item.weight || 1);
          }
        });
      }

      // Synonym match
      if (item.synonyms) {
        item.synonyms.forEach(synonym => {
          if (synonym.includes(searchTerm) || searchTerm.includes(synonym)) {
            relevance += 20 * (item.weight || 1);
          }
        });
      }

      // Add to results if relevant
      if (relevance > 0) {
        results.push({
          id: item.id,
          type: item.type,
          title: item.title,
          description: this.extractDescription(item.content),
          url: item.url,
          category: item.category,
          relevance,
          highlights: highlights.filter(h => h.length > 0).slice(0, 3),
          metadata: {
            tags: item.tags
          }
        });
      }
    });

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);

    // Apply limit
    const limitedResults = filters?.limit ? results.slice(0, filters.limit) : results;

    // Cache results
    this.searchHistory.set(cacheKey, limitedResults);
    
    // Clear old cache entries if too large
    if (this.searchHistory.size > 100) {
      const firstKey = this.searchHistory.keys().next().value;
      if (firstKey) {
        this.searchHistory.delete(firstKey);
      }
    }

    return limitedResults;
  }

  // Get search suggestions
  getSuggestions(partial: string): string[] {
    if (!partial || partial.length < 2) {
      return Array.from(this.popularSearches.keys()).slice(0, 5);
    }

    const partialLower = partial.toLowerCase();
    const suggestions: { term: string; score: number }[] = [];

    // Check all suggestions
    this.searchSuggestions.forEach(suggestion => {
      if (suggestion.startsWith(partialLower)) {
        suggestions.push({
          term: suggestion,
          score: 100 + (this.popularSearches.get(suggestion) || 0)
        });
      } else if (suggestion.includes(partialLower)) {
        suggestions.push({
          term: suggestion,
          score: 50 + (this.popularSearches.get(suggestion) || 0)
        });
      }
    });

    // Check popular searches
    this.popularSearches.forEach((score, term) => {
      if (term.startsWith(partialLower) && !suggestions.some(s => s.term === term)) {
        suggestions.push({ term, score: score + 50 });
      } else if (term.includes(partialLower) && !suggestions.some(s => s.term === term)) {
        suggestions.push({ term, score });
      }
    });

    // Sort by score and return top suggestions
    return suggestions
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(s => s.term);
  }

  // Get popular searches
  getPopularSearches(limit: number = 10): string[] {
    return Array.from(this.popularSearches.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([term]) => term);
  }

  // Get recent searches (would be user-specific in production)
  getRecentSearches(limit: number = 5): string[] {
    const recent = localStorage.getItem('recentSearches');
    if (!recent) return [];
    
    try {
      const searches = JSON.parse(recent);
      return searches.slice(0, limit);
    } catch {
      return [];
    }
  }

  // Track search for analytics
  private trackSearch(term: string): void {
    // Update popular searches count
    const current = this.popularSearches.get(term) || 0;
    this.popularSearches.set(term, current + 1);

    // Save to recent searches
    try {
      const recent = localStorage.getItem('recentSearches');
      let searches: string[] = recent ? JSON.parse(recent) : [];
      
      // Remove if already exists and add to front
      searches = searches.filter(s => s !== term);
      searches.unshift(term);
      
      // Keep only last 20
      searches = searches.slice(0, 20);
      
      localStorage.setItem('recentSearches', JSON.stringify(searches));
    } catch (e) {
      console.error('Failed to save recent search:', e);
    }
  }

  // Extract description from content
  private extractDescription(content: string, maxLength: number = 150): string {
    const cleaned = content.replace(/\s+/g, ' ').trim();
    
    if (cleaned.length <= maxLength) {
      return cleaned;
    }
    
    return cleaned.substring(0, maxLength).trim() + '...';
  }

  // Extract highlight snippet
  private extractHighlight(content: string, term: string, contextLength: number = 50): string {
    const index = content.toLowerCase().indexOf(term.toLowerCase());
    if (index === -1) return '';

    const start = Math.max(0, index - contextLength);
    const end = Math.min(content.length, index + term.length + contextLength);
    
    let highlight = content.substring(start, end);
    
    if (start > 0) highlight = '...' + highlight;
    if (end < content.length) highlight = highlight + '...';
    
    return highlight;
  }

  // Highlight matching text
  private highlightMatch(text: string, term: string): string {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Clear search cache
  clearCache(): void {
    this.searchHistory.clear();
  }

  // Add content to index (for dynamic content)
  addToIndex(item: SearchIndex): void {
    // Check if already exists
    const existingIndex = this.searchIndex.findIndex(i => i.id === item.id);
    
    if (existingIndex >= 0) {
      // Update existing
      this.searchIndex[existingIndex] = item;
    } else {
      // Add new
      this.searchIndex.push(item);
    }

    // Update suggestions
    item.title.toLowerCase().split(' ').forEach(word => {
      if (word.length > 3) {
        this.searchSuggestions.add(word);
      }
    });
  }

  // Remove from index
  removeFromIndex(id: string): void {
    this.searchIndex = this.searchIndex.filter(item => item.id !== id);
  }

  // Get search statistics
  getSearchStats(): {
    totalIndexed: number;
    popularSearches: [string, number][];
    recentSearches: string[];
    cacheSize: number;
  } {
    return {
      totalIndexed: this.searchIndex.length,
      popularSearches: Array.from(this.popularSearches.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
      recentSearches: this.getRecentSearches(10),
      cacheSize: this.searchHistory.size
    };
  }
}

// Export singleton instance
export const searchService = new SearchService();

// Export types
export type { SearchResult, SearchIndex };