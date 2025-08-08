'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Calculator, HelpCircle, AlertTriangle, Clock, TrendingUp, Home, Shield, DollarSign, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchResult } from '@/lib/searchIndex';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const categoryIcons: Record<string, any> = {
  divorce: Home,
  custody: HelpCircle,
  support: DollarSign,
  protection: Shield,
  property: Home,
  forms: FileText,
  procedures: FileText,
  resources: FileText,
  emergency: AlertTriangle
};

const categoryColors: Record<string, string> = {
  divorce: 'text-blue-600',
  custody: 'text-green-600',
  support: 'text-purple-600',
  protection: 'text-red-600',
  property: 'text-orange-600',
  forms: 'text-indigo-600',
  procedures: 'text-gray-600',
  resources: 'text-teal-600'
};

export default function SearchBar({ 
  className = '', 
  placeholder = 'Search for answers... (e.g., "child custody", "divorce process")',
  onSearch 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const debounceTimer = useRef<NodeJS.Timeout | undefined>(undefined);

  // Load recent searches and popular searches on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
    
    // Fetch popular searches
    fetchPopularSearches();
  }, []);

  // Fetch popular searches from API
  const fetchPopularSearches = async () => {
    try {
      const response = await fetch('/api/search/suggestions?q=');
      const data = await response.json();
      setPopularSearches(data.suggestions || []);
    } catch (error) {
      console.error('Error fetching popular searches:', error);
      // Fallback to default popular searches
      setPopularSearches([
        'divorce process',
        'child custody',
        'child support calculator',
        'protection order',
        'spousal maintenance'
      ]);
    }
  };

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Save search to recent searches
  const saveSearch = (searchQuery: string) => {
    if (typeof window !== 'undefined' && searchQuery.trim()) {
      const trimmed = searchQuery.trim();
      const updated = [trimmed, ...recentSearches.filter(s => s !== trimmed)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  };

  // Fetch search results and suggestions from API
  const fetchSearchData = async (searchQuery: string) => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      // Fetch both suggestions and search results in parallel
      const [suggestionsRes, searchRes] = await Promise.all([
        fetch(`/api/search/suggestions?q=${encodeURIComponent(searchQuery)}`),
        fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&limit=5`)
      ]);

      const suggestionsData = await suggestionsRes.json();
      const searchData = await searchRes.json();

      setSuggestions(suggestionsData.suggestions || []);
      setResults(searchData.results || []);
      setIsOpen(true);
    } catch (error) {
      console.error('Error fetching search data:', error);
      setSuggestions([]);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search as user types
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (query.trim().length >= 2) {
      debounceTimer.current = setTimeout(() => {
        fetchSearchData(query);
      }, 300);
    } else if (query.trim().length === 0) {
      // Show recent and popular searches when input is empty but focused
      setSuggestions([]);
      setResults([]);
      if (document.activeElement === inputRef.current) {
        setIsOpen(true);
      }
    } else {
      setSuggestions([]);
      setResults([]);
      setIsOpen(false);
    }
    setSelectedIndex(-1);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveSearch(query);
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      if (onSearch) onSearch(query);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    saveSearch(suggestion);
    setQuery(suggestion);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
    setIsOpen(false);
    if (onSearch) onSearch(suggestion);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = suggestions.length + results.length + 
      (query.length === 0 ? recentSearches.length + Math.min(6, popularSearches.length) : 0);
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % totalItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      
      if (query.length === 0) {
        // Handle recent/popular searches selection
        if (selectedIndex < recentSearches.length) {
          handleSuggestionClick(recentSearches[selectedIndex]);
        } else {
          const popIndex = selectedIndex - recentSearches.length;
          handleSuggestionClick(popularSearches[popIndex]);
        }
      } else {
        // Handle suggestions and results
        if (selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          const resultIndex = selectedIndex - suggestions.length;
          router.push(results[resultIndex].url);
          handleResultClick();
        }
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  // Function to highlight matching text
  const highlightMatch = (text: string, highlight: string | undefined) => {
    if (!highlight) return text;
    // Remove HTML tags from highlight for display
    return <span dangerouslySetInnerHTML={{ __html: highlight }} />;
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            aria-label="Search legal topics"
            aria-autocomplete="list"
            aria-controls="search-dropdown"
          />
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="p-1 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              type="submit"
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label="Submit search"
            >
              <Search className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>
        </div>
      </form>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isOpen && (suggestions.length > 0 || results.length > 0 || 
          (query.length === 0 && (recentSearches.length > 0 || popularSearches.length > 0)) || isLoading) && (
          <motion.div
            id="search-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto"
          >
            {/* Loading state */}
            {isLoading && query.length >= 2 && (
              <div className="px-4 py-8 text-center">
                <div className="inline-flex items-center gap-2 text-gray-500">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
                  Searching...
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {!isLoading && query.length === 0 && recentSearches.length > 0 && (
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Searches
                </p>
                {recentSearches.map((search, index) => (
                  <button
                    key={`recent-${search}`}
                    onClick={() => handleSuggestionClick(search)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{search}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Popular Searches */}
            {!isLoading && query.length === 0 && popularSearches.length > 0 && (
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-medium text-gray-500 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular Searches
                </p>
                {popularSearches.slice(0, 6).map((search, index) => (
                  <button
                    key={`popular-${search}`}
                    onClick={() => handleSuggestionClick(search)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                      selectedIndex === (recentSearches.length + index) ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{search}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {!isLoading && suggestions.length > 0 && (
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-medium text-gray-500">Suggestions</p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={`suggestion-${suggestion}`}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Results */}
            {!isLoading && results.length > 0 && (
              <div>
                <p className="px-4 py-2 text-sm font-medium text-gray-500">
                  Top Results
                </p>
                {results.map((result, index) => {
                  const Icon = categoryIcons[result.category] || FileText;
                  const colorClass = categoryColors[result.category] || 'text-gray-600';
                  const isSelected = selectedIndex === suggestions.length + index;
                  
                  return (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={handleResultClick}
                      className={`block px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                        isSelected ? 'bg-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-0.5 ${colorClass}`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {result.highlights?.title ? 
                              highlightMatch(result.title, result.highlights.title) : 
                              result.title
                            }
                          </h4>
                          <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">
                            {result.highlights?.description ? 
                              highlightMatch(result.description, result.highlights.description) : 
                              result.description
                            }
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
                
                {/* View all results */}
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={handleResultClick}
                  className="block px-4 py-3 text-center text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-50 border-t border-gray-100"
                >
                  View all results for &quot;{query}&quot;
                </Link>
              </div>
            )}

            {/* No results message */}
            {!isLoading && query.length >= 2 && suggestions.length === 0 && results.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                <p className="mb-2">No results found for &quot;{query}&quot;</p>
                <p className="text-sm">Try different keywords or browse our topics</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}