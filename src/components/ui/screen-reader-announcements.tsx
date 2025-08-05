'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

// Live region for screen reader announcements
interface LiveRegionProps {
  message: string;
  priority: 'polite' | 'assertive';
  atomic?: boolean;
  relevant?: 'additions' | 'removals' | 'text' | 'all';
  onAnnounced?: () => void;
}

export function LiveRegion({ 
  message, 
  priority = 'polite', 
  atomic = true,
  relevant = 'all',
  onAnnounced 
}: LiveRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && regionRef.current) {
      // Clear previous message briefly to ensure announcement
      regionRef.current.textContent = '';
      
      // Set new message after a brief delay
      const timer = setTimeout(() => {
        if (regionRef.current) {
          regionRef.current.textContent = message;
          onAnnounced?.();
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [message, onAnnounced]);

  return (
    <div
      ref={regionRef}
      aria-live={priority}
      aria-atomic={atomic}
      aria-relevant={relevant}
      className="sr-only"
    />
  );
}

// Hook for managing screen reader announcements
export function useScreenReaderAnnouncements() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [priority, setPriority] = useState<'polite' | 'assertive'>('polite');
  const messageQueue = useRef<Array<{ message: string; priority: 'polite' | 'assertive' }>>([]);
  const isProcessing = useRef(false);

  const announce = useCallback((message: string, announcementPriority: 'polite' | 'assertive' = 'polite') => {
    messageQueue.current.push({ message, priority: announcementPriority });
    processQueue();
  }, []);

  const processQueue = useCallback(() => {
    if (isProcessing.current || messageQueue.current.length === 0) {
      return;
    }

    isProcessing.current = true;
    const { message, priority: msgPriority } = messageQueue.current.shift()!;
    
    setPriority(msgPriority);
    setCurrentMessage(message);

    // Clear after announcement is likely processed
    setTimeout(() => {
      setCurrentMessage('');
      isProcessing.current = false;
      processQueue(); // Process next message if any
    }, 1500);
  }, []);

  const announceImmediate = useCallback((message: string) => {
    announce(message, 'assertive');
  }, [announce]);

  const announcePolite = useCallback((message: string) => {
    announce(message, 'polite');
  }, [announce]);

  const clearQueue = useCallback(() => {
    messageQueue.current = [];
    setCurrentMessage('');
    isProcessing.current = false;
  }, []);

  return {
    announce: announcePolite,
    announceImmediate,
    announcePolite,
    clearQueue,
    currentMessage,
    priority
  };
}

// Page navigation announcements
export function PageNavigationAnnouncer() {
  const { announce } = useScreenReaderAnnouncements();

  useEffect(() => {
    // Announce page changes
    const handleRouteChange = () => {
      const pageTitle = document.title;
      const mainHeading = document.querySelector('h1')?.textContent;
      
      if (mainHeading) {
        announce(`Navigated to ${mainHeading}`);
      } else if (pageTitle) {
        announce(`Navigated to ${pageTitle}`);
      }
    };

    // Listen for route changes (Next.js)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.head) {
          const titleChange = Array.from(mutation.addedNodes).some(
            node => node instanceof HTMLElement && node.tagName === 'TITLE'
          );
          if (titleChange) {
            setTimeout(handleRouteChange, 100);
          }
        }
      });
    });

    observer.observe(document.head, { childList: true });

    return () => observer.disconnect();
  }, [announce]);

  return null;
}

// Form announcements
interface FormAnnouncementsProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export function FormAnnouncements({ formRef }: FormAnnouncementsProps) {
  const { announce, announceImmediate } = useScreenReaderAnnouncements();

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const formName = form.getAttribute('aria-label') || form.name || 'Form';
      announce(`${formName} submitted`);
    };

    const handleReset = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const formName = form.getAttribute('aria-label') || form.name || 'Form';
      announce(`${formName} reset`);
    };

    const handleInvalid = (e: Event) => {
      const field = e.target as HTMLInputElement;
      const fieldLabel = field.labels?.[0]?.textContent || field.name || 'Field';
      announceImmediate(`${fieldLabel} is invalid: ${field.validationMessage}`);
    };

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('reset', handleReset);
    form.addEventListener('invalid', handleInvalid, true);

    return () => {
      form.removeEventListener('submit', handleSubmit);
      form.removeEventListener('reset', handleReset);
      form.removeEventListener('invalid', handleInvalid, true);
    };
  }, [formRef, announce, announceImmediate]);

  return null;
}

// Loading state announcements
interface LoadingAnnouncementsProps {
  isLoading: boolean;
  loadingMessage?: string;
  completedMessage?: string;
  errorMessage?: string;
  error?: boolean;
}

export function LoadingAnnouncements({
  isLoading,
  loadingMessage = 'Loading',
  completedMessage = 'Content loaded',
  errorMessage = 'Loading failed',
  error = false
}: LoadingAnnouncementsProps) {
  const { announce, announceImmediate } = useScreenReaderAnnouncements();
  const previousLoading = useRef(isLoading);
  const previousError = useRef(error);

  useEffect(() => {
    // Announce loading start
    if (isLoading && !previousLoading.current) {
      announce(loadingMessage);
    }

    // Announce loading completion
    if (!isLoading && previousLoading.current && !error) {
      announce(completedMessage);
    }

    previousLoading.current = isLoading;
  }, [isLoading, loadingMessage, completedMessage, announce, error]);

  useEffect(() => {
    // Announce errors
    if (error && !previousError.current) {
      announceImmediate(errorMessage);
    }

    previousError.current = error;
  }, [error, errorMessage, announceImmediate]);

  return null;
}

// Search results announcements
interface SearchAnnouncementsProps {
  searchTerm: string;
  resultCount: number;
  isSearching: boolean;
  hasResults: boolean;
}

export function SearchAnnouncements({
  searchTerm,
  resultCount,
  isSearching,
  hasResults
}: SearchAnnouncementsProps) {
  const { announce } = useScreenReaderAnnouncements();
  const previousSearchTerm = useRef(searchTerm);
  const previousIsSearching = useRef(isSearching);

  useEffect(() => {
    // Announce search start
    if (isSearching && !previousIsSearching.current) {
      announce(`Searching for ${searchTerm}`);
    }

    // Announce search results
    if (!isSearching && previousIsSearching.current) {
      if (hasResults) {
        announce(`Found ${resultCount} result${resultCount !== 1 ? 's' : ''} for ${searchTerm}`);
      } else {
        announce(`No results found for ${searchTerm}`);
      }
    }

    previousIsSearching.current = isSearching;
    previousSearchTerm.current = searchTerm;
  }, [searchTerm, resultCount, isSearching, hasResults, announce]);

  return null;
}

// Dynamic content announcements
interface DynamicContentAnnouncementsProps {
  content: string;
  contentType?: string;
  priority?: 'polite' | 'assertive';
}

export function DynamicContentAnnouncements({
  content,
  contentType = 'content',
  priority = 'polite'
}: DynamicContentAnnouncementsProps) {
  const { announce, announceImmediate } = useScreenReaderAnnouncements();
  const previousContent = useRef(content);

  useEffect(() => {
    if (content && content !== previousContent.current) {
      const message = `${contentType} updated: ${content}`;
      
      if (priority === 'assertive') {
        announceImmediate(message);
      } else {
        announce(message);
      }
    }

    previousContent.current = content;
  }, [content, contentType, priority, announce, announceImmediate]);

  return null;
}

// Status announcements (success, error, warning, info)
interface StatusAnnouncementsProps {
  status: 'success' | 'error' | 'warning' | 'info' | null;
  message: string;
  onAnnounced?: () => void;
}

export function StatusAnnouncements({ 
  status, 
  message, 
  onAnnounced 
}: StatusAnnouncementsProps) {
  const { announce, announceImmediate } = useScreenReaderAnnouncements();

  useEffect(() => {
    if (status && message) {
      const statusMessage = `${status}: ${message}`;
      
      if (status === 'error') {
        announceImmediate(statusMessage);
      } else {
        announce(statusMessage);
      }
      
      onAnnounced?.();
    }
  }, [status, message, announce, announceImmediate, onAnnounced]);

  return null;
}

// Progress announcements
interface ProgressAnnouncementsProps {
  progress: number;
  total: number;
  label?: string;
  announceInterval?: number; // Announce every N steps
}

export function ProgressAnnouncements({
  progress,
  total,
  label = 'Progress',
  announceInterval = 25 // Announce at 25% intervals
}: ProgressAnnouncementsProps) {
  const { announce } = useScreenReaderAnnouncements();
  const lastAnnouncedProgress = useRef(-1);

  useEffect(() => {
    const percentage = Math.round((progress / total) * 100);
    const shouldAnnounce = percentage % announceInterval === 0 && 
                          percentage !== lastAnnouncedProgress.current &&
                          percentage >= 0 && percentage <= 100;

    if (shouldAnnounce) {
      announce(`${label}: ${percentage}% complete`);
      lastAnnouncedProgress.current = percentage;
    }

    // Always announce completion
    if (progress === total && lastAnnouncedProgress.current !== 100) {
      announce(`${label} completed`);
      lastAnnouncedProgress.current = 100;
    }
  }, [progress, total, label, announceInterval, announce]);

  return null;
}

// Main screen reader announcements provider
interface ScreenReaderProviderProps {
  children: React.ReactNode;
}

export function ScreenReaderProvider({ children }: ScreenReaderProviderProps) {
  const { currentMessage, priority } = useScreenReaderAnnouncements();

  return (
    <>
      {children}
      <LiveRegion 
        message={currentMessage} 
        priority={priority}
        atomic={true}
        relevant="all"
      />
      <PageNavigationAnnouncer />
    </>
  );
}

// Hook for custom announcements
export function useAnnouncement() {
  const { announce, announceImmediate, clearQueue } = useScreenReaderAnnouncements();

  const announceSuccess = useCallback((message: string) => {
    announce(`Success: ${message}`);
  }, [announce]);

  const announceError = useCallback((message: string) => {
    announceImmediate(`Error: ${message}`);
  }, [announceImmediate]);

  const announceWarning = useCallback((message: string) => {
    announce(`Warning: ${message}`);
  }, [announce]);

  const announceInfo = useCallback((message: string) => {
    announce(`Info: ${message}`);
  }, [announce]);

  return {
    announce,
    announceImmediate,
    announceSuccess,
    announceError,
    announceWarning,
    announceInfo,
    clearQueue
  };
}

// ARIA live region with visual indicator (for development/testing)
interface VisualLiveRegionProps {
  message: string;
  priority: 'polite' | 'assertive';
  showVisual?: boolean;
}

export function VisualLiveRegion({ 
  message, 
  priority, 
  showVisual = process.env.NODE_ENV === 'development' 
}: VisualLiveRegionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <LiveRegion message={message} priority={priority} />
      {showVisual && isVisible && (
        <div className={cn(
          'fixed bottom-4 right-4 p-2 rounded text-sm text-white z-50 transition-opacity',
          priority === 'assertive' ? 'bg-red-600' : 'bg-blue-600'
        )}>
          <div className="font-semibold mb-1">
            Screen Reader ({priority}):
          </div>
          <div>{message}</div>
        </div>
      )}
    </>
  );
}