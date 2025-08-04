'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Book, Search, Volume2 } from 'lucide-react';
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

  const filteredTerms = Object.entries(legalGlossary).filter(([, term]) => {
    const matchesSearch = searchQuery === '' || 
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
          <div className="mb-8">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search terms..."
                className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>

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

          {/* Terms List */}
          {filteredTerms.length > 0 ? (
            <div className="space-y-4">
              {filteredTerms.map(([key, term]) => (
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
              ))}
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