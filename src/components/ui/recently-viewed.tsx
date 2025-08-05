'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Eye,
  Calendar,
  ArrowRight,
  MoreHorizontal,
  Star,
  Trash2
} from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

// Types
interface ViewedItem {
  id: string;
  title: string;
  path: string;
  description?: string;
  viewedAt: Date;
  readTime?: number;
  category?: string;
  isBookmarked?: boolean;
  viewCount?: number;
  lastPosition?: number; // Reading position percentage
  thumbnail?: string;
}

interface RecentlyViewedProps {
  maxItems?: number;
  showControls?: boolean;
  compact?: boolean;
  className?: string;
  title?: string;
  showViewCount?: boolean;
  showReadTime?: boolean;
  showLastPosition?: boolean;
  autoScrollInterval?: number;
}

// Mock data for demonstration
const MOCK_VIEWED_ITEMS: ViewedItem[] = [
  {
    id: '1',
    title: 'Getting Divorced in Arizona',
    path: '/getting-divorced',
    description: 'Complete guide to the divorce process in Arizona',
    viewedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    readTime: 15,
    category: 'Divorce',
    isBookmarked: true,
    viewCount: 5,
    lastPosition: 45
  },
  {
    id: '2',
    title: 'Emergency Protection Orders',
    path: '/protection/emergency',
    description: 'Immediate safety resources and protection procedures',
    viewedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    readTime: 8,
    category: 'Protection',
    isBookmarked: false,
    viewCount: 2,
    lastPosition: 100
  },
  {
    id: '3',
    title: 'Child Support Calculator',
    path: '/support/calculator',
    description: 'Calculate child support payments in Arizona',
    viewedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    readTime: 10,
    category: 'Support',
    isBookmarked: false,
    viewCount: 3,
    lastPosition: 25
  },
  {
    id: '4',
    title: 'Court Forms Hub',
    path: '/forms',
    description: 'Access all required legal forms and documents',
    viewedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    readTime: 5,
    category: 'Forms',
    isBookmarked: true,
    viewCount: 8,
    lastPosition: 0
  },
  {
    id: '5',
    title: 'Self-Representation Guide',
    path: '/resources/self-representation-guide',
    description: 'Tips for representing yourself in family court',
    viewedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    readTime: 20,
    category: 'Resources',
    isBookmarked: false,
    viewCount: 1,
    lastPosition: 60
  }
];

// Local storage key
const STORAGE_KEY = 'arizona-family-law-viewed-items';

// Hook for managing recently viewed items
export function useRecentlyViewed() {
  const [viewedItems, setViewedItems] = useState<ViewedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const items = parsed.map((item: any) => ({
          ...item,
          viewedAt: new Date(item.viewedAt)
        }));
        setViewedItems(items);
      } else {
        // Use mock data for demo
        setViewedItems(MOCK_VIEWED_ITEMS);
      }
    } catch (error) {
      console.error('Failed to load recently viewed items:', error);
      setViewedItems(MOCK_VIEWED_ITEMS);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (!isLoading && viewedItems.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(viewedItems));
      } catch (error) {
        console.error('Failed to save recently viewed items:', error);
      }
    }
  }, [viewedItems, isLoading]);

  const addViewedItem = useCallback((item: Omit<ViewedItem, 'id' | 'viewedAt' | 'viewCount'>) => {
    setViewedItems(prev => {
      const existing = prev.find(v => v.path === item.path);
      const now = new Date();
      
      if (existing) {
        // Update existing item
        return prev.map(v => 
          v.path === item.path 
            ? { 
                ...v, 
                ...item,
                viewedAt: now,
                viewCount: (v.viewCount || 0) + 1
              }
            : v
        ).sort((a, b) => b.viewedAt.getTime() - a.viewedAt.getTime());
      } else {
        // Add new item
        const newItem: ViewedItem = {
          ...item,
          id: `viewed-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          viewedAt: now,
          viewCount: 1
        };
        
        return [newItem, ...prev].slice(0, 20); // Keep only last 20 items
      }
    });
  }, []);

  const removeViewedItem = useCallback((id: string) => {
    setViewedItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearAllViewed = useCallback(() => {
    setViewedItems([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear recently viewed items:', error);
    }
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setViewedItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, isBookmarked: !item.isBookmarked }
        : item
    ));
  }, []);

  const updateReadingPosition = useCallback((path: string, position: number) => {
    setViewedItems(prev => prev.map(item => 
      item.path === path 
        ? { ...item, lastPosition: position }
        : item
    ));
  }, []);

  return {
    viewedItems,
    isLoading,
    addViewedItem,
    removeViewedItem,
    clearAllViewed,
    toggleBookmark,
    updateReadingPosition
  };
}

// Utility functions
function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return date.toLocaleDateString();
}

function getCategoryColor(category?: string): string {
  const colors: Record<string, string> = {
    'Divorce': 'bg-blue-100 text-blue-700',
    'Protection': 'bg-red-100 text-red-700',
    'Support': 'bg-green-100 text-green-700',
    'Forms': 'bg-purple-100 text-purple-700',
    'Resources': 'bg-orange-100 text-orange-700',
    'Custody': 'bg-indigo-100 text-indigo-700'
  };
  
  return colors[category || ''] || 'bg-gray-100 text-gray-700';
}

// Recently Viewed Carousel Component
export function RecentlyViewedCarousel({
  maxItems = 5,
  showControls = true,
  compact = false,
  className = '',
  title = 'Recently Viewed',
  showViewCount = true,
  showReadTime = true,
  showLastPosition = true,
  autoScrollInterval = 0
}: RecentlyViewedProps) {
  const { viewedItems, isLoading, removeViewedItem, toggleBookmark } = useRecentlyViewed();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const displayItems = viewedItems.slice(0, maxItems);
  const hasItems = displayItems.length > 0;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < displayItems.length - (compact ? 2 : 1);

  // Auto-scroll functionality
  useEffect(() => {
    if (autoScrollInterval > 0 && !isHovered && displayItems.length > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const next = prev + 1;
          return next >= displayItems.length ? 0 : next;
        });
      }, autoScrollInterval);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScrollInterval, isHovered, displayItems.length]);

  const scrollTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, displayItems.length - 1)));
  };

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Render item card
  const renderItem = (item: ViewedItem, index: number) => (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'flex-shrink-0',
        compact ? 'w-64' : 'w-80'
      )}
    >
      <Card className={cn(
        'p-4 h-full transition-all hover:shadow-md group relative',
        item.isBookmarked && 'ring-2 ring-yellow-200'
      )}>
        {/* Remove button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            removeViewedItem(item.id);
          }}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-gray-100 rounded"
          aria-label="Remove from recently viewed"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>

        {/* Content */}
        <Link href={item.path} className="block">
          <div className="mb-3">
            <div className="flex items-start justify-between mb-2">
              <h3 className={cn(
                'font-semibold text-gray-900 line-clamp-2',
                compact ? 'text-sm' : 'text-base'
              )}>
                {item.title}
              </h3>
            </div>
            
            {item.description && !compact && (
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {item.description}
              </p>
            )}
          </div>

          {/* Meta information */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {item.category && (
                  <span className={cn(
                    'px-2 py-1 rounded-full text-xs font-medium',
                    getCategoryColor(item.category)
                  )}>
                    {item.category}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{formatTimeAgo(item.viewedAt)}</span>
              </div>
            </div>

            {/* Additional meta */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                {showViewCount && item.viewCount && (
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{item.viewCount}</span>
                  </div>
                )}
                
                {showReadTime && item.readTime && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.readTime}m read</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1">
                {showLastPosition && item.lastPosition !== undefined && item.lastPosition > 0 && (
                  <div className="flex items-center gap-1 text-primary-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                    <span>{item.lastPosition}%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Reading progress bar */}
            {showLastPosition && item.lastPosition !== undefined && item.lastPosition > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-primary-600 h-1 rounded-full transition-all"
                  style={{ width: `${item.lastPosition}%` }}
                />
              </div>
            )}
          </div>
        </Link>

        {/* Action buttons */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark(item.id);
            }}
            className={cn(
              'flex items-center gap-1 text-xs transition-colors',
              item.isBookmarked 
                ? 'text-yellow-600 hover:text-yellow-700' 
                : 'text-gray-400 hover:text-gray-600'
            )}
          >
            {item.isBookmarked ? (
              <BookmarkCheck className="w-3 h-3" />
            ) : (
              <Bookmark className="w-3 h-3" />
            )}
            <span>{item.isBookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <Link
            href={item.path}
            className="flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 transition-colors"
          >
            <span>Continue</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className={cn('space-y-4', className)}>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className={cn('flex-shrink-0', compact ? 'w-64 h-32' : 'w-80 h-40')} />
          ))}
        </div>
      </div>
    );
  }

  if (!hasItems) {
    return (
      <Card className={cn('p-6 text-center', className)}>
        <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Recent Activity</h3>
        <p className="text-gray-600 mb-4">
          Pages you visit will appear here for quick access.
        </p>
        <Link href="/">
          <Button>Explore Legal Topics</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div 
      className={cn('space-y-4', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          {title}
          <span className="text-sm font-normal text-gray-500">
            ({displayItems.length})
          </span>
        </h2>

        {showControls && displayItems.length > 1 && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Previous items"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Next items"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (compact ? 272 : 336)}px)` 
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, index) => renderItem(item, index))}
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      {displayItems.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {displayItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                index === currentIndex 
                  ? 'bg-primary-600 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Compact variant for sidebars
export function RecentlyViewedSidebar(props: Omit<RecentlyViewedProps, 'compact'>) {
  return (
    <RecentlyViewedCarousel 
      {...props} 
      compact={true} 
      maxItems={3}
      showControls={false}
      title="Recent"
    />
  );
}

// Grid view variant
export function RecentlyViewedGrid({ 
  maxItems = 6, 
  className = '',
  ...props 
}: RecentlyViewedProps) {
  const { viewedItems, isLoading } = useRecentlyViewed();
  const displayItems = viewedItems.slice(0, maxItems);

  if (isLoading) {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {displayItems.map((item, index) => (
        <Card key={item.id} className="p-4 hover:shadow-md transition-all">
          <Link href={item.path}>
            <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {item.description}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{formatTimeAgo(item.viewedAt)}</span>
              {item.readTime && <span>{item.readTime}m read</span>}
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}

// Hook for tracking page views automatically
export function usePageViewTracking() {
  const { addViewedItem } = useRecentlyViewed();
  const pathname = usePathname();

  useEffect(() => {
    // Don't track certain paths
    const excludePaths = ['/api', '/_next', '/offline'];
    const shouldTrack = !excludePaths.some(path => pathname.startsWith(path));

    if (shouldTrack && pathname !== '/') {
      // Extract page information from pathname
      const title = document.title || 'Untitled Page';
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

      // Determine category from path
      let category = 'General';
      if (pathname.includes('/divorce')) category = 'Divorce';
      else if (pathname.includes('/protection')) category = 'Protection';
      else if (pathname.includes('/custody')) category = 'Custody';
      else if (pathname.includes('/support')) category = 'Support';
      else if (pathname.includes('/forms')) category = 'Forms';
      else if (pathname.includes('/resources')) category = 'Resources';

      // Add to recently viewed
      addViewedItem({
        title,
        path: pathname,
        description,
        category
      });
    }
  }, [pathname, addViewedItem]);
}