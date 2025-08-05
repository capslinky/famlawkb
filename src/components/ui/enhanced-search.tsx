'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Clock, 
  Star, 
  FileText, 
  AlertTriangle, 
  ChevronDown,
  ArrowRight,
  BookOpen,
  Users,
  Gavel,
  Shield
} from 'lucide-react';
import { Button } from './button';
// Removed Card import to avoid circular dependencies
import { cn } from '@/lib/utils';

// Types
export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  category: 'divorce' | 'custody' | 'support' | 'protection' | 'forms' | 'procedures' | 'resources';
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  complexity: 'simple' | 'moderate' | 'complex';
  tags: string[];
  lastUpdated: Date;
  readTime: number; // in minutes
  relevanceScore: number;
}

export interface SearchFilters {
  categories: string[];
  urgency: string[];
  complexity: string[];
  tags: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

// Mock data - in real app, this would come from API/CMS
const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    title: 'Filing for Divorce in Arizona',
    excerpt: 'Complete guide to initiating divorce proceedings, required documents, and filing procedures in Arizona courts.',
    url: '/divorce/filing',
    category: 'divorce',
    urgency: 'medium',
    complexity: 'moderate',
    tags: ['filing', 'paperwork', 'court'],
    lastUpdated: new Date('2024-01-15'),
    readTime: 8,
    relevanceScore: 0.95
  },
  {
    id: '2',
    title: 'Emergency Protection Orders',
    excerpt: 'Immediate steps to obtain protection from domestic violence, including same-day court procedures.',
    url: '/protection/emergency',
    category: 'protection',
    urgency: 'emergency',
    complexity: 'simple',
    tags: ['emergency', 'safety', 'domestic violence'],
    lastUpdated: new Date('2024-01-10'),
    readTime: 5,
    relevanceScore: 0.88
  },
  // Add more mock results...
];

// Enhanced Search Component
interface EnhancedSearchProps {
  placeholder?: string;
  className?: string;
  onResultSelect?: (result: SearchResult) => void;
  showFilters?: boolean;
  showRecentSearches?: boolean;
}

export function EnhancedSearch({
  placeholder = 'Search legal topics...',
  className = '',
  onResultSelect,
  showFilters = true,
  showRecentSearches = true
}: EnhancedSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    categories: [],
    urgency: [],
    complexity: [],
    tags: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Perform search
  const performSearch = useMemo(() => {
    return (searchQuery: string, currentFilters: SearchFilters) => {
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        let filteredResults = MOCK_SEARCH_RESULTS;
        
        // Apply text search
        if (searchQuery.trim()) {
          filteredResults = filteredResults.filter(result => 
            result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
          );
        }
        
        // Apply filters
        if (currentFilters.categories.length > 0) {
          filteredResults = filteredResults.filter(result => 
            currentFilters.categories.includes(result.category)
          );
        }
        
        if (currentFilters.urgency.length > 0) {
          filteredResults = filteredResults.filter(result => 
            currentFilters.urgency.includes(result.urgency)
          );
        }
        
        if (currentFilters.complexity.length > 0) {
          filteredResults = filteredResults.filter(result => 
            currentFilters.complexity.includes(result.complexity)
          );
        }
        
        // Sort by relevance
        filteredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
        
        setResults(filteredResults);
        setIsLoading(false);
      }, 300);
    };
  }, []);

  // Search on query or filter change
  useEffect(() => {
    if (query.trim() || Object.values(filters).some(arr => arr.length > 0)) {
      performSearch(query, filters);
    } else {
      setResults([]);
    }
  }, [query, filters, performSearch]);

  // Handle search input
  const handleSearch = (value: string) => {
    setQuery(value);
    setIsOpen(true);
    
    if (value.trim() && !recentSearches.includes(value.trim())) {
      const updated = [value.trim(), ...recentSearches.slice(0, 4)];
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  };

  // Handle result selection
  const handleResultSelect = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    onResultSelect?.(result);
  };

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryIcon = (category: SearchResult['category']) => {
    switch (category) {
      case 'divorce': return <Users className="w-4 h-4" />;
      case 'custody': return <Shield className="w-4 h-4" />;
      case 'support': return <FileText className="w-4 h-4" />;
      case 'protection': return <AlertTriangle className="w-4 h-4" />;
      case 'forms': return <FileText className="w-4 h-4" />;
      case 'procedures': return <Gavel className="w-4 h-4" />;
      case 'resources': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getUrgencyColor = (urgency: SearchResult['urgency']) => {
    switch (urgency) {
      case 'emergency': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div ref={searchRef} className={cn('relative w-full max-w-2xl', className)}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          {showFilters && (
            <button
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className={cn(
                'p-2 text-gray-400 hover:text-gray-600 transition-colors',
                showFiltersPanel && 'text-primary-600'
              )}
              aria-label="Search filters"
            >
              <Filter className="h-4 w-4" />
            </button>
          )}
          
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setResults([]);
                inputRef.current?.focus();
              }}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {/* Recent Searches */}
            {showRecentSearches && !query && recentSearches.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Searches
                </h4>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {isLoading ? (
              <div className="p-4 text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
                <p className="text-sm text-gray-500 mt-2">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.slice(0, 8).map((result) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    onSelect={handleResultSelect}
                    query={query}
                  />
                ))}
                
                {results.length > 8 && (
                  <div className="px-4 py-2 border-t border-gray-100">
                    <Button variant="ghost" size="sm" className="w-full">
                      View all {results.length} results
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            ) : query ? (
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">No results found for "{query}"</p>
                <p className="text-xs text-gray-400 mt-1">Try different keywords or check filters</p>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFiltersPanel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-40"
          >
            <SearchFiltersPanel
              filters={filters}
              onFiltersChange={setFilters}
              onClose={() => setShowFiltersPanel(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Search Result Item Component
interface SearchResultItemProps {
  result: SearchResult;
  onSelect: (result: SearchResult) => void;
  query: string;
}

function SearchResultItem({ result, onSelect, query }: SearchResultItemProps) {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-0.5 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <button
      onClick={() => onSelect(result)}
      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          {getCategoryIcon(result.category)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-medium text-gray-900 truncate">
              {highlightText(result.title, query)}
            </h4>
            <span className={cn(
              'px-2 py-0.5 rounded-full text-xs font-medium',
              getUrgencyColor(result.urgency)
            )}>
              {result.urgency}
            </span>
          </div>
          
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
            {highlightText(result.excerpt, query)}
          </p>
          
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="capitalize">{result.category}</span>
            <span>•</span>
            <span>{result.readTime} min read</span>
            <span>•</span>
            <span className="capitalize">{result.complexity}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

// Search Filters Panel Component
interface SearchFiltersPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClose: () => void;
}

function SearchFiltersPanel({ filters, onFiltersChange, onClose }: SearchFiltersPanelProps) {
  const categories = [
    { value: 'divorce', label: 'Divorce' },
    { value: 'custody', label: 'Child Custody' },
    { value: 'support', label: 'Support' },
    { value: 'protection', label: 'Protection Orders' },
    { value: 'forms', label: 'Forms' },
    { value: 'procedures', label: 'Court Procedures' },
    { value: 'resources', label: 'Resources' }
  ];

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency' },
    { value: 'high', label: 'High Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'low', label: 'Low Priority' }
  ];

  const complexityLevels = [
    { value: 'simple', label: 'Simple' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'complex', label: 'Complex' }
  ];

  const toggleFilter = (filterType: keyof SearchFilters, value: string) => {
    const currentValues = filters[filterType] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFiltersChange({
      ...filters,
      [filterType]: newValues
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      urgency: [],
      complexity: [],
      tags: []
    });
  };

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">Search Filters</h3>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs"
            >
              Clear All
            </Button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
          <div className="space-y-1">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.value)}
                  onChange={() => toggleFilter('categories', category.value)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Urgency</h4>
          <div className="space-y-1">
            {urgencyLevels.map((level) => (
              <label key={level.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.urgency.includes(level.value)}
                  onChange={() => toggleFilter('urgency', level.value)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">{level.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Complexity */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Complexity</h4>
          <div className="space-y-1">
            {complexityLevels.map((level) => (
              <label key={level.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.complexity.includes(level.value)}
                  onChange={() => toggleFilter('complexity', level.value)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">{level.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Recommendations Component
interface ContentRecommendationsProps {
  currentPageUrl?: string;
  userJourney?: 'divorce' | 'custody' | 'support' | 'protection';
  className?: string;
}

export function ContentRecommendations({ 
  currentPageUrl, 
  userJourney,
  className = '' 
}: ContentRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Mock recommendation logic - in real app, this would be more sophisticated
    const getRecommendations = () => {
      let filtered = MOCK_SEARCH_RESULTS;
      
      if (userJourney) {
        filtered = filtered.filter(result => result.category === userJourney);
      }
      
      // Exclude current page
      if (currentPageUrl) {
        filtered = filtered.filter(result => result.url !== currentPageUrl);
      }
      
      return filtered.slice(0, 3);
    };

    setRecommendations(getRecommendations());
  }, [currentPageUrl, userJourney]);

  if (recommendations.length === 0) return null;

  return (
    <div className={cn('rounded-lg border bg-white shadow-sm p-6', className)}>
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 text-yellow-500" />
        <h3 className="font-semibold text-gray-900">Recommended for You</h3>
      </div>
      
      <div className="space-y-3">
        {recommendations.map((result) => (
          <div key={result.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 mt-1">
              {getCategoryIcon(result.category)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 text-sm mb-1">{result.title}</h4>
              <p className="text-xs text-gray-600 line-clamp-2 mb-2">{result.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{result.readTime} min</span>
                <span className={cn(
                  'px-2 py-0.5 rounded-full font-medium',
                  getUrgencyColor(result.urgency)
                )}>
                  {result.urgency}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCategoryIcon(category: SearchResult['category']) {
  switch (category) {
    case 'divorce': return <Users className="w-4 h-4 text-blue-600" />;
    case 'custody': return <Shield className="w-4 h-4 text-green-600" />;
    case 'support': return <FileText className="w-4 h-4 text-purple-600" />;
    case 'protection': return <AlertTriangle className="w-4 h-4 text-red-600" />;
    case 'forms': return <FileText className="w-4 h-4 text-gray-600" />;
    case 'procedures': return <Gavel className="w-4 h-4 text-indigo-600" />;
    case 'resources': return <BookOpen className="w-4 h-4 text-orange-600" />;
    default: return <FileText className="w-4 h-4 text-gray-600" />;
  }
}

function getUrgencyColor(urgency: SearchResult['urgency']) {
  switch (urgency) {
    case 'emergency': return 'text-red-600 bg-red-100';
    case 'high': return 'text-orange-600 bg-orange-100';
    case 'medium': return 'text-yellow-600 bg-yellow-100';
    case 'low': return 'text-green-600 bg-green-100';
  }
}