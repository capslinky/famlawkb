'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, XCircle, AlertTriangle, BarChart3, Download, RefreshCw, Eye, Filter, TrendingUp, Clock, AlertCircle, ChevronRight, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { contentAuditService, AuditReport, ContentAuditResult, ContentPage } from '@/lib/contentAudit';

export default function ContentAuditDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'issues' | 'actions'>('overview');
  const [auditReport, setAuditReport] = useState<AuditReport | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);

  // Run content audit
  const runContentAudit = async () => {
    setIsRunningAudit(true);
    setAuditProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setAuditProgress(prev => Math.min(prev + 10, 90));
    }, 200);

    try {
      const report = await contentAuditService.runFullAudit();
      setAuditReport(report);
      setAuditProgress(100);
    } catch (error) {
      console.error('Audit failed:', error);
    } finally {
      clearInterval(progressInterval);
      setIsRunningAudit(false);
    }
  };

  // Filter results
  const getFilteredResults = (): ContentAuditResult[] => {
    if (!auditReport) return [];
    
    let results = [...auditReport.results];

    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(r => {
        // Match category from inventory (would need to implement)
        return true; // Simplified
      });
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      results = results.filter(r => r.status === selectedStatus);
    }

    // Filter by search
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      results = results.filter(r => 
        r.path.toLowerCase().includes(search) ||
        r.pageId.toLowerCase().includes(search)
      );
    }

    return results;
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'text-green-600 bg-green-100';
      case 'needs-improvement':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600';
      case 'major':
        return 'text-orange-600';
      case 'minor':
        return 'text-yellow-600';
      case 'suggestion':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority: string) => {
    const colors = {
      immediate: 'bg-red-100 text-red-700',
      high: 'bg-orange-100 text-orange-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-gray-100 text-gray-700'
    };
    return colors[priority as keyof typeof colors] || colors.low;
  };

  // Export report
  const exportReport = (format: 'json' | 'csv' | 'html') => {
    if (!auditReport) return;
    
    const exportData = contentAuditService.exportReport(auditReport, format);
    const blob = new Blob([exportData], { 
      type: format === 'json' ? 'application/json' : 
            format === 'csv' ? 'text/csv' : 
            'text/html' 
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `content-audit-${new Date().toISOString().split('T')[0]}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filteredResults = getFilteredResults();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Content Audit Dashboard</h1>
              <p className="text-purple-100 text-lg">Comprehensive content quality assurance</p>
            </div>
          </div>

          {/* Quick Stats */}
          {auditReport && (
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-purple-100 text-sm">Total Pages</p>
                <p className="text-2xl font-bold">{auditReport.summary.totalPages}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-purple-100 text-sm">Average Score</p>
                <p className="text-2xl font-bold">{auditReport.summary.averageScore.toFixed(1)}%</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-purple-100 text-sm">Passed</p>
                <p className="text-2xl font-bold text-green-300">{auditReport.summary.passedPages}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-purple-100 text-sm">Need Work</p>
                <p className="text-2xl font-bold text-yellow-300">{auditReport.summary.needsImprovementPages}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-purple-100 text-sm">Critical Issues</p>
                <p className="text-2xl font-bold text-red-300">{auditReport.summary.criticalIssues}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Content Audit</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Audit Controls */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Content Quality Audit</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Analyze all pages for legal accuracy, completeness, UX, and accessibility
                  </p>
                </div>
                <div className="flex gap-3">
                  {auditReport && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => exportReport('html')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        HTML
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => exportReport('csv')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        CSV
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => exportReport('json')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        JSON
                      </Button>
                    </div>
                  )}
                  <Button 
                    onClick={runContentAudit}
                    disabled={isRunningAudit}
                  >
                    {isRunningAudit ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Auditing... {auditProgress}%
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Run Audit
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {isRunningAudit && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all"
                      style={{ width: `${auditProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {auditReport ? (
            <>
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'overview' 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <TrendingUp className="w-5 h-5 inline mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'details' 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FileText className="w-5 h-5 inline mr-2" />
                  Page Details
                </button>
                <button
                  onClick={() => setActiveTab('issues')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'issues' 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  Issues ({auditReport.summary.totalIssues})
                </button>
                <button
                  onClick={() => setActiveTab('actions')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'actions' 
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Action Items
                </button>
              </div>

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Category Breakdown */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Performance by Category</h3>
                      <div className="space-y-4">
                        {Array.from(auditReport.byCategory.entries()).map(([category, summary]) => (
                          <div key={category}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium capitalize">{category}</span>
                                <span className="text-sm text-gray-500">({summary.pageCount} pages)</span>
                              </div>
                              <span className={`text-sm px-2 py-1 rounded-full ${
                                summary.status === 'good' ? 'bg-green-100 text-green-700' :
                                summary.status === 'needs-attention' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {summary.averageScore.toFixed(1)}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all ${
                                  summary.status === 'good' ? 'bg-green-600' :
                                  summary.status === 'needs-attention' ? 'bg-yellow-600' :
                                  'bg-red-600'
                                }`}
                                style={{ width: `${summary.averageScore}%` }}
                              />
                            </div>
                            {summary.commonIssues.length > 0 && (
                              <div className="mt-2 text-sm text-gray-600">
                                Common issues: {summary.commonIssues.slice(0, 2).join(', ')}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Audit Criteria Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Audit Criteria Summary</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-indigo-600">
                            {auditReport.results.filter(r => 
                              r.criteria.legalAccuracy.statutes && 
                              r.criteria.legalAccuracy.disclaimers
                            ).length}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Legal Compliant</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">
                            {auditReport.results.filter(r => 
                              r.criteria.completeness.mainContent && 
                              r.criteria.completeness.nextSteps
                            ).length}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Complete Content</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">
                            {auditReport.results.filter(r => 
                              r.criteria.userExperience.clarity && 
                              r.criteria.userExperience.actionability
                            ).length}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Good UX</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600">
                            {auditReport.results.filter(r => 
                              r.criteria.technical.seoOptimized
                            ).length}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">SEO Optimized</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-yellow-600">
                            {auditReport.results.filter(r => 
                              r.criteria.accessibility.wcagCompliant
                            ).length}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">WCAG Compliant</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Details Tab */}
              {activeTab === 'details' && (
                <div className="space-y-4">
                  {/* Filters */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Search pages..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                        </div>
                        <select
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className="px-3 py-2 border rounded-lg"
                        >
                          <option value="all">All Status</option>
                          <option value="passed">Passed</option>
                          <option value="needs-improvement">Needs Improvement</option>
                          <option value="failed">Failed</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results Table */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Page</th>
                              <th className="text-center py-2">Score</th>
                              <th className="text-center py-2">Status</th>
                              <th className="text-center py-2">Issues</th>
                              <th className="text-left py-2">Top Recommendation</th>
                              <th className="text-center py-2">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredResults.map(result => (
                              <tr key={result.pageId} className="border-b hover:bg-gray-50">
                                <td className="py-3">
                                  <div>
                                    <p className="font-medium">{result.pageId}</p>
                                    <p className="text-sm text-gray-500">{result.path}</p>
                                  </div>
                                </td>
                                <td className="text-center">
                                  <span className={`font-bold ${
                                    result.score >= 80 ? 'text-green-600' :
                                    result.score >= 60 ? 'text-yellow-600' :
                                    'text-red-600'
                                  }`}>
                                    {result.score}%
                                  </span>
                                </td>
                                <td className="text-center">
                                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(result.status)}`}>
                                    {result.status}
                                  </span>
                                </td>
                                <td className="text-center">
                                  <div className="flex items-center justify-center gap-2">
                                    {result.issues.filter(i => i.severity === 'critical').length > 0 && (
                                      <span className="text-xs text-red-600">
                                        {result.issues.filter(i => i.severity === 'critical').length} critical
                                      </span>
                                    )}
                                    <span className="text-xs text-gray-600">
                                      {result.issues.length} total
                                    </span>
                                  </div>
                                </td>
                                <td className="text-sm">
                                  {result.recommendations[0] || 'No recommendations'}
                                </td>
                                <td className="text-center">
                                  <Link
                                    href={result.path}
                                    className="text-blue-600 hover:text-blue-800"
                                  >
                                    <Eye className="w-4 h-4 inline" />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Issues Tab */}
              {activeTab === 'issues' && (
                <div className="space-y-4">
                  {/* Issue Summary */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-red-600">
                          {auditReport.results.reduce((sum, r) => 
                            sum + r.issues.filter(i => i.severity === 'critical').length, 0
                          )}
                        </p>
                        <p className="text-sm text-gray-600">Critical Issues</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-orange-600">
                          {auditReport.results.reduce((sum, r) => 
                            sum + r.issues.filter(i => i.severity === 'major').length, 0
                          )}
                        </p>
                        <p className="text-sm text-gray-600">Major Issues</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-yellow-600">
                          {auditReport.results.reduce((sum, r) => 
                            sum + r.issues.filter(i => i.severity === 'minor').length, 0
                          )}
                        </p>
                        <p className="text-sm text-gray-600">Minor Issues</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-blue-600">
                          {auditReport.results.reduce((sum, r) => 
                            sum + r.issues.filter(i => i.severity === 'suggestion').length, 0
                          )}
                        </p>
                        <p className="text-sm text-gray-600">Suggestions</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Issues List */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">All Issues</h3>
                      <div className="space-y-3">
                        {auditReport.results.flatMap(result => 
                          result.issues.map(issue => ({
                            ...issue,
                            pageId: result.pageId,
                            path: result.path
                          }))
                        )
                        .sort((a, b) => {
                          const severityOrder = { critical: 0, major: 1, minor: 2, suggestion: 3 };
                          return severityOrder[a.severity as keyof typeof severityOrder] - 
                                 severityOrder[b.severity as keyof typeof severityOrder];
                        })
                        .slice(0, 20)
                        .map((issue, idx) => (
                          <div key={idx} className="p-3 border rounded-lg">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-sm font-medium ${getSeverityColor(issue.severity)}`}>
                                    [{issue.severity.toUpperCase()}]
                                  </span>
                                  <span className="text-sm text-gray-600">{issue.category}</span>
                                </div>
                                <p className="font-medium">{issue.description}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                  Recommendation: {issue.recommendation}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Page: {issue.pageId} ({issue.path})
                                </p>
                              </div>
                              <Link
                                href={issue.path}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Actions Tab */}
              {activeTab === 'actions' && (
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Prioritized Action Items</h3>
                      <div className="space-y-3">
                        {auditReport.prioritizedActions.map((action, idx) => (
                          <div key={idx} className="p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityBadge(action.priority)}`}>
                                    {action.priority.toUpperCase()}
                                  </span>
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">{action.estimatedTime}</span>
                                </div>
                                <h4 className="font-medium">{action.page}</h4>
                                <p className="text-gray-700 mt-1">{action.action}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                  <strong>Impact:</strong> {action.impact}
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                Start
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">No Audit Data</h3>
                <p className="text-gray-600 mb-4">
                  Run a content audit to analyze all pages for quality and compliance
                </p>
                <Button onClick={runContentAudit}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Start Content Audit
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}