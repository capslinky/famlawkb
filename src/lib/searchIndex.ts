import { Metadata } from 'next';

export interface SearchableContent {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  category: 'divorce' | 'custody' | 'support' | 'protection' | 'property' | 'forms' | 'procedures' | 'resources';
  tags: string[];
  lastModified: Date;
  priority: number; // 1-10, higher is more important
}

export interface SearchResult extends SearchableContent {
  score: number;
  highlights: {
    title?: string;
    description?: string;
    content?: string;
  };
}

export interface SearchFilters {
  categories?: string[];
  tags?: string[];
  dateRange?: {
    start?: Date;
    end?: Date;
  };
}

class SearchIndexService {
  private index: Map<string, SearchableContent> = new Map();
  private searchCache: Map<string, SearchResult[]> = new Map();
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;
    
    // Index all static content
    await this.indexStaticContent();
    this.initialized = true;
  }

  private async indexStaticContent(): Promise<void> {
    // Index main pages
    const pages: SearchableContent[] = [
      {
        id: 'divorce-overview',
        title: 'Getting Divorced in Arizona',
        description: 'Complete guide to divorce process, requirements, and timeline in Arizona',
        content: 'Comprehensive information about filing for divorce, contested vs uncontested divorce, requirements, timelines, costs, and step-by-step process',
        url: '/getting-divorced',
        category: 'divorce',
        tags: ['divorce', 'filing', 'process', 'requirements', 'timeline'],
        lastModified: new Date(),
        priority: 10
      },
      {
        id: 'child-support',
        title: 'Child Support in Arizona',
        description: 'Understanding child support calculations, modifications, and enforcement',
        content: 'Arizona Income Shares Model, support calculations, payment methods, modifications, enforcement, arrears, and legal requirements',
        url: '/topics/child-support',
        category: 'support',
        tags: ['child support', 'calculations', 'payments', 'modifications'],
        lastModified: new Date(),
        priority: 9
      },
      {
        id: 'custody-overview',
        title: 'Child Custody in Arizona',
        description: 'Legal decision-making and parenting time in Arizona family law',
        content: 'Legal decision-making, parenting time, custody types, best interests factors, parenting plans, modifications, relocation',
        url: '/child-custody',
        category: 'custody',
        tags: ['custody', 'parenting time', 'legal decision-making', 'parenting plan'],
        lastModified: new Date(),
        priority: 9
      },
      {
        id: 'protection-orders',
        title: 'Protection Orders in Arizona',
        description: 'Emergency protection orders, restraining orders, and safety planning',
        content: 'Orders of protection, emergency orders, filing process, qualifying relationships, violations, safety planning, resources',
        url: '/get-protection',
        category: 'protection',
        tags: ['protection order', 'restraining order', 'domestic violence', 'safety'],
        lastModified: new Date(),
        priority: 10
      },
      {
        id: 'property-division',
        title: 'Property Division in Arizona',
        description: 'Community property laws and asset division in divorce',
        content: 'Community property vs separate property, equitable distribution, valuation, debts, retirement accounts, real estate',
        url: '/topics/property-division',
        category: 'property',
        tags: ['property division', 'community property', 'assets', 'debts'],
        lastModified: new Date(),
        priority: 8
      },
      {
        id: 'spousal-maintenance',
        title: 'Spousal Maintenance (Alimony)',
        description: 'Spousal support eligibility, calculation, and duration in Arizona',
        content: 'Eligibility factors, amount calculation, duration, modifications, tax implications, temporary vs permanent maintenance',
        url: '/topics/spousal-maintenance',
        category: 'support',
        tags: ['spousal maintenance', 'alimony', 'spousal support', 'modifications'],
        lastModified: new Date(),
        priority: 7
      },
      {
        id: 'court-procedures',
        title: 'Court Procedures',
        description: 'Navigate Arizona family court procedures and requirements',
        content: 'Filing procedures, service of process, court hearings, evidence, witnesses, courtroom etiquette, deadlines',
        url: '/procedures/court-procedures',
        category: 'procedures',
        tags: ['court', 'procedures', 'filing', 'hearings', 'evidence'],
        lastModified: new Date(),
        priority: 8
      },
      {
        id: 'forms-hub',
        title: 'Court Forms',
        description: 'Arizona family law court forms and filing instructions',
        content: 'Divorce petitions, responses, financial affidavits, parenting plans, orders, modifications, downloadable forms',
        url: '/forms',
        category: 'forms',
        tags: ['forms', 'petitions', 'documents', 'filing'],
        lastModified: new Date(),
        priority: 9
      },
      {
        id: 'child-support-calculator',
        title: 'Child Support Calculator',
        description: 'Calculate estimated child support using Arizona guidelines',
        content: 'Interactive calculator, Income Shares Model, parenting time adjustments, additional expenses, deviations',
        url: '/support/calculator',
        category: 'support',
        tags: ['calculator', 'child support', 'tools', 'estimation'],
        lastModified: new Date(),
        priority: 8
      },
      {
        id: 'emergency-help',
        title: 'Emergency Help',
        description: 'Immediate assistance for domestic violence and crisis situations',
        content: 'Crisis hotlines, emergency shelters, safety planning, protection orders, law enforcement, victim resources',
        url: '/emergency-help',
        category: 'protection',
        tags: ['emergency', 'crisis', 'domestic violence', 'help', 'safety'],
        lastModified: new Date(),
        priority: 10
      }
    ];

    // Add process modules
    const modules = [
      'responding', 'first-appearance', 'disclosures', 'temporary-orders',
      'mediation', 'trial-prep', 'modifications', 'enforcement-appeals'
    ];

    modules.forEach(module => {
      pages.push({
        id: `module-${module}`,
        title: module.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        description: `Guide to ${module.replace('-', ' ')} in Arizona family law cases`,
        content: `Detailed information about ${module.replace('-', ' ')} procedures, requirements, timelines, and strategies`,
        url: `/modules/${module}`,
        category: 'procedures',
        tags: [module, 'process', 'procedures'],
        lastModified: new Date(),
        priority: 7
      });
    });

    // Index all content
    pages.forEach(page => {
      this.index.set(page.id, page);
    });
  }

  search(query: string, filters?: SearchFilters): SearchResult[] {
    // Check cache first
    const cacheKey = JSON.stringify({ query, filters });
    if (this.searchCache.has(cacheKey)) {
      return this.searchCache.get(cacheKey)!;
    }

    const normalizedQuery = query.toLowerCase().trim();
    const queryWords = normalizedQuery.split(/\s+/);
    
    const results: SearchResult[] = [];

    this.index.forEach(content => {
      // Apply filters
      if (filters) {
        if (filters.categories && !filters.categories.includes(content.category)) {
          return;
        }
        if (filters.tags && !filters.tags.some(tag => content.tags.includes(tag))) {
          return;
        }
      }

      // Calculate relevance score
      let score = 0;
      const highlights: SearchResult['highlights'] = {};

      // Title matching (highest weight)
      const titleLower = content.title.toLowerCase();
      if (titleLower.includes(normalizedQuery)) {
        score += 50;
        highlights.title = this.highlightText(content.title, queryWords);
      } else {
        queryWords.forEach(word => {
          if (titleLower.includes(word)) {
            score += 10;
            highlights.title = this.highlightText(content.title, queryWords);
          }
        });
      }

      // Description matching
      const descLower = content.description.toLowerCase();
      if (descLower.includes(normalizedQuery)) {
        score += 30;
        highlights.description = this.highlightText(content.description, queryWords);
      } else {
        queryWords.forEach(word => {
          if (descLower.includes(word)) {
            score += 5;
            highlights.description = this.highlightText(content.description, queryWords);
          }
        });
      }

      // Content matching
      const contentLower = content.content.toLowerCase();
      if (contentLower.includes(normalizedQuery)) {
        score += 20;
        highlights.content = this.highlightText(content.content, queryWords, 150);
      } else {
        queryWords.forEach(word => {
          if (contentLower.includes(word)) {
            score += 3;
            highlights.content = this.highlightText(content.content, queryWords, 150);
          }
        });
      }

      // Tag matching
      content.tags.forEach(tag => {
        if (tag.toLowerCase().includes(normalizedQuery)) {
          score += 15;
        } else {
          queryWords.forEach(word => {
            if (tag.toLowerCase().includes(word)) {
              score += 3;
            }
          });
        }
      });

      // Apply priority multiplier
      score = score * (1 + content.priority / 10);

      if (score > 0) {
        results.push({
          ...content,
          score,
          highlights
        });
      }
    });

    // Sort by score
    results.sort((a, b) => b.score - a.score);

    // Cache results
    this.searchCache.set(cacheKey, results);

    // Clear cache if it gets too large
    if (this.searchCache.size > 100) {
      const firstKey = this.searchCache.keys().next().value;
      if (firstKey !== undefined) {
        this.searchCache.delete(firstKey);
      }
    }

    return results;
  }

  private highlightText(text: string, queryWords: string[], maxLength = 0): string {
    let highlighted = text;
    
    // Highlight each query word
    queryWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });

    // Truncate if needed
    if (maxLength > 0 && highlighted.length > maxLength) {
      const firstMark = highlighted.indexOf('<mark>');
      if (firstMark > 0 && firstMark < maxLength / 2) {
        // Start from beginning if highlight is early
        highlighted = highlighted.substring(0, maxLength) + '...';
      } else if (firstMark >= 0) {
        // Center around first highlight
        const start = Math.max(0, firstMark - maxLength / 3);
        const end = Math.min(highlighted.length, start + maxLength);
        highlighted = '...' + highlighted.substring(start, end) + '...';
      } else {
        // No highlight, just truncate
        highlighted = highlighted.substring(0, maxLength) + '...';
      }
    }

    return highlighted;
  }

  getSuggestions(partial: string, limit = 5): string[] {
    const normalizedPartial = partial.toLowerCase().trim();
    const suggestions = new Set<string>();

    // Get suggestions from titles
    this.index.forEach(content => {
      const titleLower = content.title.toLowerCase();
      if (titleLower.includes(normalizedPartial)) {
        suggestions.add(content.title);
      }
    });

    // Get suggestions from tags
    this.index.forEach(content => {
      content.tags.forEach(tag => {
        if (tag.toLowerCase().includes(normalizedPartial)) {
          suggestions.add(tag);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }

  getPopularSearches(): string[] {
    return [
      'divorce process',
      'child custody',
      'child support calculator',
      'protection order',
      'spousal maintenance',
      'property division',
      'court forms',
      'filing for divorce',
      'parenting plan',
      'emergency help'
    ];
  }

  getRelatedContent(contentId: string, limit = 5): SearchableContent[] {
    const content = this.index.get(contentId);
    if (!content) return [];

    const related: Array<{ content: SearchableContent; score: number }> = [];

    this.index.forEach((item, id) => {
      if (id === contentId) return;

      let score = 0;

      // Same category
      if (item.category === content.category) {
        score += 10;
      }

      // Shared tags
      const sharedTags = item.tags.filter(tag => content.tags.includes(tag));
      score += sharedTags.length * 5;

      // Title similarity
      const titleWords = content.title.toLowerCase().split(/\s+/);
      titleWords.forEach(word => {
        if (item.title.toLowerCase().includes(word)) {
          score += 2;
        }
      });

      if (score > 0) {
        related.push({ content: item, score });
      }
    });

    return related
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.content);
  }

  clearCache(): void {
    this.searchCache.clear();
  }

  addContent(content: SearchableContent): void {
    this.index.set(content.id, content);
    this.clearCache();
  }

  removeContent(id: string): void {
    this.index.delete(id);
    this.clearCache();
  }

  updateContent(id: string, updates: Partial<SearchableContent>): void {
    const existing = this.index.get(id);
    if (existing) {
      this.index.set(id, { ...existing, ...updates, lastModified: new Date() });
      this.clearCache();
    }
  }
}

// Export singleton instance
export const searchIndexService = new SearchIndexService();

// Initialize on module load
if (typeof window !== 'undefined') {
  searchIndexService.initialize();
}