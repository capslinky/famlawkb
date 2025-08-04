import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, Clock, FileText, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getAllSitemapPages, getSitemapStats, PageStatus } from '@/data/sitemapData';

const StatusIcon = ({ status }: { status: PageStatus }) => {
  switch (status) {
    case 'complete':
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case 'partial':
      return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    case 'placeholder':
      return <Clock className="w-4 h-4 text-orange-600" />;
    case 'planned':
      return <FileText className="w-4 h-4 text-gray-400" />;
  }
};

const StatusBadge = ({ status }: { status: PageStatus }) => {
  const colors = {
    complete: 'bg-green-100 text-green-800',
    partial: 'bg-yellow-100 text-yellow-800',
    placeholder: 'bg-orange-100 text-orange-800',
    planned: 'bg-gray-100 text-gray-600'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      <StatusIcon status={status} />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const PriorityBadge = ({ priority }: { priority: 'high' | 'medium' | 'low' }) => {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-blue-100 text-blue-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${colors[priority]}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
};

export const metadata = {
  title: 'Developer Sitemap - Arizona Family Law Guide',
  description: 'Development progress tracking for all pages and content areas',
};

export default function DeveloperSitemapPage() {
  const allPages = getAllSitemapPages();
  const stats = getSitemapStats();
  
  // Group pages by category
  const pagesByCategory = allPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, typeof allPages>);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold">Developer Sitemap</h1>
            <span className="text-sm text-gray-500">Development Progress Tracker</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Pages</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.complete}</div>
              <div className="text-sm text-gray-600">Complete</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.partial}</div>
              <div className="text-sm text-gray-600">Partial</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.placeholder}</div>
              <div className="text-sm text-gray-600">Placeholder</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-600">{stats.planned}</div>
              <div className="text-sm text-gray-600">Planned</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Overall Progress</h2>
              <span className="text-2xl font-bold text-blue-600">{stats.completionRate}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${stats.completionRate}%` }}
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Complete: {stats.complete}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span>Partial: {stats.partial}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span>Placeholder: {stats.placeholder}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                <span>Planned: {stats.planned}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pages by Category */}
        <div className="space-y-8">
          {Object.entries(pagesByCategory).map(([category, pages]) => (
            <Card key={category}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  {category}
                  <span className="text-sm text-gray-500 font-normal">({pages.length} pages)</span>
                </h2>
                
                <div className="space-y-3">
                  {pages.map((page) => (
                    <div key={page.path} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {page.status !== 'planned' ? (
                              <Link 
                                href={page.path} 
                                className="text-blue-600 hover:text-blue-800 font-medium underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {page.title}
                              </Link>
                            ) : (
                              <span className="font-medium text-gray-700">{page.title}</span>
                            )}
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                              {page.path}
                            </code>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                          
                          {page.notes && (
                            <p className="text-xs text-gray-500 italic">
                              <strong>Notes:</strong> {page.notes}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 ml-4">
                          <StatusBadge status={page.status} />
                          <PriorityBadge priority={page.priority} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Status Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <div>
                  <div className="font-medium">Complete</div>
                  <div className="text-gray-600">Fully built with comprehensive content</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <div>
                  <div className="font-medium">Partial</div>
                  <div className="text-gray-600">Page exists but needs more content</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <div>
                  <div className="font-medium">Placeholder</div>
                  <div className="text-gray-600">Basic page structure, minimal content</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <div>
                  <div className="font-medium">Planned</div>
                  <div className="text-gray-600">Not yet built, identified as needed</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}