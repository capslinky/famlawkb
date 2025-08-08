'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Calculator, HelpCircle, AlertCircle, Filter, Home, Shield, DollarSign, ChevronRight, Search } from 'lucide-react';
import { SearchResult } from '@/lib/searchIndex';

import SearchBar from '@/components/SearchBar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryIcons: Record<string, any> = {
  divorce: Home,
  custody: HelpCircle,
  support: DollarSign,
  protection: Shield,
  property: Home,
  forms: FileText,
  procedures: FileText,
  resources: FileText
};

const categoryColors: Record<string, string> = {
  divorce: 'text-blue-600 bg-blue-50',
  custody: 'text-green-600 bg-green-50',
  support: 'text-purple-600 bg-purple-50',
  protection: 'text-red-600 bg-red-50',
  property: 'text-orange-600 bg-orange-50',
  forms: 'text-indigo-600 bg-indigo-50',
  procedures: 'text-gray-600 bg-gray-50',
  resources: 'text-teal-600 bg-teal-50'
};

const categoryLabels: Record<string, string> = {
  divorce: 'Divorce',
  custody: 'Child Custody',
  support: 'Support',
  protection: 'Protection',
  property: 'Property',
  forms: 'Forms',
  procedures: 'Procedures',
  resources: 'Resources'
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [relatedContent, setRelatedContent] = useState<SearchResult[]>([]);

  // Fetch search results from API
  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query, selectedCategories, selectedTags]);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    try {
      // Build query parameters
      const params = new URLSearchParams({
        q: query,
        limit: '50'
      });
      
      if (selectedCategories.length > 0) {
        params.append('categories', selectedCategories.join(','));
      }
      
      if (selectedTags.length > 0) {
        params.append('tags', selectedTags.join(','));
      }

      const response = await fetch(`/api/search?${params}`);
      const data = await response.json();
      
      setResults(data.results || []);
      setFilteredResults(data.results || []);
      setTotalResults(data.total || 0);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
      setFilteredResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  // Calculate category counts
  const categoryCounts = results.reduce((acc, result) => {
    acc[result.category] = (acc[result.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Extract unique tags from results
  const allTags = Array.from(new Set(results.flatMap(r => r.tags || [])));

  // Function to highlight matching text
  const renderHighlightedText = (text: string, highlight: string | undefined) => {
    if (!highlight) return text;
    return <span dangerouslySetInnerHTML={{ __html: highlight }} />;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Search Results</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <SearchBar 
              className="max-w-3xl" 
              placeholder="Search again..."
            />
          </div>

          {query && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-4">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Filters</h3>
                      {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                        <button
                          onClick={clearFilters}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Clear all
                        </button>
                      )}
                    </div>

                    {/* Category Filters */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
                      <div className="space-y-2">
                        {Object.keys(categoryCounts).map(category => (
                          <label key={category} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => toggleCategory(category)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">
                              {categoryLabels[category] || category} ({categoryCounts[category]})
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Tag Filters */}
                    {allTags.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {allTags.slice(0, 10).map(tag => (
                            <button
                              key={tag}
                              onClick={() => toggleTag(tag)}
                              className={`px-2 py-1 rounded-full text-xs transition-colors ${
                                selectedTags.includes(tag)
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </aside>

              {/* Main Results */}
              <div className="flex-1">
                <div className="mb-6">
                  <p className="text-gray-600">
                    {isLoading ? (
                      <span className="inline-flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
                        Searching...
                      </span>
                    ) : (
                      <>
                        Found <span className="font-semibold">{totalResults}</span> results 
                        for <span className="font-semibold">&quot;{query}&quot;</span>
                        {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                          <span className="text-sm text-gray-500">
                            {' '}(filtered)
                          </span>
                        )}
                      </>
                    )}
                  </p>
                </div>

                {/* Results List */}
                {!isLoading && filteredResults.length > 0 ? (
                  <div className="space-y-4">
                    {filteredResults.map((result) => {
                      const Icon = categoryIcons[result.category] || FileText;
                      const colorClass = categoryColors[result.category] || 'text-gray-600 bg-gray-50';
                      
                      return (
                        <Link key={result.id} href={result.url}>
                          <Card className="hover:shadow-lg transition-all hover:scale-[1.01]">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className={`p-2 rounded-lg ${colorClass}`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold mb-1 text-gray-900 hover:text-blue-600">
                                    {result.highlights?.title ? 
                                      renderHighlightedText(result.title, result.highlights.title) : 
                                      result.title
                                    }
                                  </h3>
                                  <p className="text-gray-600 mb-3">
                                    {result.highlights?.description ? 
                                      renderHighlightedText(result.description, result.highlights.description) : 
                                      result.description
                                    }
                                  </p>
                                  
                                  {/* Result metadata */}
                                  <div className="flex items-center gap-4 text-sm">
                                    <span className="text-gray-500">
                                      {categoryLabels[result.category] || result.category}
                                    </span>
                                    {result.tags && result.tags.length > 0 && (
                                      <div className="flex gap-2">
                                        {result.tags.slice(0, 3).map(tag => (
                                          <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                  
                                  {/* Content preview if available */}
                                  {result.highlights?.content && (
                                    <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-600">
                                      <span dangerouslySetInnerHTML={{ __html: result.highlights.content }} />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                ) : !isLoading ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          No results found for &quot;{query}&quot;
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500">Try:</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Using different keywords</li>
                          <li>• Checking your spelling</li>
                          <li>• Using more general terms</li>
                          <li>• Removing filters</li>
                        </ul>
                      </div>
                      <div className="mt-6 space-y-3">
                        <Link href="/assessment">
                          <Button className="w-full sm:w-auto">Take Guided Assessment</Button>
                        </Link>
                        <div className="text-sm text-gray-500">or</div>
                        <Link href="/" className="text-blue-600 hover:text-blue-800">
                          Browse all topics
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  // Loading skeleton
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <Card key={i} className="animate-pulse">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                            <div className="flex-1">
                              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Pagination or Load More */}
                {!isLoading && filteredResults.length > 0 && filteredResults.length < totalResults && (
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      Showing {filteredResults.length} of {totalResults} results
                    </p>
                    <Button variant="outline">
                      Load More Results
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* No query state */}
          {!query && (
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Enter a search term to find relevant legal information
                </p>
                <SearchBar 
                  className="max-w-md mx-auto" 
                  placeholder="Try searching for 'divorce process' or 'child custody'"
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}