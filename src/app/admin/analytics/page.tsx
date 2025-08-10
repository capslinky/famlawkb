'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileText, 
  Search,
  Calculator,
  Clock,
  MousePointer,
  RefreshCw
} from 'lucide-react';

interface AnalyticsData {
  pageviews: any[];
  events: any[];
  topPages: any[];
  searchQueries: any[];
  formMetrics: any[];
  userFlow: any[];
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>({
    pageviews: [],
    events: [],
    topPages: [],
    searchQueries: [],
    formMetrics: [],
    userFlow: [],
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('today');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      // Fetch pageviews
      const pageviewsRes = await fetch('/api/analytics/pageview?groupBy=path&limit=10');
      const pageviewsData = await pageviewsRes.json();

      // Fetch events
      const eventsRes = await fetch('/api/analytics/event?limit=100');
      const eventsData = await eventsRes.json();

      // Process data for dashboard
      const processedData: AnalyticsData = {
        pageviews: pageviewsData.pageviews || [],
        events: eventsData.events || [],
        topPages: pageviewsData.pageviews?.slice(0, 5) || [],
        searchQueries: eventsData.events?.filter((e: any) => e.category === 'Search') || [],
        formMetrics: eventsData.events?.filter((e: any) => e.category === 'Form') || [],
        userFlow: [],
      };

      setData(processedData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate metrics
  const totalPageviews = data.pageviews.reduce((sum, page) => sum + page.views, 0);
  const uniqueVisitors = data.pageviews.reduce((sum, page) => sum + (page.uniqueVisitors || 1), 0);
  const totalEvents = data.events.length;
  const formSubmissions = data.formMetrics.filter(e => e.action === 'Form Submit').length;
  const searchCount = data.searchQueries.length;
  const avgEngagement = data.events.filter(e => e.category === 'Engagement').length;

  if (process.env.NODE_ENV !== 'development') {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Card>
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
              <p className="text-gray-600">
                Analytics dashboard is only available in development mode.
                In production, use your configured analytics provider's dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                <p className="text-gray-600">Development Mode - Real-time Analytics</p>
              </div>
            </div>
            <Button onClick={fetchAnalyticsData} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex gap-2">
            {['today', '7days', '30days', 'all'].map(range => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range === 'today' ? 'Today' : 
                 range === '7days' ? 'Last 7 Days' :
                 range === '30days' ? 'Last 30 Days' : 'All Time'}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Metrics Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Pageviews</span>
                  </div>
                  <p className="text-2xl font-bold">{totalPageviews.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Visitors</span>
                  </div>
                  <p className="text-2xl font-bold">{uniqueVisitors.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MousePointer className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-600">Events</span>
                  </div>
                  <p className="text-2xl font-bold">{totalEvents.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-600">Forms</span>
                  </div>
                  <p className="text-2xl font-bold">{formSubmissions}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm text-gray-600">Searches</span>
                  </div>
                  <p className="text-2xl font-bold">{searchCount}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-pink-600" />
                    <span className="text-sm text-gray-600">Engagement</span>
                  </div>
                  <p className="text-2xl font-bold">{avgEngagement}</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <div className="border-b mb-6">
              <div className="flex gap-6">
                {['overview', 'pages', 'events', 'forms', 'search'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-1 capitalize font-medium transition-colors ${
                      activeTab === tab 
                        ? 'border-b-2 border-blue-600 text-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Top Pages</h3>
                    <div className="space-y-3">
                      {data.topPages.map((page, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium">{page.title || page.path}</p>
                            <p className="text-xs text-gray-500">{page.path}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold">{page.views}</p>
                            <p className="text-xs text-gray-500">{page.uniqueVisitors} visitors</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Events */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Recent Events</h3>
                    <div className="space-y-3">
                      {data.events.slice(0, 5).map((event, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium">{event.action}</p>
                            <p className="text-xs text-gray-500">{event.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">
                              {new Date(event.timestamp || event.serverTimestamp).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'pages' && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">All Pages</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Page</th>
                          <th className="text-right py-2">Views</th>
                          <th className="text-right py-2">Visitors</th>
                          <th className="text-right py-2">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.pageviews.map((page, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2">
                              <p className="font-medium">{page.title || page.path}</p>
                              <p className="text-xs text-gray-500">{page.path}</p>
                            </td>
                            <td className="text-right py-2">{page.views}</td>
                            <td className="text-right py-2">{page.uniqueVisitors}</td>
                            <td className="text-right py-2">
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                {page.category}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'events' && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Event Stream</h3>
                  <div className="space-y-2">
                    {data.events.slice(0, 20).map((event, index) => (
                      <div key={index} className="flex items-center gap-4 py-2 border-b">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{event.action}</p>
                          <p className="text-xs text-gray-500">
                            {event.category} {event.label && `- ${event.label}`}
                          </p>
                        </div>
                        {event.value !== undefined && (
                          <span className="text-sm font-semibold">{event.value}</span>
                        )}
                        <span className="text-xs text-gray-500">
                          {new Date(event.timestamp || event.serverTimestamp).toLocaleTimeString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'forms' && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Form Analytics</h3>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-3">Form Events</h4>
                      <div className="space-y-2">
                        {data.formMetrics.slice(0, 10).map((event, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{event.label}</span>
                            <span className="text-xs text-gray-500">{event.action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-3">Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Form Starts</span>
                          <span className="font-semibold">
                            {data.formMetrics.filter(e => e.action === 'Form Start').length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Completions</span>
                          <span className="font-semibold">
                            {data.formMetrics.filter(e => e.action === 'Form Submit').length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Abandons</span>
                          <span className="font-semibold">
                            {data.formMetrics.filter(e => e.action === 'Form Abandon').length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'search' && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Search Analytics</h3>
                  <div className="space-y-3">
                    {data.searchQueries.length > 0 ? (
                      data.searchQueries.map((query, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="text-sm font-medium">{query.label}</p>
                            <p className="text-xs text-gray-500">
                              {query.value} results
                            </p>
                          </div>
                          <span className="text-xs text-gray-500">
                            {new Date(query.timestamp || query.serverTimestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No search data available</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </main>
  );
}