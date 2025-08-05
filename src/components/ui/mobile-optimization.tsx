'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { 
  Home, 
  Search, 
  BookOpen, 
  User, 
  Menu, 
  ChevronUp, 
  MoreHorizontal,
  Phone,
  Shield,
  FileText,
  ArrowUp
} from 'lucide-react';
import { Button } from './button';
// Removed Card import to avoid circular dependencies
import { cn } from '@/lib/utils';

// Types
interface BottomNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  badge?: number;
}

interface ActionSheetOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'destructive';
  onClick: () => void;
}

// Bottom Navigation Bar
interface BottomNavigationProps {
  items: BottomNavItem[];
  activeItem?: string;
  onItemClick?: (item: BottomNavItem) => void;
  className?: string;
}

export function BottomNavigation({ 
  items, 
  activeItem, 
  onItemClick,
  className = '' 
}: BottomNavigationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-bottom',
        'md:hidden', // Only show on mobile
        className
      )}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className={cn(
              'relative flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors min-h-[44px] min-w-[44px]',
              activeItem === item.id
                ? 'text-primary-600 bg-primary-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            )}
            aria-label={item.label}
          >
            <div className="relative">
              {item.icon}
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </div>
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Pull to Refresh Component
interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function PullToRefresh({ 
  onRefresh, 
  children, 
  className = '',
  threshold = 80 
}: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const y = useMotionValue(0);
  const pullProgress = useTransform(y, [0, threshold], [0, 1]);

  const handlePanStart = () => {
    if (window.scrollY === 0) {
      setPullDistance(0);
    }
  };

  const handlePan = (event: any, info: PanInfo) => {
    if (window.scrollY === 0 && info.delta.y > 0) {
      const distance = Math.min(info.offset.y, threshold * 1.5);
      setPullDistance(distance);
      y.set(distance);
    }
  };

  const handlePanEnd = async (event: any, info: PanInfo) => {
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
        y.set(0);
      }
    } else {
      setPullDistance(0);
      y.set(0);
    }
  };

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Pull indicator */}
      <AnimatePresence>
        {(pullDistance > 0 || isRefreshing) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 right-0 flex items-center justify-center py-4 bg-gray-50 border-b"
            style={{ transform: `translateY(-100%)` }}
          >
            {isRefreshing ? (
              <div className="flex items-center gap-2 text-primary-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                <span className="text-sm font-medium">Refreshing...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-600">
                <motion.div
                  animate={{ rotate: pullDistance >= threshold ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">
                  {pullDistance >= threshold ? 'Release to refresh' : 'Pull to refresh'}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.div
        style={{ y }}
        onPanStart={handlePanStart}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0.3, bottom: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Mobile Action Sheet
interface ActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  options: ActionSheetOption[];
  cancelLabel?: string;
}

export function ActionSheet({ 
  isOpen, 
  onClose, 
  title, 
  options, 
  cancelLabel = 'Cancel' 
}: ActionSheetProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={backdropRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Action Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl safe-area-bottom"
          >
            {title && (
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 text-center">{title}</h3>
              </div>
            )}

            <div className="py-2">
              {options.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => {
                    option.onClick();
                    onClose();
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-gray-50 transition-colors min-h-[44px]',
                    option.variant === 'destructive' && 'text-red-600'
                  )}
                >
                  {option.icon && (
                    <div className="flex-shrink-0">
                      {option.icon}
                    </div>
                  )}
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-gray-200 p-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="w-full min-h-[44px]"
              >
                {cancelLabel}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Mobile Card Layout
interface MobileCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  onTap?: () => void;
}

export function MobileCard({ 
  title, 
  subtitle, 
  icon, 
  badge, 
  children, 
  className = '',
  onTap 
}: MobileCardProps) {
  return (
    <div
      className={cn('rounded-lg border bg-white shadow-sm p-4 touch-manipulation', className)}
      onClick={onTap}
      role={onTap ? 'button' : undefined}
      tabIndex={onTap ? 0 : undefined}
    >
      <div className="flex items-start gap-3 mb-3">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
            {badge && (
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

// Swipe Navigation Hook
export function useSwipeNavigation(
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  threshold = 50
) {
  const handlePan = (event: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > threshold && Math.abs(info.offset.y) < threshold) {
      if (info.offset.x > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (info.offset.x < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    }
  };

  return { onPan: handlePan };
}

// Touch Target Optimization Component
interface TouchTargetProps {
  children: React.ReactNode;
  className?: string;
  minSize?: number;
  onClick?: () => void;
}

export function TouchTarget({ 
  children, 
  className = '', 
  minSize = 44, 
  onClick 
}: TouchTargetProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center touch-manipulation',
        className
      )}
      style={{ minWidth: `${minSize}px`, minHeight: `${minSize}px` }}
    >
      {children}
    </button>
  );
}

// Mobile-optimized Floating Action Button
interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  className?: string;
  ariaLabel?: string;
}

export function FloatingActionButton({ 
  icon, 
  onClick, 
  position = 'bottom-right',
  className = '',
  ariaLabel 
}: FloatingActionButtonProps) {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'fixed z-40 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors touch-manipulation',
        'md:hidden', // Only show on mobile
        positionClasses[position],
        className
      )}
    >
      {icon}
    </motion.button>
  );
}

// Scroll to Top Button
export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-20 right-6 z-30 md:hidden"
        >
          <FloatingActionButton
            icon={<ArrowUp className="w-6 h-6" />}
            onClick={scrollToTop}
            ariaLabel="Scroll to top"
            className="bg-gray-600 hover:bg-gray-700"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Example usage components
export function MobileNavigationExample() {
  const [activeTab, setActiveTab] = useState('home');
  const [showActionSheet, setShowActionSheet] = useState(false);

  const navItems: BottomNavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
      href: '/'
    },
    {
      id: 'search',
      label: 'Search',
      icon: <Search className="w-5 h-5" />,
      href: '/search'
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/resources',
      badge: 3
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className="w-5 h-5" />,
      href: '/profile'
    },
    {
      id: 'more',
      label: 'More',
      icon: <MoreHorizontal className="w-5 h-5" />,
      href: '#'
    }
  ];

  const actionSheetOptions: ActionSheetOption[] = [
    {
      id: 'emergency',
      label: 'Emergency Help',
      icon: <Phone className="w-5 h-5" />,
      onClick: () => console.log('Emergency help')
    },
    {
      id: 'protection',
      label: 'Safety Resources',
      icon: <Shield className="w-5 h-5" />,
      onClick: () => console.log('Safety resources')
    },
    {
      id: 'forms',
      label: 'Court Forms',
      icon: <FileText className="w-5 h-5" />,
      onClick: () => console.log('Court forms')
    }
  ];

  const handleNavClick = (item: BottomNavItem) => {
    if (item.id === 'more') {
      setShowActionSheet(true);
    } else {
      setActiveTab(item.id);
    }
  };

  const handleRefresh = async (): Promise<void> => {
    return new Promise<void>(resolve => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <>
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-gray-50 pb-20">
          {/* Your page content here */}
          <div className="p-4 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <MobileCard
                key={i}
                title={`Legal Topic ${i}`}
                subtitle="Important information for your case"
                icon={<FileText className="w-5 h-5 text-primary-600" />}
                badge="New"
              >
                <p className="text-sm text-gray-600">
                  This is sample content for mobile card layout optimization.
                </p>
              </MobileCard>
            ))}
          </div>
        </div>
      </PullToRefresh>

      <BottomNavigation
        items={navItems}
        activeItem={activeTab}
        onItemClick={handleNavClick}
      />

      <ActionSheet
        isOpen={showActionSheet}
        onClose={() => setShowActionSheet(false)}
        title="More Options"
        options={actionSheetOptions}
      />

      <ScrollToTopButton />
    </>
  );
}