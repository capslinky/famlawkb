'use client';

import { useState, useMemo } from 'react';

import Link from 'next/link';
import { ArrowLeft, Book, Search, Volume2, Filter, Hash, ChevronDown } from 'lucide-react';
import { legalGlossary, getTermsByCategory, GlossaryTerm } from '@/data/legalGlossary';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryLabels = {
  custody: 'Custody & Parenting',
  financial: 'Financial & Support',
  court: 'Court Process',
  property: 'Property Division',
  general: 'General Terms'
};

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GlossaryTerm['category'] | 'all'>('all');
  const [sortBy, setSortBy] = useState<'alphabetical' | 'category'>('alphabetical');
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  // Get all first letters for alphabet navigation
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    Object.values(legalGlossary).forEach(term => {
      letters.add(term.term.charAt(0).toUpperCase());
    });
    return Array.from(letters).sort();
  }, []);

  const filteredTerms = useMemo(() => {
    const filtered = Object.entries(legalGlossary).filter(([, term]) => {
      const matchesSearch = searchQuery === '' || 
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      
      const matchesLetter = selectedLetter === '' || 
        term.term.charAt(0).toUpperCase() === selectedLetter;
      
      return matchesSearch && matchesCategory && matchesLetter;
    });

    // Sort the results
    filtered.sort(([, a], [, b]) => {
      if (sortBy === 'alphabetical') {
        return a.term.localeCompare(b.term);
      } else {
        // Sort by category first, then alphabetically within category
        if (a.category !== b.category) {
          return a.category.localeCompare(b.category);
        }
        return a.term.localeCompare(b.term);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedLetter, sortBy]);

  const handlePronounce = (term: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(term);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

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

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Legal Terms Glossary</h1>
            <p className="text-lg text-gray-600">
              Plain English definitions of Arizona family law terms
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search terms or definitions..."
                className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Alphabet Navigation */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-3">
                <Hash className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Browse by Letter</span>
                {selectedLetter && (
                  <button
                    onClick={() => setSelectedLetter('')}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {availableLetters.map(letter => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                      selectedLetter === letter
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filters and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border'
                    }`}
                  >
                    All Terms ({Object.keys(legalGlossary).length})
                  </button>
                  {(Object.keys(categoryLabels) as Array<GlossaryTerm['category']>).map(category => {
                    const count = getTermsByCategory(category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border'
                        }`}
                      >
                        {categoryLabels[category]} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:w-48">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'alphabetical' | 'category')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="alphabetical">Alphabetical</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>

            {/* Active Filters Summary */}
            {(searchQuery || selectedCategory !== 'all' || selectedLetter) && (
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-blue-800">
                    <Filter className="w-4 h-4" />
                    <span>Showing {filteredTerms.length} terms</span>
                    {searchQuery && <span>• Search: &quot;{searchQuery}&quot;</span>}
                    {selectedCategory !== 'all' && <span>• Category: {categoryLabels[selectedCategory]}</span>}
                    {selectedLetter && <span>• Letter: {selectedLetter}</span>}
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedLetter('');
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Terms List */}
          {filteredTerms.length > 0 ? (
            <div className="space-y-4">
              {(() => {
                if (sortBy === 'category') {
                  // Group terms by category
                  const grouped = filteredTerms.reduce((acc, [key, term]) => {
                    if (!acc[term.category]) acc[term.category] = [];
                    acc[term.category].push([key, term]);
                    return acc;
                  }, {} as Record<string, typeof filteredTerms>);

                  return Object.entries(grouped).map(([category, terms]) => (
                    <div key={category} className="space-y-4">
                      <div className="border-b border-gray-200 pb-2">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <ChevronDown className="w-6 h-6" />
                          {categoryLabels[category as GlossaryTerm['category']]}
                          <span className="text-sm font-normal text-gray-500">({terms.length})</span>
                        </h2>
                      </div>
                      <div className="space-y-3 ml-4">
                        {terms.map(([key, term]) => (
                          <Card key={key} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {term.term}
                                </h3>
                                {term.pronunciation && (
                                  <button
                                    onClick={() => handlePronounce(term.term)}
                                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                                    aria-label={`Pronounce ${term.term}`}
                                  >
                                    <Volume2 className="w-5 h-5" />
                                  </button>
                                )}
                              </div>

                              {term.pronunciation && (
                                <p className="text-sm text-gray-500 mb-3 italic">
                                  {term.pronunciation}
                                </p>
                              )}

                              <p className="text-gray-700 mb-3">
                                {term.definition}
                              </p>

                              {term.relatedTerms && term.relatedTerms.length > 0 && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <span>See also:</span>
                                  {term.relatedTerms.slice(0, 2).map(relatedKey => {
                                    const relatedTerm = legalGlossary[relatedKey];
                                    if (!relatedTerm) return null;
                                    return (
                                      <button
                                        key={relatedKey}
                                        onClick={() => {
                                          setSearchQuery(relatedTerm.term);
                                          window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="text-blue-600 hover:underline"
                                      >
                                        {relatedTerm.term}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ));
                } else {
                  // Regular alphabetical list
                  return filteredTerms.map(([key, term]) => (
                    <Card key={key} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {term.term}
                          </h3>
                          {term.pronunciation && (
                            <button
                              onClick={() => handlePronounce(term.term)}
                              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                              aria-label={`Pronounce ${term.term}`}
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>

                        {term.pronunciation && (
                          <p className="text-sm text-gray-500 mb-3 italic">
                            {term.pronunciation}
                          </p>
                        )}

                        <p className="text-gray-700 mb-3">
                          {term.definition}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {categoryLabels[term.category]}
                          </span>

                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>See also:</span>
                              {term.relatedTerms.slice(0, 2).map(relatedKey => {
                                const relatedTerm = legalGlossary[relatedKey];
                                if (!relatedTerm) return null;
                                return (
                                  <button
                                    key={relatedKey}
                                    onClick={() => {
                                      setSearchQuery(relatedTerm.term);
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {relatedTerm.term}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ));
                }
              })()}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-4">
                  No terms found matching your search.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Help Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="font-semibold mb-2">Understanding Legal Terms</h2>
            <p className="text-gray-700 mb-4">
              Legal documents can be confusing. This glossary explains common terms used in 
              Arizona family law in plain English. When you see these terms on our site, 
              look for the dotted underline to get instant definitions.
            </p>
            <Link href="/assessment">
              <Button>Get Personalized Help</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}