'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Hook for intelligent route prefetching
export function useRoutePrefetching() {
  const router = useRouter();
  const prefetchedRoutes = useRef(new Set<string>());
  const isHovering = useRef(false);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const prefetchRoute = useCallback((href: string) => {
    if (prefetchedRoutes.current.has(href)) {
      return; // Already prefetched
    }

    try {
      router.prefetch(href);
      prefetchedRoutes.current.add(href);
      console.log('Prefetched route:', href);
    } catch (error) {
      console.warn('Failed to prefetch route:', href, error);
    }
  }, [router]);

  const handleLinkHover = useCallback((href: string) => {
    // Debounce hover events to avoid excessive prefetching
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }

    hoverTimer.current = setTimeout(() => {
      if (isHovering.current) {
        prefetchRoute(href);
      }
    }, 100); // 100ms delay
  }, [prefetchRoute]);

  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
  }, []);

  // Prefetch high-priority routes on mount
  useEffect(() => {
    const highPriorityRoutes = [
      '/protection/emergency',
      '/getting-divorced',
      '/forms',
      '/resources',
      '/custody'
    ];

    // Prefetch after a short delay to avoid blocking initial render
    const timer = setTimeout(() => {
      highPriorityRoutes.forEach(route => {
        prefetchRoute(route);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [prefetchRoute]);

  return {
    handleLinkHover,
    handleMouseEnter,
    handleMouseLeave,
    prefetchRoute
  };
}

// Enhanced Link component with intelligent prefetching
interface PrefetchLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  priority?: 'high' | 'medium' | 'low';
  prefetchOnHover?: boolean;
  prefetchOnVisible?: boolean;
  [key: string]: any;
}

export function PrefetchLink({
  href,
  children,
  className = '',
  priority = 'medium',
  prefetchOnHover = true,
  prefetchOnVisible = false,
  ...props
}: PrefetchLinkProps) {
  const { handleLinkHover, handleMouseEnter, handleMouseLeave, prefetchRoute } = useRoutePrefetching();
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Intersection Observer for visible prefetching
  useEffect(() => {
    if (!prefetchOnVisible || !linkRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prefetchRoute(href);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px' // Prefetch when within 50px of viewport
      }
    );

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => observer.disconnect();
  }, [href, prefetchOnVisible, prefetchRoute]);

  // High priority routes are prefetched immediately
  useEffect(() => {
    if (priority === 'high') {
      const timer = setTimeout(() => {
        prefetchRoute(href);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [href, priority, prefetchRoute]);

  const handleMouseEnterWrapper = (e: React.MouseEvent) => {
    handleMouseEnter();
    if (prefetchOnHover) {
      handleLinkHover(href);
    }
    props.onMouseEnter?.(e);
  };

  const handleMouseLeaveWrapper = (e: React.MouseEvent) => {
    handleMouseLeave();
    props.onMouseLeave?.(e);
  };

  return (
    <Link
      ref={linkRef}
      href={href}
      className={className}
      onMouseEnter={handleMouseEnterWrapper}
      onMouseLeave={handleMouseLeaveWrapper}
      {...props}
    >
      {children}
    </Link>
  );
}

// Context for managing prefetch strategies
interface PrefetchContextType {
  prefetchStrategy: 'aggressive' | 'conservative' | 'disabled';
  setPrefetchStrategy: (strategy: 'aggressive' | 'conservative' | 'disabled') => void;
  connectionType: string | null;
}

const PrefetchContext = React.createContext<PrefetchContextType | undefined>(undefined);

export function PrefetchProvider({ children }: { children: React.ReactNode }) {
  const [prefetchStrategy, setPrefetchStrategy] = React.useState<'aggressive' | 'conservative' | 'disabled'>('conservative');
  const [connectionType, setConnectionType] = React.useState<string | null>(null);

  useEffect(() => {
    // Detect connection type and adjust strategy
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const updateConnection = () => {
        setConnectionType(connection.effectiveType);
        
        // Adjust prefetch strategy based on connection
        if (connection.effectiveType === '4g') {
          setPrefetchStrategy('aggressive');
        } else if (connection.effectiveType === '3g') {
          setPrefetchStrategy('conservative');
        } else {
          setPrefetchStrategy('disabled');
        }
      };

      updateConnection();
      connection.addEventListener('change', updateConnection);

      return () => {
        connection.removeEventListener('change', updateConnection);
      };
    }

    // Check if user prefers reduced data usage
    if ('connection' in navigator && (navigator as any).connection?.saveData) {
      setPrefetchStrategy('disabled');
    }
  }, []);

  const value = {
    prefetchStrategy,
    setPrefetchStrategy,
    connectionType
  };

  return (
    <PrefetchContext.Provider value={value}>
      {children}
    </PrefetchContext.Provider>
  );
}

export function usePrefetchContext() {
  const context = React.useContext(PrefetchContext);
  if (!context) {
    throw new Error('usePrefetchContext must be used within PrefetchProvider');
  }
  return context;
}

// Smart navigation component that prefetches based on user behavior
interface SmartNavigationProps {
  children: React.ReactNode;
  className?: string;
}

export function SmartNavigation({ children, className = '' }: SmartNavigationProps) {
  const { prefetchStrategy } = usePrefetchContext();
  const { prefetchRoute } = useRoutePrefetching();
  const navigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefetchStrategy === 'disabled' || !navigationRef.current) return;

    const navigation = navigationRef.current;
    const links = navigation.querySelectorAll('a[href^="/"]');

    const handleFocus = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && prefetchStrategy === 'aggressive') {
        const url = new URL(target.href);
        prefetchRoute(url.pathname);
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && (prefetchStrategy === 'aggressive' || prefetchStrategy === 'conservative')) {
        const url = new URL(target.href);
        setTimeout(() => prefetchRoute(url.pathname), 100);
      }
    };

    links.forEach(link => {
      link.addEventListener('focus', handleFocus);
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('focus', handleFocus);
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, [prefetchStrategy, prefetchRoute]);

  return (
    <div ref={navigationRef} className={className}>
      {children}
    </div>
  );
}

// Viewport-based prefetching component
interface ViewportPrefetchProps {
  routes: string[];
  rootMargin?: string;
  threshold?: number;
}

export function ViewportPrefetch({ 
  routes, 
  rootMargin = '100px', 
  threshold = 0.1 
}: ViewportPrefetchProps) {
  const { prefetchRoute } = useRoutePrefetching();
  const { prefetchStrategy } = usePrefetchContext();
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefetchStrategy === 'disabled' || !markerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            routes.forEach(route => {
              prefetchRoute(route);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => observer.disconnect();
  }, [routes, rootMargin, threshold, prefetchRoute, prefetchStrategy]);

  return <div ref={markerRef} style={{ height: 1, visibility: 'hidden' }} />;
}

// Preload critical routes based on user journey
export function useJourneyPrefetch() {
  const { prefetchRoute } = useRoutePrefetching();
  const { prefetchStrategy } = usePrefetchContext();

  const prefetchJourney = useCallback((currentPath: string) => {
    if (prefetchStrategy === 'disabled') return;

    // Define common user journeys
    const journeys: Record<string, string[]> = {
      '/': ['/protection/emergency', '/getting-divorced', '/forms'],
      '/getting-divorced': ['/forms', '/divorce/uncontested-simple', '/divorce/contested-full'],
      '/protection': ['/protection/emergency', '/protection/how-to-file', '/protection/safety-plan'],
      '/forms': ['/forms/divorce-petition-children', '/forms/response-petition'],
      '/custody': ['/custody/establish-order', '/custody-special-cases/emergency'],
      '/resources': ['/resources/self-representation-guide', '/resources/legal-representation']
    };

    // Find matching journey and prefetch next likely routes
    Object.entries(journeys).forEach(([basePath, nextRoutes]) => {
      if (currentPath.startsWith(basePath)) {
        nextRoutes.forEach(route => {
          setTimeout(() => prefetchRoute(route), Math.random() * 2000 + 500);
        });
      }
    });
  }, [prefetchRoute, prefetchStrategy]);

  return { prefetchJourney };
}

// Background prefetch for improved performance
export function BackgroundPrefetch() {
  const { prefetchRoute } = useRoutePrefetching();
  const { prefetchStrategy } = usePrefetchContext();

  useEffect(() => {
    if (prefetchStrategy !== 'aggressive') return;

    // Prefetch all major sections in the background
    const majorSections = [
      '/topics/child-support',
      '/topics/property-division',
      '/topics/spousal-maintenance',
      '/procedures/court-procedures',
      '/modules/responding',
      '/modules/first-appearance',
      '/reference/faq'
    ];

    // Spread prefetching over time to avoid overwhelming the network
    majorSections.forEach((route, index) => {
      setTimeout(() => {
        prefetchRoute(route);
      }, (index + 1) * 3000); // 3-second intervals
    });
  }, [prefetchRoute, prefetchStrategy]);

  return null;
}