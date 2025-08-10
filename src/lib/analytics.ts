// Analytics service for Arizona Family Law Knowledge Base
// Supports multiple providers: Google Analytics, Plausible, Custom

export type AnalyticsProvider = 'google' | 'plausible' | 'custom' | 'console';

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

export interface UserProperties {
  userId?: string;
  userType?: 'visitor' | 'registered' | 'returning';
  caseType?: string;
  county?: string;
  hasChildren?: boolean;
  representationStatus?: 'self' | 'attorney' | 'considering';
}

export interface PageViewData {
  path: string;
  title: string;
  referrer?: string;
  searchQuery?: string;
  category?: string;
}

// Event categories for consistent tracking
export const EventCategories = {
  NAVIGATION: 'Navigation',
  FORM: 'Form',
  SEARCH: 'Search',
  CALCULATOR: 'Calculator',
  RESOURCE: 'Resource',
  ENGAGEMENT: 'Engagement',
  ERROR: 'Error',
  CONVERSION: 'Conversion',
} as const;

// Common event actions
export const EventActions = {
  // Navigation
  CLICK_LINK: 'Click Link',
  CLICK_BUTTON: 'Click Button',
  OPEN_MENU: 'Open Menu',
  BREADCRUMB_CLICK: 'Breadcrumb Click',
  
  // Forms
  FORM_START: 'Form Start',
  FORM_FIELD_COMPLETE: 'Field Complete',
  FORM_SECTION_COMPLETE: 'Section Complete',
  FORM_SUBMIT: 'Form Submit',
  FORM_SAVE_DRAFT: 'Save Draft',
  FORM_LOAD_DRAFT: 'Load Draft',
  FORM_ERROR: 'Form Error',
  FORM_ABANDON: 'Form Abandon',
  FORM_DOWNLOAD: 'Form Download',
  
  // Search
  SEARCH_PERFORM: 'Search Perform',
  SEARCH_RESULT_CLICK: 'Search Result Click',
  SEARCH_NO_RESULTS: 'Search No Results',
  SEARCH_FILTER: 'Search Filter',
  
  // Calculator
  CALCULATOR_START: 'Calculator Start',
  CALCULATOR_COMPLETE: 'Calculator Complete',
  CALCULATOR_PRINT: 'Calculator Print',
  CALCULATOR_EXPORT: 'Calculator Export',
  
  // Resources
  RESOURCE_VIEW: 'Resource View',
  RESOURCE_DOWNLOAD: 'Resource Download',
  RESOURCE_PRINT: 'Resource Print',
  RESOURCE_SHARE: 'Resource Share',
  VIDEO_PLAY: 'Video Play',
  VIDEO_COMPLETE: 'Video Complete',
  
  // Engagement
  TIME_ON_PAGE: 'Time on Page',
  SCROLL_DEPTH: 'Scroll Depth',
  HELP_TOOLTIP_VIEW: 'Help Tooltip View',
  FAQ_EXPAND: 'FAQ Expand',
  COPY_TEXT: 'Copy Text',
  
  // Conversion
  CONTACT_ATTORNEY: 'Contact Attorney',
  COURT_LINK_CLICK: 'Court Link Click',
  SCHEDULE_CONSULTATION: 'Schedule Consultation',
  EMERGENCY_HELP_CLICK: 'Emergency Help Click',
} as const;

class AnalyticsService {
  private provider: AnalyticsProvider;
  private initialized: boolean = false;
  private queue: Array<() => void> = [];
  private sessionStartTime: number;
  private pageStartTime: number;
  private userProperties: UserProperties = {};
  private debug: boolean = false;

  constructor(provider: AnalyticsProvider = 'console', debug = false) {
    this.provider = provider;
    this.debug = debug;
    this.sessionStartTime = Date.now();
    this.pageStartTime = Date.now();
    
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init(): void {
    switch (this.provider) {
      case 'google':
        this.initGoogleAnalytics();
        break;
      case 'plausible':
        this.initPlausible();
        break;
      case 'custom':
        this.initCustomAnalytics();
        break;
      case 'console':
        this.initialized = true;
        this.processQueue();
        break;
    }

    // Set up automatic tracking
    this.setupAutomaticTracking();
  }

  private initGoogleAnalytics(): void {
    // Check if gtag is already loaded
    if (typeof window !== 'undefined' && (window as any).gtag) {
      this.initialized = true;
      this.processQueue();
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function() {
        (window as any).dataLayer.push(arguments);
      };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
        debug_mode: this.debug,
      });
      
      this.initialized = true;
      this.processQueue();
    };
    document.head.appendChild(script);
  }

  private initPlausible(): void {
    // Load Plausible Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.dataset.domain = window.location.hostname;
    script.src = 'https://plausible.io/js/script.js';
    script.onload = () => {
      this.initialized = true;
      this.processQueue();
    };
    document.head.appendChild(script);
  }

  private initCustomAnalytics(): void {
    // Initialize custom analytics endpoint
    this.initialized = true;
    this.processQueue();
  }

  private processQueue(): void {
    while (this.queue.length > 0) {
      const action = this.queue.shift();
      if (action) action();
    }
  }

  private setupAutomaticTracking(): void {
    if (typeof window === 'undefined') return;

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackTimeOnPage();
      } else {
        this.pageStartTime = Date.now();
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    let scrollTimeout: NodeJS.Timeout;
    
    window.addEventListener('scroll', () => {
      const scrollPercentage = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
            this.track({
              category: EventCategories.ENGAGEMENT,
              action: EventActions.SCROLL_DEPTH,
              label: '25%',
              value: 25,
            });
          } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
            this.track({
              category: EventCategories.ENGAGEMENT,
              action: EventActions.SCROLL_DEPTH,
              label: '50%',
              value: 50,
            });
          } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
            this.track({
              category: EventCategories.ENGAGEMENT,
              action: EventActions.SCROLL_DEPTH,
              label: '75%',
              value: 75,
            });
          } else if (maxScrollDepth >= 90) {
            this.track({
              category: EventCategories.ENGAGEMENT,
              action: EventActions.SCROLL_DEPTH,
              label: '90%',
              value: 90,
            });
          }
        }, 1000);
      }
    });

    // Track external link clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
          this.track({
            category: EventCategories.NAVIGATION,
            action: EventActions.CLICK_LINK,
            label: `External: ${url.hostname}`,
            metadata: { url: url.href },
          });
        }
      }
    });

    // Track form abandonment
    let formStarted = false;
    document.addEventListener('focus', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        if (!formStarted) {
          formStarted = true;
          const form = target.closest('form');
          if (form) {
            const formName = form.getAttribute('name') || form.id || 'unnamed';
            this.track({
              category: EventCategories.FORM,
              action: EventActions.FORM_START,
              label: formName,
            });
          }
        }
      }
    }, true);

    // Track before unload for form abandonment
    window.addEventListener('beforeunload', () => {
      if (formStarted) {
        // Check if any form has unsaved data
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          const hasData = Array.from(form.elements).some((element: any) => {
            return element.value && element.value.trim() !== '';
          });
          
          if (hasData && !form.dataset.submitted) {
            this.track({
              category: EventCategories.FORM,
              action: EventActions.FORM_ABANDON,
              label: form.getAttribute('name') || form.id || 'unnamed',
            });
          }
        });
      }
      
      // Track session duration
      this.trackSessionDuration();
    });
  }

  // Set user properties
  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };
    
    if (!this.initialized) {
      this.queue.push(() => this.setUserProperties(properties));
      return;
    }

    switch (this.provider) {
      case 'google':
        if ((window as any).gtag) {
          (window as any).gtag('set', 'user_properties', properties);
        }
        break;
      case 'plausible':
        // Plausible doesn't support user properties directly
        break;
      case 'custom':
        this.sendToCustomEndpoint('/api/analytics/user', properties);
        break;
      case 'console':
        if (this.debug) console.log('Set user properties:', properties);
        break;
    }
  }

  // Track page view
  trackPageView(data: PageViewData): void {
    if (!this.initialized) {
      this.queue.push(() => this.trackPageView(data));
      return;
    }

    // Reset page timer
    this.pageStartTime = Date.now();

    switch (this.provider) {
      case 'google':
        if ((window as any).gtag) {
          (window as any).gtag('event', 'page_view', {
            page_title: data.title,
            page_location: window.location.href,
            page_path: data.path,
            page_referrer: data.referrer,
            page_category: data.category,
            search_query: data.searchQuery,
          });
        }
        break;
      case 'plausible':
        if ((window as any).plausible) {
          (window as any).plausible('pageview', {
            props: {
              category: data.category,
              search_query: data.searchQuery,
            },
          });
        }
        break;
      case 'custom':
        this.sendToCustomEndpoint('/api/analytics/pageview', data);
        break;
      case 'console':
        if (this.debug) console.log('Page view:', data);
        break;
    }
  }

  // Track custom event
  track(event: AnalyticsEvent): void {
    if (!this.initialized) {
      this.queue.push(() => this.track(event));
      return;
    }

    switch (this.provider) {
      case 'google':
        if ((window as any).gtag) {
          (window as any).gtag('event', event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
            ...event.metadata,
          });
        }
        break;
      case 'plausible':
        if ((window as any).plausible) {
          (window as any).plausible(event.action, {
            props: {
              category: event.category,
              label: event.label,
              value: event.value,
              ...event.metadata,
            },
          });
        }
        break;
      case 'custom':
        this.sendToCustomEndpoint('/api/analytics/event', event);
        break;
      case 'console':
        if (this.debug) console.log('Track event:', event);
        break;
    }
  }

  // Track time on page
  private trackTimeOnPage(): void {
    const timeOnPage = Math.round((Date.now() - this.pageStartTime) / 1000);
    
    if (timeOnPage > 10) { // Only track if more than 10 seconds
      this.track({
        category: EventCategories.ENGAGEMENT,
        action: EventActions.TIME_ON_PAGE,
        label: window.location.pathname,
        value: timeOnPage,
      });
    }
  }

  // Track session duration
  private trackSessionDuration(): void {
    const sessionDuration = Math.round((Date.now() - this.sessionStartTime) / 1000);
    
    this.track({
      category: EventCategories.ENGAGEMENT,
      action: 'Session Duration',
      value: sessionDuration,
    });
  }

  // Send data to custom endpoint
  private async sendToCustomEndpoint(endpoint: string, data: any): Promise<void> {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          userProperties: this.userProperties,
          sessionId: this.sessionStartTime,
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
    } catch (error) {
      if (this.debug) console.error('Analytics error:', error);
    }
  }

  // Helper methods for common tracking scenarios
  trackFormProgress(formName: string, section: string, percentage: number): void {
    this.track({
      category: EventCategories.FORM,
      action: EventActions.FORM_SECTION_COMPLETE,
      label: `${formName} - ${section}`,
      value: percentage,
    });
  }

  trackSearch(query: string, resultsCount: number, filters?: Record<string, any>): void {
    this.track({
      category: EventCategories.SEARCH,
      action: EventActions.SEARCH_PERFORM,
      label: query,
      value: resultsCount,
      metadata: { filters },
    });
  }

  trackCalculator(calculatorName: string, action: string, result?: any): void {
    this.track({
      category: EventCategories.CALCULATOR,
      action: action,
      label: calculatorName,
      metadata: { result },
    });
  }

  trackResource(resourceName: string, action: string, resourceType?: string): void {
    this.track({
      category: EventCategories.RESOURCE,
      action: action,
      label: resourceName,
      metadata: { resourceType },
    });
  }

  trackError(errorMessage: string, errorContext?: string): void {
    this.track({
      category: EventCategories.ERROR,
      action: 'Error Occurred',
      label: errorMessage,
      metadata: { context: errorContext },
    });
  }

  trackConversion(conversionType: string, value?: number): void {
    this.track({
      category: EventCategories.CONVERSION,
      action: conversionType,
      value: value,
    });
  }
}

// Create singleton instance
let analyticsInstance: AnalyticsService | null = null;

export function initAnalytics(
  provider: AnalyticsProvider = 'google',
  debug = false
): AnalyticsService {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsService(provider, debug);
  }
  return analyticsInstance;
}

export function getAnalytics(): AnalyticsService {
  if (!analyticsInstance) {
    // Default to console in development, Google Analytics in production
    const provider = process.env.NODE_ENV === 'development' ? 'console' : 'google';
    analyticsInstance = new AnalyticsService(provider, process.env.NODE_ENV === 'development');
  }
  return analyticsInstance;
}

// React hook for analytics
export function useAnalytics() {
  return getAnalytics();
}

export default getAnalytics();