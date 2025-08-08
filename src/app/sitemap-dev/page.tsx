import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, Clock, FileText, TrendingUp, Calendar, Rocket, DollarSign, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getAllSitemapPages, getSitemapStats, PageStatus } from '@/data/sitemapData';
import { getCategoryProgress, getMissingDeclaredPages, getUndocumentedRoutes, scanTodos } from '@/lib/devSitemap';
import { getImplementationStats, implementationData } from '@/data/implementationProgress';

interface SitemapStats {
  total: number;
  complete: number;
  partial: number;
  placeholder: number;
  planned: number;
  completionRate: number;
  weightedCompletionRate?: number;
  categories: string[];
}

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
  const stats = getSitemapStats() as SitemapStats;
  const implStats = getImplementationStats();
  const categoryProgress = getCategoryProgress();
  const undocumented = getUndocumentedRoutes();
  const missingDeclared = getMissingDeclaredPages();
  const todos = scanTodos(40);
  
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

        {/* Implementation Plan Progress */}
        <Card className="mb-8 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-8 h-8 text-purple-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Implementation Plan Progress</h2>
                <p className="text-sm text-gray-600">16-week enhancement roadmap from IMPLEMENTATION_PLAN.md</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Timeline</span>
                </div>
                <p className="text-2xl font-bold text-purple-600">Week {implementationData.currentWeek}/16</p>
                <p className="text-xs text-gray-600">{implStats.weeksRemaining} weeks remaining</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Features</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">{implStats.completedDeliverables}/{implStats.totalDeliverables}</p>
                <p className="text-xs text-gray-600">{implStats.progressPercentage}% complete</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Sprints</span>
                </div>
                <p className="text-2xl font-bold text-green-600">{implStats.completedSprints}/{implStats.totalSprints}</p>
                <p className="text-xs text-gray-600">Current: {implStats.currentSprint}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-yellow-100">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">Budget</span>
                </div>
                <p className="text-2xl font-bold text-yellow-600">${(implStats.budgetPercentage * 5408).toLocaleString()}</p>
                <p className="text-xs text-gray-600">of $540,800 total</p>
              </div>
            </div>
            
            {/* Implementation Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Implementation Progress</span>
                <span className="text-sm font-bold text-purple-600">{implStats.progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${implStats.progressPercentage}%` }}
                />
              </div>
            </div>
            
            {/* Sprint Timeline */}
            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Sprint Timeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {implementationData.sprints.slice(0, 5).map((sprint) => (
                  <div 
                    key={sprint.id}
                    className={`text-center p-2 rounded-lg border ${
                      sprint.status === 'completed' ? 'bg-green-50 border-green-200' :
                      sprint.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                      'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <p className="text-xs font-medium truncate">{sprint.name}</p>
                    <p className="text-xs text-gray-600">Wk {sprint.weekStart}-{sprint.weekEnd}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
                {implementationData.sprints.slice(5).map((sprint) => (
                  <div 
                    key={sprint.id}
                    className={`text-center p-2 rounded-lg border ${
                      sprint.status === 'completed' ? 'bg-green-50 border-green-200' :
                      sprint.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                      'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <p className="text-xs font-medium truncate">{sprint.name}</p>
                    <p className="text-xs text-gray-600">Wk {sprint.weekStart}-{sprint.weekEnd}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Links to Planning Documents */}
            <div className="flex gap-4 mt-6 pt-4 border-t">
              <a 
                href="https://github.com/capslinky/famlawkb/blob/nextjs-app/IMPLEMENTATION_PLAN.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 hover:text-purple-800 font-medium inline-flex items-center gap-1"
              >
                View Implementation Plan →
              </a>
              <a 
                href="https://github.com/capslinky/famlawkb/blob/nextjs-app/CONTENT_AUDIT_PLAN.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              >
                View Content Audit →
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Current Site Status */}
        <Card className="mb-8 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Current Site Status</h2>
                <p className="text-sm text-gray-600">Existing content completion before implementation plan</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div>
                <p className="text-4xl font-bold text-green-600">{stats.completionRate}%</p>
                <p className="text-sm text-gray-600">Pages Complete</p>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${stats.completionRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">{stats.complete} of {stats.total} pages fully developed</p>
              </div>
            </div>
          </CardContent>
        </Card>

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


        {/* Pages by Category */}
        <div className="space-y-8">
          {/* Category Progress Overview */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Category Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryProgress.map(cat => (
                  <div key={cat.category} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{cat.category}</div>
                      <div className="text-sm text-gray-600">{cat.complete}/{cat.total} complete</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${cat.completionRate}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-600 flex gap-3">
                      <span>Partial: {cat.partial}</span>
                      <span>Placeholder: {cat.placeholder}</span>
                      <span>Planned: {cat.planned}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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

        {/* Cross-Checks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Undocumented Routes (in filesystem, not in sitemapData)</h3>
              {undocumented.length === 0 ? (
                <p className="text-sm text-green-700">No undocumented routes found. ✅</p>
              ) : (
                <ul className="space-y-2">
                  {undocumented.map(r => (
                    <li key={r.path} className="text-sm flex items-center justify-between">
                      <code className="bg-gray-100 px-2 py-1 rounded">{r.path}</code>
                      <span className="text-gray-500 truncate ml-2">{r.file.replace(process.cwd() + '/', '')}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Declared But Missing (in sitemapData, not in filesystem)</h3>
              {missingDeclared.length === 0 ? (
                <p className="text-sm text-green-700">All declared pages exist in the filesystem. ✅</p>
              ) : (
                <ul className="space-y-2">
                  {missingDeclared.map(p => (
                    <li key={p.path} className="text-sm flex items-center gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">{p.path}</code>
                      <span className="text-gray-600">{p.title}</span>
                      <StatusBadge status={p.status} />
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>

        {/* TODO / FIXME Scanner */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">TODO and FIXME Findings</h3>
            {todos.length === 0 ? (
              <p className="text-sm text-gray-600">No TODO/FIXME notes detected under <code>src/</code>.</p>
            ) : (
              <div className="overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-600">
                      <th className="py-2 pr-4">File</th>
                      <th className="py-2 pr-4">Line</th>
                      <th className="py-2 pr-4">Type</th>
                      <th className="py-2">Snippet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map((t, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="py-2 pr-4 font-mono text-xs">{t.file}</td>
                        <td className="py-2 pr-4">{t.line}</td>
                        <td className="py-2 pr-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            t.kind === 'FIXME' ? 'bg-red-100 text-red-800' :
                            t.kind === 'TODO' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>{t.kind}</span>
                        </td>
                        <td className="py-2 whitespace-pre-wrap">{t.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

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
