'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, HelpCircle, Download, Share2, Database, Globe, Zap, Shield, CheckCircle, ArrowRight, FileText, Settings, Code, BarChart3, AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HelpSystem from '@/components/help/HelpSystem';
import { searchService, SearchResult } from '@/lib/searchService';
import { exportService, ExportOptions } from '@/lib/exportService';

export default function IntegrationPage() {
  const [activeTab, setActiveTab] = useState<'search' | 'help' | 'export' | 'api'>('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchSuggestions, setSuggestions] = useState<string[]>([]);
  const [showHelp, setShowHelp] = useState(false);
  const [exportFormat, setExportFormat] = useState<ExportOptions['format']>('pdf');
  const [exportStatus, setExportStatus] = useState<string>('');
  const [searchStats, setSearchStats] = useState<any>(null);

  // Initialize search stats
  useEffect(() => {
    setSearchStats(searchService.getSearchStats());
    setSuggestions(searchService.getSuggestions(''));
  }, []);

  // Handle search
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    const results = searchService.search(searchQuery, { limit: 10 });
    setSearchResults(results);
    
    // Update stats
    setSearchStats(searchService.getSearchStats());
  };

  // Handle search input change
  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    
    // Get suggestions
    if (value.length >= 2) {
      const suggestions = searchService.getSuggestions(value);
      setSuggestions(suggestions);
    } else {
      setSuggestions(searchService.getPopularSearches(5));
    }
  };

  // Handle export demo
  const handleExportDemo = async () => {
    setExportStatus('Generating export...');
    
    try {
      // Demo export with sample data
      const sampleContent = {
        title: 'Arizona Family Law Knowledge Base Export',
        content: {
          overview: 'This is a demonstration of the export functionality',
          sections: [
            {
              title: 'Search Integration',
              content: 'Global search across all content types'
            },
            {
              title: 'Help System',
              content: 'Contextual help with interactive guides'
            },
            {
              title: 'Export Capabilities',
              content: 'Multi-format export with metadata support'
            }
          ],
          metadata: {
            generated: new Date().toISOString(),
            source: 'Integration Testing'
          }
        },
        type: 'report' as const,
        metadata: {
          author: 'System Administrator',
          createdDate: new Date(),
          version: '1.0'
        }
      };

      await exportService.export(sampleContent, {
        format: exportFormat,
        includeMetadata: true,
        includeWatermark: true,
        watermarkText: 'DEMO',
        filename: `integration-demo-${Date.now()}`
      });

      setExportStatus('Export completed successfully!');
      setTimeout(() => setExportStatus(''), 3000);
    } catch (error) {
      setExportStatus('Export failed. Please try again.');
      setTimeout(() => setExportStatus(''), 3000);
    }
  };

  // Integration features data
  const integrationFeatures = [
    {
      id: 'search',
      title: 'Global Search',
      description: 'Unified search across all content',
      icon: <Search className="w-6 h-6" />,
      status: 'active',
      capabilities: [
        'Full-text search across pages, forms, and help',
        'Search suggestions and auto-complete',
        'Popular and recent searches tracking',
        'Advanced filtering by type and category',
        'Relevance-based result ranking'
      ]
    },
    {
      id: 'help',
      title: 'Help System',
      description: 'Context-aware help and guidance',
      icon: <HelpCircle className="w-6 h-6" />,
      status: 'active',
      capabilities: [
        'Contextual help based on current page',
        'Interactive tutorials and guides',
        'Quick actions for common tasks',
        'Categorized help topics',
        'Video tutorials integration'
      ]
    },
    {
      id: 'export',
      title: 'Document Export',
      description: 'Multi-format document generation',
      icon: <Download className="w-6 h-6" />,
      status: 'active',
      capabilities: [
        'PDF generation with watermarks',
        'Word document export',
        'Plain text and JSON formats',
        'Metadata preservation',
        'Batch export capabilities'
      ]
    },
    {
      id: 'api',
      title: 'API Integration',
      description: 'External system connectivity',
      icon: <Globe className="w-6 h-6" />,
      status: 'planned',
      capabilities: [
        'RESTful API endpoints',
        'Webhook notifications',
        'Third-party service integration',
        'Data synchronization',
        'OAuth authentication'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Integration Hub</h1>
              <p className="text-purple-100 text-lg">System integrations and advanced features</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Integration</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Feature Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {integrationFeatures.map(feature => (
              <Card 
                key={feature.id}
                className={feature.status === 'planned' ? 'opacity-60' : ''}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-purple-600">{feature.icon}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      feature.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setActiveTab('search')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'search' 
                  ? 'border-purple-600 text-purple-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Search className="w-5 h-5 inline mr-2" />
              Search
            </button>
            <button
              onClick={() => setActiveTab('help')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'help' 
                  ? 'border-purple-600 text-purple-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <HelpCircle className="w-5 h-5 inline mr-2" />
              Help System
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'export' 
                  ? 'border-purple-600 text-purple-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Download className="w-5 h-5 inline mr-2" />
              Export
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'api' 
                  ? 'border-purple-600 text-purple-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Globe className="w-5 h-5 inline mr-2" />
              API
            </button>
          </div>

          {/* Search Tab */}
          {activeTab === 'search' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Global Search Testing</h3>
                  
                  {/* Search Input */}
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Search for divorce, custody, forms..."
                        value={searchQuery}
                        onChange={(e) => handleSearchInputChange(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="flex-1 px-4 py-2 border rounded-lg"
                      />
                      <Button onClick={handleSearch}>
                        <Search className="w-4 h-4 mr-2" />
                        Search
                      </Button>
                    </div>

                    {/* Search Suggestions */}
                    {searchSuggestions.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-600">Suggestions:</span>
                        {searchSuggestions.map(suggestion => (
                          <button
                            key={suggestion}
                            onClick={() => {
                              setSearchQuery(suggestion);
                              handleSearch();
                            }}
                            className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-medium">Search Results ({searchResults.length})</h4>
                      {searchResults.map(result => (
                        <div key={result.id} className="p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link href={result.url} className="text-blue-600 hover:text-blue-800 font-medium">
                                {result.title}
                              </Link>
                              <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                              {result.highlights && result.highlights.length > 0 && (
                                <div className="mt-2 text-xs text-gray-500">
                                  {result.highlights.map((highlight, idx) => (
                                    <div key={idx} dangerouslySetInnerHTML={{ __html: highlight }} />
                                  ))}
                                </div>
                              )}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              result.type === 'page' ? 'bg-blue-100 text-blue-700' :
                              result.type === 'form' ? 'bg-green-100 text-green-700' :
                              result.type === 'calculator' ? 'bg-purple-100 text-purple-700' :
                              result.type === 'help' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {result.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Search Statistics */}
                  {searchStats && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-3">Search Statistics</h4>
                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Total Indexed:</span>
                          <span className="ml-2 font-medium">{searchStats.totalIndexed} items</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Cache Size:</span>
                          <span className="ml-2 font-medium">{searchStats.cacheSize} queries</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Recent Searches:</span>
                          <span className="ml-2 font-medium">{searchStats.recentSearches.length}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help System Tab */}
          {activeTab === 'help' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Help System Demo</h3>
                  <p className="text-gray-600 mb-6">
                    The help system provides contextual assistance throughout the application.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Context-aware help based on current page</li>
                        <li>• Interactive tutorials and step-by-step guides</li>
                        <li>• Quick action buttons for common tasks</li>
                        <li>• Searchable help topics database</li>
                        <li>• Support contact integration</li>
                      </ul>
                    </div>

                    <Button onClick={() => setShowHelp(true)}>
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Launch Help System
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Help Topics Coverage</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Getting Started</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Filing for divorce</li>
                        <li>• Understanding requirements</li>
                        <li>• Choosing the right process</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Forms & Documents</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Smart form features</li>
                        <li>• Auto-save functionality</li>
                        <li>• Document validation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Court Procedures</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Court etiquette</li>
                        <li>• Filing procedures</li>
                        <li>• Service of process</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Calculations</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Child support guidelines</li>
                        <li>• Spousal maintenance</li>
                        <li>• Property division</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Export Tab */}
          {activeTab === 'export' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Document Export Testing</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Export Format</label>
                      <select
                        value={exportFormat}
                        onChange={(e) => setExportFormat(e.target.value as ExportOptions['format'])}
                        className="px-3 py-2 border rounded-lg"
                      >
                        <option value="pdf">PDF Document</option>
                        <option value="docx">Word Document (.docx)</option>
                        <option value="txt">Plain Text</option>
                        <option value="json">JSON Data</option>
                      </select>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Export Features:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Metadata preservation (author, date, version)</li>
                        <li>• Watermark support for sensitive documents</li>
                        <li>• Custom filename generation</li>
                        <li>• Batch export capabilities</li>
                        <li>• Multiple format support</li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button onClick={handleExportDemo}>
                        <Download className="w-4 h-4 mr-2" />
                        Generate Export
                      </Button>
                      {exportStatus && (
                        <span className={`text-sm ${
                          exportStatus.includes('success') ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {exportStatus}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Export Use Cases</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <FileText className="w-8 h-8 text-blue-600 mb-2" />
                      <h4 className="font-medium">Court Documents</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Export completed forms and petitions in court-acceptable formats
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                      <h4 className="font-medium">Financial Reports</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Generate detailed financial disclosures and support calculations
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Database className="w-8 h-8 text-purple-600 mb-2" />
                      <h4 className="font-medium">Case Archives</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Create complete case file exports for record keeping
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Share2 className="w-8 h-8 text-orange-600 mb-2" />
                      <h4 className="font-medium">Information Sharing</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Share documents with attorneys or other parties securely
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* API Tab */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">API Integration - Coming Soon</h3>
                      <p className="text-gray-700 mt-2">
                        API integration features are planned for future releases. This will enable:
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-gray-600">
                        <li>• Connection to external legal databases</li>
                        <li>• Court system integration for real-time updates</li>
                        <li>• Third-party service integration (e-filing, payment processing)</li>
                        <li>• Data synchronization with case management systems</li>
                        <li>• Webhook notifications for case events</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Planned API Endpoints</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                      <span className="text-green-600">GET</span> /api/cases
                    </div>
                    <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                      <span className="text-blue-600">POST</span> /api/forms/submit
                    </div>
                    <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                      <span className="text-green-600">GET</span> /api/calculations/child-support
                    </div>
                    <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                      <span className="text-orange-600">PUT</span> {'/api/documents/{id}'}
                    </div>
                    <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                      <span className="text-blue-600">POST</span> /api/export
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Help System Modal */}
      {showHelp && (
        <HelpSystem
          contextualHelp={{ page: '/integration' }}
          onClose={() => setShowHelp(false)}
          embedded={true}
        />
      )}
    </main>
  );
}