'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket, CheckCircle, XCircle, AlertTriangle, Activity, Shield, Globe, Smartphone, BarChart3, FileCheck, Code, Users, Clock, TrendingUp, Zap, Eye, Download, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { performanceMonitor, PerformanceReport } from '@/lib/performanceMonitor';
import { accessibilityChecker, AccessibilityReport } from '@/lib/accessibilityChecker';
import { mobileOptimization, DeviceInfo, ViewportInfo } from '@/lib/mobileOptimization';

export default function LaunchDashboard() {
  const [activeTab, setActiveTab] = useState<'readiness' | 'performance' | 'accessibility' | 'mobile'>('readiness');
  const [performanceReport, setPerformanceReport] = useState<PerformanceReport | null>(null);
  const [accessibilityReport, setAccessibilityReport] = useState<AccessibilityReport | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [viewportInfo, setViewportInfo] = useState<ViewportInfo | null>(null);
  const [isRunningTests, setIsRunningTests] = useState(false);

  // Initialize monitoring
  useEffect(() => {
    // Get initial device and viewport info
    setDeviceInfo(mobileOptimization.getDeviceInfo());
    setViewportInfo(mobileOptimization.getViewportInfo());

    // Update viewport on resize
    const handleResize = () => {
      setViewportInfo(mobileOptimization.getViewportInfo());
    };
    window.addEventListener('resize', handleResize);

    // Start performance monitoring
    performanceMonitor.mark('launch-page-start');

    return () => {
      window.removeEventListener('resize', handleResize);
      performanceMonitor.measure('launch-page-duration', 'launch-page-start');
    };
  }, []);

  // Run all tests
  const runAllTests = async () => {
    setIsRunningTests(true);

    // Run performance test
    const perfReport = performanceMonitor.generateReport();
    setPerformanceReport(perfReport);

    // Run accessibility test
    const a11yReport = accessibilityChecker.runFullCheck();
    setAccessibilityReport(a11yReport);

    setIsRunningTests(false);
  };

  // Launch readiness checklist
  const launchChecklist = [
    {
      category: 'Core Features',
      items: [
        { name: 'Assessment Tool', status: 'complete', priority: 'critical' },
        { name: 'Calculator Suite', status: 'complete', priority: 'critical' },
        { name: 'Smart Forms', status: 'complete', priority: 'critical' },
        { name: 'Court Procedures Guide', status: 'complete', priority: 'high' },
        { name: 'Resource Library', status: 'complete', priority: 'high' },
        { name: 'Emergency Help', status: 'complete', priority: 'critical' }
      ]
    },
    {
      category: 'Content & Legal',
      items: [
        { name: 'Legal Content Review', status: 'complete', priority: 'critical' },
        { name: 'Disclaimer Pages', status: 'complete', priority: 'critical' },
        { name: 'Privacy Policy', status: 'pending', priority: 'critical' },
        { name: 'Terms of Service', status: 'pending', priority: 'critical' },
        { name: 'Copyright Notices', status: 'complete', priority: 'high' },
        { name: 'Attorney Review', status: 'pending', priority: 'critical' }
      ]
    },
    {
      category: 'Technical',
      items: [
        { name: 'Performance Optimization', status: 'complete', priority: 'high' },
        { name: 'Mobile Responsiveness', status: 'complete', priority: 'critical' },
        { name: 'Browser Compatibility', status: 'testing', priority: 'high' },
        { name: 'SSL Certificate', status: 'pending', priority: 'critical' },
        { name: 'CDN Setup', status: 'pending', priority: 'medium' },
        { name: 'Error Monitoring', status: 'testing', priority: 'high' }
      ]
    },
    {
      category: 'Accessibility',
      items: [
        { name: 'WCAG 2.1 Level A', status: 'testing', priority: 'critical' },
        { name: 'WCAG 2.1 Level AA', status: 'testing', priority: 'high' },
        { name: 'Screen Reader Testing', status: 'testing', priority: 'high' },
        { name: 'Keyboard Navigation', status: 'complete', priority: 'critical' },
        { name: 'Color Contrast', status: 'testing', priority: 'high' },
        { name: 'Alt Text & ARIA', status: 'complete', priority: 'critical' }
      ]
    },
    {
      category: 'Security',
      items: [
        { name: 'Security Audit', status: 'pending', priority: 'critical' },
        { name: 'Data Encryption', status: 'testing', priority: 'critical' },
        { name: 'Input Validation', status: 'complete', priority: 'critical' },
        { name: 'XSS Protection', status: 'complete', priority: 'critical' },
        { name: 'CSRF Protection', status: 'complete', priority: 'critical' },
        { name: 'Rate Limiting', status: 'pending', priority: 'high' }
      ]
    },
    {
      category: 'Deployment',
      items: [
        { name: 'Production Environment', status: 'pending', priority: 'critical' },
        { name: 'Database Backup', status: 'pending', priority: 'critical' },
        { name: 'Monitoring Setup', status: 'testing', priority: 'high' },
        { name: 'Rollback Plan', status: 'complete', priority: 'critical' },
        { name: 'Load Testing', status: 'pending', priority: 'high' },
        { name: 'Documentation', status: 'complete', priority: 'medium' }
      ]
    }
  ];

  // Calculate readiness scores
  const calculateReadiness = () => {
    let totalItems = 0;
    let completedItems = 0;
    let criticalComplete = 0;
    let criticalTotal = 0;

    launchChecklist.forEach(category => {
      category.items.forEach(item => {
        totalItems++;
        if (item.status === 'complete') {
          completedItems++;
          if (item.priority === 'critical') {
            criticalComplete++;
          }
        }
        if (item.priority === 'critical') {
          criticalTotal++;
        }
      });
    });

    return {
      overall: Math.round((completedItems / totalItems) * 100),
      critical: Math.round((criticalComplete / criticalTotal) * 100),
      completed: completedItems,
      total: totalItems,
      criticalCompleted: criticalComplete,
      criticalTotal: criticalTotal
    };
  };

  const readiness = calculateReadiness();

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'testing':
        return <Activity className="w-5 h-5 text-yellow-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-gray-400" />;
      default:
        return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-red-600 bg-red-100';
      case 'high':
        return 'text-orange-600 bg-orange-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Launch Dashboard</h1>
              <p className="text-indigo-100 text-lg">Production readiness and monitoring</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm">Overall Readiness</p>
                  <p className="text-3xl font-bold">{readiness.overall}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-indigo-200" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm">Critical Items</p>
                  <p className="text-3xl font-bold">{readiness.critical}%</p>
                </div>
                <Shield className="w-8 h-8 text-indigo-200" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm">Performance Score</p>
                  <p className="text-3xl font-bold">{performanceReport?.score || '--'}</p>
                </div>
                <Zap className="w-8 h-8 text-indigo-200" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm">Accessibility Score</p>
                  <p className="text-3xl font-bold">{accessibilityReport?.score || '--'}</p>
                </div>
                <Eye className="w-8 h-8 text-indigo-200" />
              </div>
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
            <span className="text-gray-600">Launch Dashboard</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Test Controls */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Automated Testing Suite</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Run comprehensive tests to check launch readiness
                  </p>
                </div>
                <Button 
                  onClick={runAllTests}
                  disabled={isRunningTests}
                >
                  {isRunningTests ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Running Tests...
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4 mr-2" />
                      Run All Tests
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setActiveTab('readiness')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'readiness' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileCheck className="w-5 h-5 inline mr-2" />
              Readiness Checklist
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'performance' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Performance
            </button>
            <button
              onClick={() => setActiveTab('accessibility')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'accessibility' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="w-5 h-5 inline mr-2" />
              Accessibility
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'mobile' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-5 h-5 inline mr-2" />
              Mobile
            </button>
          </div>

          {/* Readiness Tab */}
          {activeTab === 'readiness' && (
            <div className="space-y-6">
              {/* Progress Overview */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Launch Readiness Overview</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm text-gray-600">
                          {readiness.completed} of {readiness.total} items
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-indigo-600 h-3 rounded-full transition-all"
                          style={{ width: `${readiness.overall}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Critical Items</span>
                        <span className="text-sm text-gray-600">
                          {readiness.criticalCompleted} of {readiness.criticalTotal} items
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all ${
                            readiness.critical === 100 ? 'bg-green-600' : 
                            readiness.critical >= 80 ? 'bg-yellow-600' : 'bg-red-600'
                          }`}
                          style={{ width: `${readiness.critical}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`mt-4 p-3 rounded-lg ${
                    readiness.critical === 100 ? 'bg-green-100 text-green-800' :
                    readiness.critical >= 80 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {readiness.critical === 100 ? (
                      <p className="font-medium">✓ All critical items complete - Ready for launch!</p>
                    ) : readiness.critical >= 80 ? (
                      <p className="font-medium">⚠ Almost ready - Complete remaining critical items</p>
                    ) : (
                      <p className="font-medium">✗ Not ready - Critical items need completion</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Checklist Categories */}
              {launchChecklist.map(category => (
                <Card key={category.category}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">{category.category}</h3>
                    <div className="space-y-2">
                      {category.items.map(item => (
                        <div key={item.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(item.status)}
                            <span className={item.status === 'complete' ? 'line-through text-gray-500' : ''}>
                              {item.name}
                            </span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="space-y-6">
              {performanceReport ? (
                <>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                      
                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-indigo-600">
                            {performanceReport.summary.pageLoadTime}ms
                          </p>
                          <p className="text-sm text-gray-600">Page Load Time</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-green-600">
                            {performanceReport.summary.firstContentfulPaint}ms
                          </p>
                          <p className="text-sm text-gray-600">First Contentful Paint</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-yellow-600">
                            {performanceReport.summary.largestContentfulPaint}ms
                          </p>
                          <p className="text-sm text-gray-600">Largest Contentful Paint</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-purple-600">
                            {performanceReport.summary.cumulativeLayoutShift.toFixed(3)}
                          </p>
                          <p className="text-sm text-gray-600">Cumulative Layout Shift</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Performance Score</h4>
                        <div className="flex items-center gap-4">
                          <div className="text-4xl font-bold">
                            <span className={
                              performanceReport.score >= 90 ? 'text-green-600' :
                              performanceReport.score >= 50 ? 'text-yellow-600' :
                              'text-red-600'
                            }>
                              {performanceReport.score}
                            </span>
                            <span className="text-gray-400 text-2xl">/100</span>
                          </div>
                          <div className="flex-1">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                              <div 
                                className={`h-4 rounded-full transition-all ${
                                  performanceReport.score >= 90 ? 'bg-green-600' :
                                  performanceReport.score >= 50 ? 'bg-yellow-600' :
                                  'bg-red-600'
                                }`}
                                style={{ width: `${performanceReport.score}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {performanceReport.recommendations.length > 0 && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Performance Recommendations</h3>
                        <ul className="space-y-2">
                          {performanceReport.recommendations.map((rec, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Run tests to see performance metrics</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Accessibility Tab */}
          {activeTab === 'accessibility' && (
            <div className="space-y-6">
              {accessibilityReport ? (
                <>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Accessibility Report</h3>
                      
                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-red-600">
                            {accessibilityReport.summary.criticalIssues}
                          </p>
                          <p className="text-sm text-gray-600">Critical Issues</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-orange-600">
                            {accessibilityReport.summary.seriousIssues}
                          </p>
                          <p className="text-sm text-gray-600">Serious Issues</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-yellow-600">
                            {accessibilityReport.summary.moderateIssues}
                          </p>
                          <p className="text-sm text-gray-600">Moderate Issues</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-gray-600">
                            {accessibilityReport.summary.minorIssues}
                          </p>
                          <p className="text-sm text-gray-600">Minor Issues</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium mb-2">WCAG Compliance</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Level A</span>
                            {accessibilityReport.wcagCompliance.levelA ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Level AA</span>
                            {accessibilityReport.wcagCompliance.levelAA ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Level AAA</span>
                            {accessibilityReport.wcagCompliance.levelAAA ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {accessibilityReport.recommendations.length > 0 && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Accessibility Recommendations</h3>
                        <ul className="space-y-2">
                          {accessibilityReport.recommendations.map((rec, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Run tests to see accessibility report</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Mobile Tab */}
          {activeTab === 'mobile' && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Device Information</h3>
                  
                  {deviceInfo && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Device</h4>
                        <dl className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Type:</dt>
                            <dd className="font-medium">{deviceInfo.type}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">OS:</dt>
                            <dd className="font-medium">{deviceInfo.os}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Browser:</dt>
                            <dd className="font-medium">{deviceInfo.browser}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Touch Enabled:</dt>
                            <dd className="font-medium">{deviceInfo.touchEnabled ? 'Yes' : 'No'}</dd>
                          </div>
                        </dl>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Screen</h4>
                        <dl className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Resolution:</dt>
                            <dd className="font-medium">{deviceInfo.screenWidth} × {deviceInfo.screenHeight}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Pixel Ratio:</dt>
                            <dd className="font-medium">{deviceInfo.pixelRatio}x</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-600">Orientation:</dt>
                            <dd className="font-medium">{deviceInfo.orientation}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Viewport Information</h3>
                  
                  {viewportInfo && (
                    <div>
                      <div className="grid sm:grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{viewportInfo.width}px</p>
                          <p className="text-sm text-gray-600">Width</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{viewportInfo.height}px</p>
                          <p className="text-sm text-gray-600">Height</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{viewportInfo.breakpoint}</p>
                          <p className="text-sm text-gray-600">Breakpoint</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          viewportInfo.isMobile ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          Mobile
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          viewportInfo.isTablet ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          Tablet
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          viewportInfo.isDesktop ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          Desktop
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Mobile Optimization Status</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Responsive Design</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Touch Gestures</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Viewport Meta Tag</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Mobile-First CSS</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Lazy Loading</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Offline Support</span>
                      <Activity className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}