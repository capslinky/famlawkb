'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Calculator, HelpCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchContent, getSearchSuggestions, SearchResult } from '@/data/searchIndex';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const categoryIcons = {
  module: FileText,
  topic: HelpCircle,
  form: FileText,
  calculator: Calculator,
  emergency: AlertCircle
};

const categoryColors = {
  module: 'text-blue-600',
  topic: 'text-green-600',
  form: 'text-purple-600',
  calculator: 'text-orange-600',
  emergency: 'text-red-600'
};

// Popular searches based on common user needs
const popularSearches = [
  'child custody',
  'divorce process',
  'child support calculator',
  'spousal maintenance',
  'property division',
  'order of protection',
  'parenting time',
  'temporary orders',
  'court forms',
  'legal separation'
];

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
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
  }, []);

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

  // Update suggestions and results as user types
  useEffect(() => {
    if (query.trim().length >= 2) {
      const newSuggestions = getSearchSuggestions(query);
      const newResults = searchContent(query, { limit: 5 });
      setSuggestions(newSuggestions);
      setResults(newResults);
      setIsOpen(true);
    } else if (query.trim().length === 0) {
      // Show recent and popular searches when input is empty but focused
      setSuggestions([]);
      setResults([]);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setResults([]);
      setIsOpen(false);
    }
    setSelectedIndex(-1);
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
    const totalItems = suggestions.length + results.length;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % totalItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      if (selectedIndex < suggestions.length) {
        handleSuggestionClick(suggestions[selectedIndex]);
      } else {
        const resultIndex = selectedIndex - suggestions.length;
        router.push(results[resultIndex].path);
        handleResultClick();
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

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
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
        {isOpen && (suggestions.length > 0 || results.length > 0 || (query.length === 0 && (recentSearches.length > 0 || popularSearches.length > 0))) && (
          <motion.div
            id="search-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto"
          >
            {/* Recent Searches */}
            {query.length === 0 && recentSearches.length > 0 && (
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Searches
                </p>
                {recentSearches.map((search, index) => (
                  <button
                    key={search}
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
            {query.length === 0 && (
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-medium text-gray-500 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular Searches
                </p>
                {popularSearches.slice(0, 6).map((search, index) => (
                  <button
                    key={search}
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
            {suggestions.length > 0 && (
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-medium text-gray-500">Suggestions</p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
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
            {results.length > 0 && (
              <div>
                <p className="px-4 py-2 text-sm font-medium text-gray-500">
                  Top Results
                </p>
                {results.map((result, index) => {
                  const Icon = categoryIcons[result.category];
                  const colorClass = categoryColors[result.category];
                  const isSelected = selectedIndex === suggestions.length + index;
                  
                  return (
                    <Link
                      key={result.id}
                      href={result.path}
                      onClick={handleResultClick}
                      className={`block px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                        isSelected ? 'bg-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-0.5 ${colorClass}`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {result.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-0.5">
                            {result.description}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}