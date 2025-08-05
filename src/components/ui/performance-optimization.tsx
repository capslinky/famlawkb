'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

// Virtual Scrolling Component
interface VirtualScrollProps<T> {
  items: T[];
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  containerHeight: number;
  className?: string;
  overscan?: number;
}

export function VirtualScroll<T>({
  items,
  itemHeight,
  renderItem,
  containerHeight,
  className = '',
  overscan = 5
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      start + Math.ceil(containerHeight / itemHeight) + overscan,
      items.length
    );
    
    return {
      start: Math.max(0, start - overscan),
      end
    };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end).map((item, index) => ({
      item,
      index: visibleRange.start + index
    }));
  }, [items, visibleRange]);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return (
    <div
      ref={scrollElementRef}
      className={cn('overflow-auto', className)}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {visibleItems.map(({ item, index }) => (
            <div
              key={index}
              style={{
                height: itemHeight,
                overflow: 'hidden'
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Lazy Image Component with Blur Placeholder
interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  blurDataURL?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  blurDataURL,
  priority = false,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'bg-gray-100 flex items-center justify-center text-gray-400',
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load</span>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
      />
      
      {isLoading && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full" />
        </div>
      )}
    </div>
  );
}

// Intersection Observer Hook for Lazy Loading
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

// Lazy Section Component
interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

export function LazySection({ 
  children, 
  className = '',
  fallback,
  rootMargin = '50px'
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { rootMargin });

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (fallback || <Skeleton className="w-full h-32" />)}
    </div>
  );
}

// Code Splitting Helper Component
interface DynamicComponentProps {
  componentImport: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: any;
}

export function DynamicComponent({ 
  componentImport, 
  fallback = <Skeleton className="w-full h-32" />,
  props = {}
}: DynamicComponentProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    componentImport()
      .then((module) => {
        setComponent(() => module.default);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [componentImport]);

  if (isLoading) return <>{fallback}</>;
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 text-sm">Failed to load component: {error}</p>
      </div>
    );
  }
  if (!Component) return null;

  return <Component {...props} />;
}

// Debounced Input Hook
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Memoized Search Component
interface MemoizedSearchProps {
  items: any[];
  searchTerm: string;
  searchFields: string[];
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
}

export const MemoizedSearch = React.memo(function MemoizedSearch({
  items,
  searchTerm,
  searchFields,
  renderItem,
  className = ''
}: MemoizedSearchProps) {
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    return items.filter(item =>
      searchFields.some(field =>
        item[field]?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [items, searchTerm, searchFields]);

  return (
    <div className={className}>
      {filteredItems.map((item, index) => (
        <div key={item.id || index}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
});

// Bundle Size Monitor (Development Only)
export function BundleSizeMonitor() {
  const [bundleInfo, setBundleInfo] = useState<{
    jsSize: number;
    cssSize: number;
    totalSize: number;
  } | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // This would integrate with webpack-bundle-analyzer or similar tools
      const mockBundleInfo = {
        jsSize: 245 * 1024, // 245KB
        cssSize: 32 * 1024,  // 32KB
        totalSize: 277 * 1024 // 277KB total
      };
      setBundleInfo(mockBundleInfo);
    }
  }, []);

  if (process.env.NODE_ENV !== 'development' || !bundleInfo) {
    return null;
  }

  const formatSize = (bytes: number) => {
    return `${(bytes / 1024).toFixed(1)}KB`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs z-50"
    >
      <div className="font-semibold mb-1">Bundle Size</div>
      <div className="space-y-1">
        <div>JS: {formatSize(bundleInfo.jsSize)}</div>
        <div>CSS: {formatSize(bundleInfo.cssSize)}</div>
        <div className="font-semibold">Total: {formatSize(bundleInfo.totalSize)}</div>
      </div>
    </motion.div>
  );
}

// Performance Metrics Hook
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<{
    lcp?: number; // Largest Contentful Paint
    fid?: number; // First Input Delay
    cls?: number; // Cumulative Layout Shift
    ttfb?: number; // Time to First Byte
  }>({});

  useEffect(() => {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return metrics;
}

// Performance Monitor Component (Development Only)
export function PerformanceMonitor() {
  const metrics = usePerformanceMetrics();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs z-50"
    >
      <div className="font-semibold mb-2">Core Web Vitals</div>
      <div className="space-y-1">
        {metrics.lcp && (
          <div className={cn(
            'flex justify-between',
            metrics.lcp <= 2500 ? 'text-green-600' : metrics.lcp <= 4000 ? 'text-yellow-600' : 'text-red-600'
          )}>
            <span>LCP:</span>
            <span>{(metrics.lcp / 1000).toFixed(2)}s</span>
          </div>
        )}
        {metrics.fid !== undefined && (
          <div className={cn(
            'flex justify-between',
            metrics.fid <= 100 ? 'text-green-600' : metrics.fid <= 300 ? 'text-yellow-600' : 'text-red-600'
          )}>
            <span>FID:</span>
            <span>{metrics.fid.toFixed(1)}ms</span>
          </div>
        )}
        {metrics.cls !== undefined && (
          <div className={cn(
            'flex justify-between',
            metrics.cls <= 0.1 ? 'text-green-600' : metrics.cls <= 0.25 ? 'text-yellow-600' : 'text-red-600'
          )}>
            <span>CLS:</span>
            <span>{metrics.cls.toFixed(3)}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Example usage of Virtual Scroll
export function VirtualScrollExample() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`
  }));

  const renderItem = (item: any, index: number) => (
    <div className="flex items-center gap-3 p-4 border-b border-gray-100">
      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
        {item.id}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <VirtualScroll
        items={items}
        itemHeight={80}
        renderItem={renderItem}
        containerHeight={400}
        className="border rounded-lg"
      />
    </div>
  );
}