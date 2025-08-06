// Performance Monitoring Service
// Tracks application performance metrics and provides insights

export interface PerformanceMetric {
  id: string;
  type: 'navigation' | 'resource' | 'paint' | 'measure' | 'custom';
  name: string;
  value: number;
  unit: 'ms' | 'kb' | 'count' | 'percentage';
  timestamp: Date;
  metadata?: {
    page?: string;
    userAgent?: string;
    connectionType?: string;
    deviceMemory?: number;
    hardwareConcurrency?: number;
  };
}

export interface PerformanceReport {
  metrics: PerformanceMetric[];
  summary: {
    pageLoadTime: number;
    timeToFirstByte: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
    totalBlockingTime: number;
    timeToInteractive: number;
  };
  recommendations: string[];
  score: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: Map<string, PerformanceObserver> = new Map();
  private isMonitoring: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }

  private initializeMonitoring(): void {
    // Check for Performance API support
    if (!('performance' in window) || !('PerformanceObserver' in window)) {
      console.warn('Performance API not supported');
      return;
    }

    this.setupNavigationObserver();
    this.setupPaintObserver();
    this.setupLayoutShiftObserver();
    this.setupLongTaskObserver();
    this.setupResourceObserver();
  }

  // Setup navigation timing observer
  private setupNavigationObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          
          this.recordMetric({
            id: `nav-${Date.now()}`,
            type: 'navigation',
            name: 'Page Load Time',
            value: navEntry.loadEventEnd - navEntry.fetchStart,
            unit: 'ms',
            timestamp: new Date()
          });

          this.recordMetric({
            id: `ttfb-${Date.now()}`,
            type: 'navigation',
            name: 'Time to First Byte',
            value: navEntry.responseStart - navEntry.fetchStart,
            unit: 'ms',
            timestamp: new Date()
          });

          this.recordMetric({
            id: `dom-${Date.now()}`,
            type: 'navigation',
            name: 'DOM Content Loaded',
            value: navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
            unit: 'ms',
            timestamp: new Date()
          });
        }
      });

      observer.observe({ type: 'navigation', buffered: true });
      this.observers.set('navigation', observer);
    } catch (e) {
      console.error('Failed to setup navigation observer:', e);
    }
  }

  // Setup paint timing observer
  private setupPaintObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric({
            id: `paint-${Date.now()}`,
            type: 'paint',
            name: entry.name,
            value: entry.startTime,
            unit: 'ms',
            timestamp: new Date()
          });
        }
      });

      observer.observe({ type: 'paint', buffered: true });
      this.observers.set('paint', observer);
    } catch (e) {
      console.error('Failed to setup paint observer:', e);
    }
  }

  // Setup layout shift observer
  private setupLayoutShiftObserver(): void {
    try {
      let cumulativeScore = 0;
      
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShift = entry as any;
          if (!layoutShift.hadRecentInput) {
            cumulativeScore += layoutShift.value;
            
            this.recordMetric({
              id: `cls-${Date.now()}`,
              type: 'custom',
              name: 'Cumulative Layout Shift',
              value: cumulativeScore,
              unit: 'count',
              timestamp: new Date()
            });
          }
        }
      });

      observer.observe({ type: 'layout-shift', buffered: true });
      this.observers.set('layout-shift', observer);
    } catch (e) {
      console.error('Failed to setup layout shift observer:', e);
    }
  }

  // Setup long task observer
  private setupLongTaskObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric({
            id: `longtask-${Date.now()}`,
            type: 'custom',
            name: 'Long Task',
            value: entry.duration,
            unit: 'ms',
            timestamp: new Date()
          });
        }
      });

      observer.observe({ type: 'longtask', buffered: true });
      this.observers.set('longtask', observer);
    } catch (e) {
      console.error('Failed to setup long task observer:', e);
    }
  }

  // Setup resource timing observer
  private setupResourceObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resource = entry as PerformanceResourceTiming;
          
          // Only track significant resources
          if (resource.duration > 100) {
            this.recordMetric({
              id: `resource-${Date.now()}`,
              type: 'resource',
              name: resource.name.split('/').pop() || 'unknown',
              value: resource.duration,
              unit: 'ms',
              timestamp: new Date()
            });
          }
        }
      });

      observer.observe({ type: 'resource', buffered: true });
      this.observers.set('resource', observer);
    } catch (e) {
      console.error('Failed to setup resource observer:', e);
    }
  }

  // Record a performance metric
  recordMetric(metric: PerformanceMetric): void {
    // Add metadata
    if (typeof window !== 'undefined') {
      metric.metadata = {
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        connectionType: (navigator as any).connection?.effectiveType,
        deviceMemory: (navigator as any).deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency
      };
    }

    this.metrics.push(metric);

    // Limit stored metrics
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-500);
    }
  }

  // Mark a custom timing
  mark(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  }

  // Measure between two marks
  measure(name: string, startMark: string, endMark?: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const measure = endMark 
          ? performance.measure(name, startMark, endMark)
          : performance.measure(name, startMark);
        
        this.recordMetric({
          id: `measure-${Date.now()}`,
          type: 'measure',
          name,
          value: measure.duration,
          unit: 'ms',
          timestamp: new Date()
        });
      } catch (e) {
        console.error('Failed to measure:', e);
      }
    }
  }

  // Get Core Web Vitals
  getCoreWebVitals(): {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  } {
    const vitals: any = {};

    // Get LCP (Largest Contentful Paint)
    const lcpMetric = this.metrics
      .filter(m => m.name === 'largest-contentful-paint')
      .sort((a, b) => b.value - a.value)[0];
    if (lcpMetric) vitals.lcp = lcpMetric.value;

    // Get FCP (First Contentful Paint)
    const fcpMetric = this.metrics
      .find(m => m.name === 'first-contentful-paint');
    if (fcpMetric) vitals.fcp = fcpMetric.value;

    // Get CLS (Cumulative Layout Shift)
    const clsMetric = this.metrics
      .filter(m => m.name === 'Cumulative Layout Shift')
      .sort((a, b) => b.value - a.value)[0];
    if (clsMetric) vitals.cls = clsMetric.value;

    // Get TTFB (Time to First Byte)
    const ttfbMetric = this.metrics
      .find(m => m.name === 'Time to First Byte');
    if (ttfbMetric) vitals.ttfb = ttfbMetric.value;

    return vitals;
  }

  // Generate performance report
  generateReport(): PerformanceReport {
    const vitals = this.getCoreWebVitals();
    const pageLoadMetric = this.metrics.find(m => m.name === 'Page Load Time');
    const domMetric = this.metrics.find(m => m.name === 'DOM Content Loaded');

    const summary = {
      pageLoadTime: pageLoadMetric?.value || 0,
      timeToFirstByte: vitals.ttfb || 0,
      firstContentfulPaint: vitals.fcp || 0,
      largestContentfulPaint: vitals.lcp || 0,
      firstInputDelay: vitals.fid || 0,
      cumulativeLayoutShift: vitals.cls || 0,
      totalBlockingTime: this.calculateTotalBlockingTime(),
      timeToInteractive: domMetric?.value || 0
    };

    const recommendations = this.generateRecommendations(summary);
    const score = this.calculatePerformanceScore(summary);

    return {
      metrics: this.metrics,
      summary,
      recommendations,
      score
    };
  }

  // Calculate total blocking time
  private calculateTotalBlockingTime(): number {
    const longTasks = this.metrics.filter(m => m.name === 'Long Task');
    return longTasks.reduce((total, task) => {
      return total + Math.max(0, task.value - 50);
    }, 0);
  }

  // Generate performance recommendations
  private generateRecommendations(summary: PerformanceReport['summary']): string[] {
    const recommendations: string[] = [];

    if (summary.timeToFirstByte > 800) {
      recommendations.push('Improve server response time (TTFB > 800ms)');
    }

    if (summary.firstContentfulPaint > 1800) {
      recommendations.push('Optimize First Contentful Paint (FCP > 1.8s)');
    }

    if (summary.largestContentfulPaint > 2500) {
      recommendations.push('Improve Largest Contentful Paint (LCP > 2.5s)');
    }

    if (summary.cumulativeLayoutShift > 0.1) {
      recommendations.push('Reduce layout shifts (CLS > 0.1)');
    }

    if (summary.totalBlockingTime > 300) {
      recommendations.push('Reduce JavaScript execution time (TBT > 300ms)');
    }

    if (summary.pageLoadTime > 3000) {
      recommendations.push('Optimize overall page load time (> 3s)');
    }

    // Check for large resources
    const largeResources = this.metrics
      .filter(m => m.type === 'resource' && m.value > 1000)
      .length;
    
    if (largeResources > 5) {
      recommendations.push(`Optimize resource loading (${largeResources} resources > 1s)`);
    }

    return recommendations;
  }

  // Calculate overall performance score (0-100)
  private calculatePerformanceScore(summary: PerformanceReport['summary']): number {
    let score = 100;

    // Page load time scoring
    if (summary.pageLoadTime > 1000) score -= 5;
    if (summary.pageLoadTime > 2000) score -= 10;
    if (summary.pageLoadTime > 3000) score -= 15;
    if (summary.pageLoadTime > 5000) score -= 20;

    // Core Web Vitals scoring
    // LCP scoring
    if (summary.largestContentfulPaint > 2500) score -= 15;
    else if (summary.largestContentfulPaint > 4000) score -= 25;

    // FCP scoring
    if (summary.firstContentfulPaint > 1800) score -= 10;
    else if (summary.firstContentfulPaint > 3000) score -= 20;

    // CLS scoring
    if (summary.cumulativeLayoutShift > 0.1) score -= 10;
    else if (summary.cumulativeLayoutShift > 0.25) score -= 20;

    // TBT scoring
    if (summary.totalBlockingTime > 200) score -= 10;
    else if (summary.totalBlockingTime > 600) score -= 20;

    // TTFB scoring
    if (summary.timeToFirstByte > 800) score -= 5;
    else if (summary.timeToFirstByte > 1800) score -= 15;

    return Math.max(0, Math.min(100, score));
  }

  // Get metrics by type
  getMetricsByType(type: PerformanceMetric['type']): PerformanceMetric[] {
    return this.metrics.filter(m => m.type === type);
  }

  // Get metrics for a specific page
  getMetricsForPage(page: string): PerformanceMetric[] {
    return this.metrics.filter(m => m.metadata?.page === page);
  }

  // Clear all metrics
  clearMetrics(): void {
    this.metrics = [];
  }

  // Stop monitoring
  stopMonitoring(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.isMonitoring = false;
  }

  // Export metrics for analysis
  exportMetrics(): string {
    return JSON.stringify(this.metrics, null, 2);
  }

  // Get performance summary
  getSummary(): {
    totalMetrics: number;
    averagePageLoad: number;
    averageTTFB: number;
    errorRate: number;
    slowestPages: string[];
  } {
    const pageLoads = this.metrics.filter(m => m.name === 'Page Load Time');
    const ttfbs = this.metrics.filter(m => m.name === 'Time to First Byte');
    
    // Group by page
    const pageMetrics = new Map<string, number[]>();
    pageLoads.forEach(metric => {
      const page = metric.metadata?.page || 'unknown';
      if (!pageMetrics.has(page)) {
        pageMetrics.set(page, []);
      }
      pageMetrics.get(page)!.push(metric.value);
    });

    // Find slowest pages
    const pageSpeeds = Array.from(pageMetrics.entries())
      .map(([page, times]) => ({
        page,
        avgTime: times.reduce((a, b) => a + b, 0) / times.length
      }))
      .sort((a, b) => b.avgTime - a.avgTime);

    return {
      totalMetrics: this.metrics.length,
      averagePageLoad: pageLoads.length > 0 
        ? pageLoads.reduce((sum, m) => sum + m.value, 0) / pageLoads.length 
        : 0,
      averageTTFB: ttfbs.length > 0
        ? ttfbs.reduce((sum, m) => sum + m.value, 0) / ttfbs.length
        : 0,
      errorRate: 0, // Would need error tracking
      slowestPages: pageSpeeds.slice(0, 5).map(p => p.page)
    };
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();