'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Calculator, HelpCircle, AlertCircle, Filter } from 'lucide-react';
import { searchContent, SearchResult } from '@/data/searchIndex';
import SearchBar from '@/components/SearchBar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryIcons = {
  module: FileText,
  topic: HelpCircle,
  form: FileText,
  calculator: Calculator,
  emergency: AlertCircle
};

const categoryColors = {
  module: 'text-blue-600 bg-blue-50',
  topic: 'text-green-600 bg-green-50',
  form: 'text-purple-600 bg-purple-50',
  calculator: 'text-orange-600 bg-orange-50',
  emergency: 'text-red-600 bg-red-50'
};

const categoryLabels = {
  module: 'Learning Module',
  topic: 'Topic',
  form: 'Form',
  calculator: 'Calculator',
  emergency: 'Emergency Resource'
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<SearchResult['category'][]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (query) {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setFilteredResults(searchResults);
    }
  }, [query]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredResults(results);
    } else {
      setFilteredResults(results.filter(r => selectedCategories.includes(r.category)));
    }
  }, [selectedCategories, results]);

  const toggleCategory = (category: SearchResult['category']) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const categoryCounts = results.reduce((acc, result) => {
    acc[result.category] = (acc[result.category] || 0) + 1;
    return acc;
  }, {} as Record<SearchResult['category'], number>);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <SearchBar 
              className="max-w-2xl" 
              placeholder="Search again..."
            />
          </div>

          {query && (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Found <span className="font-semibold">{filteredResults.length}</span> results 
                  for <span className="font-semibold">&quot;{query}&quot;</span>
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {selectedCategories.length > 0 && (
                    <span className="ml-1 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                      {selectedCategories.length}
                    </span>
                  )}
                </Button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-semibold mb-3">Filter by Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(categoryCounts) as SearchResult['category'][]).map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedCategories.includes(category)
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {categoryLabels[category]} ({categoryCounts[category]})
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {filteredResults.length > 0 ? (
                <div className="space-y-4">
                  {filteredResults.map((result) => {
                    const Icon = categoryIcons[result.category];
                    const colorClass = categoryColors[result.category];
                    
                    return (
                      <Link key={result.id} href={result.path}>
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`p-2 rounded-lg ${colorClass}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 text-gray-900 hover:text-blue-600">
                                  {result.title}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                  {result.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="text-gray-500">
                                    {categoryLabels[result.category]}
                                  </span>
                                  <span className="text-blue-600">
                                    {result.path}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-600 mb-4">
                      No results found for your search.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Try:</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Checking your spelling</li>
                        <li>• Using different keywords</li>
                        <li>• Using more general terms</li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link href="/assessment">
                        <Button>Take Guided Assessment</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}