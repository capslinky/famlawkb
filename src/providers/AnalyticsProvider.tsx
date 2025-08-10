'use client';

import React, { createContext, useContext, useEffect, useCallback, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { 
  getAnalytics, 
  EventCategories, 
  EventActions,
  type AnalyticsEvent,
  type UserProperties,
  type PageViewData 
} from '@/lib/analytics';

interface AnalyticsContextType {
  track: (event: AnalyticsEvent) => void;
  trackFormProgress: (formName: string, section: string, percentage: number) => void;
  trackSearch: (query: string, resultsCount: number, filters?: Record<string, any>) => void;
  trackCalculator: (calculatorName: string, action: string, result?: any) => void;
  trackResource: (resourceName: string, action: string, resourceType?: string) => void;
  trackError: (errorMessage: string, errorContext?: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
  setUserProperties: (properties: UserProperties) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

// Inner component that uses useSearchParams
function AnalyticsTracker({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const analytics = getAnalytics();

  // Track page views on route change
  useEffect(() => {
    if (pathname) {
      // Determine page category based on path
      let category = 'general';
      if (pathname.includes('/forms')) category = 'forms';
      else if (pathname.includes('/topics')) category = 'topics';
      else if (pathname.includes('/procedures')) category = 'procedures';
      else if (pathname.includes('/resources')) category = 'resources';
      else if (pathname.includes('/divorce')) category = 'divorce';
      else if (pathname.includes('/custody')) category = 'custody';
      else if (pathname.includes('/support')) category = 'support';
      else if (pathname.includes('/protection')) category = 'protection';
      else if (pathname.includes('/property')) category = 'property';
      else if (pathname.includes('/modules')) category = 'modules';
      else if (pathname.includes('/responding')) category = 'responding';
      else if (pathname.includes('/search')) category = 'search';

      // Extract page title from document
      const title = document.title || 'Arizona Family Law';

      const pageViewData: PageViewData = {
        path: pathname,
        title,
        category,
        referrer: document.referrer,
        searchQuery: searchParams?.get('q') || undefined,
      };

      analytics.trackPageView(pageViewData);
    }
  }, [pathname, searchParams, analytics]);

  return <>{children}</>;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const analytics = getAnalytics();

  // Set up error tracking
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      analytics.trackError(event.message, event.filename);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackError(
        event.reason?.message || 'Unhandled Promise Rejection',
        'Promise'
      );
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [analytics]);

  // Track print events
  useEffect(() => {
    const handlePrint = () => {
      analytics.trackResource(
        document.title,
        EventActions.RESOURCE_PRINT,
        'page'
      );
    };

    window.addEventListener('beforeprint', handlePrint);
    return () => window.removeEventListener('beforeprint', handlePrint);
  }, [analytics]);

  // Context value with memoized methods
  const contextValue: AnalyticsContextType = {
    track: useCallback((event: AnalyticsEvent) => analytics.track(event), [analytics]),
    trackFormProgress: useCallback(
      (formName: string, section: string, percentage: number) =>
        analytics.trackFormProgress(formName, section, percentage),
      [analytics]
    ),
    trackSearch: useCallback(
      (query: string, resultsCount: number, filters?: Record<string, any>) =>
        analytics.trackSearch(query, resultsCount, filters),
      [analytics]
    ),
    trackCalculator: useCallback(
      (calculatorName: string, action: string, result?: any) =>
        analytics.trackCalculator(calculatorName, action, result),
      [analytics]
    ),
    trackResource: useCallback(
      (resourceName: string, action: string, resourceType?: string) =>
        analytics.trackResource(resourceName, action, resourceType),
      [analytics]
    ),
    trackError: useCallback(
      (errorMessage: string, errorContext?: string) =>
        analytics.trackError(errorMessage, errorContext),
      [analytics]
    ),
    trackConversion: useCallback(
      (conversionType: string, value?: number) =>
        analytics.trackConversion(conversionType, value),
      [analytics]
    ),
    setUserProperties: useCallback(
      (properties: UserProperties) => analytics.setUserProperties(properties),
      [analytics]
    ),
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      <Suspense fallback={null}>
        <AnalyticsTracker>
          {children}
        </AnalyticsTracker>
      </Suspense>
    </AnalyticsContext.Provider>
  );
}

// Custom hook to use analytics
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
}

// HOC for tracking component visibility
export function withAnalytics<P extends object>(
  Component: React.ComponentType<P>,
  eventData?: AnalyticsEvent
) {
  return function AnalyticsWrappedComponent(props: P) {
    const analytics = useAnalytics();

    useEffect(() => {
      if (eventData) {
        analytics.track(eventData);
      }
    }, [analytics]);

    return <Component {...props} />;
  };
}

// Hook for tracking element visibility
export function useTrackVisibility(
  elementRef: React.RefObject<HTMLElement>,
  eventData: AnalyticsEvent,
  threshold = 0.5
) {
  const analytics = useAnalytics();
  const [hasTracked, setHasTracked] = React.useState(false);

  useEffect(() => {
    if (!elementRef.current || hasTracked) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            analytics.track(eventData);
            setHasTracked(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, eventData, analytics, hasTracked, threshold]);
}

// Hook for tracking clicks with analytics
export function useTrackClick(eventData: Omit<AnalyticsEvent, 'action'>) {
  const analytics = useAnalytics();

  return useCallback(
    (label?: string) => {
      analytics.track({
        ...eventData,
        action: EventActions.CLICK_BUTTON,
        label: label || eventData.label,
      });
    },
    [analytics, eventData]
  );
}

// Hook for tracking form field completion
export function useTrackFormField(formName: string) {
  const analytics = useAnalytics();

  return useCallback(
    (fieldName: string, isValid: boolean) => {
      analytics.track({
        category: EventCategories.FORM,
        action: EventActions.FORM_FIELD_COMPLETE,
        label: `${formName} - ${fieldName}`,
        metadata: { isValid },
      });
    },
    [analytics, formName]
  );
}