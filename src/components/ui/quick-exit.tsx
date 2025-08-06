'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickExitProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  redirectUrl?: string;
  hotkey?: string;
  clearHistory?: boolean;
  className?: string;
}

export function QuickExit({
  position = 'top-right',
  redirectUrl = 'https://www.google.com',
  hotkey = 'Escape',
  clearHistory = true,
  className
}: QuickExitProps) {
  const [isVisible, setIsVisible] = useState(true);

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  const handleQuickExit = () => {
    // Replace current page in history
    if (clearHistory && typeof window !== 'undefined') {
      // Clear the current page from history
      window.location.replace(redirectUrl);
      
      // Try to clear additional history (browser-dependent)
      try {
        // Go back through history
        const historyLength = window.history.length;
        for (let i = 0; i < historyLength; i++) {
          window.history.back();
        }
      } catch (e) {
        // Some browsers may block this
      }
    } else {
      window.location.href = redirectUrl;
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (hotkey === 'Escape' && e.key === 'Escape') {
        handleQuickExit();
      } else if (e.key === hotkey) {
        handleQuickExit();
      } else if (hotkey.includes('+')) {
        // Handle combination keys like 'Ctrl+Q'
        const keys = hotkey.split('+').map(k => k.trim().toLowerCase());
        const ctrl = keys.includes('ctrl') || keys.includes('control');
        const alt = keys.includes('alt');
        const shift = keys.includes('shift');
        const key = keys[keys.length - 1];

        if (
          (ctrl ? e.ctrlKey : true) &&
          (alt ? e.altKey : true) &&
          (shift ? e.shiftKey : true) &&
          e.key.toLowerCase() === key
        ) {
          handleQuickExit();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hotkey]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Exit Button */}
      <button
        onClick={handleQuickExit}
        className={cn(
          'fixed z-50 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg',
          'px-4 py-2 font-medium text-sm transition-all duration-200',
          'hover:scale-105 active:scale-95',
          'flex items-center gap-2',
          positionClasses[position],
          className
        )}
        aria-label="Quick Exit - Leave this site immediately"
      >
        <X className="w-4 h-4" />
        <span className="hidden sm:inline">Quick Exit</span>
        <span className="sm:hidden">Exit</span>
      </button>

      {/* Mobile Touch Area - Larger for easier pressing */}
      <div className="sm:hidden">
        <button
          onClick={handleQuickExit}
          className={cn(
            'fixed z-50 bg-red-600 active:bg-red-700',
            'w-16 h-16 rounded-full shadow-lg',
            'flex items-center justify-center',
            position.includes('bottom') ? 'bottom-20' : 'top-20',
            position.includes('right') ? 'right-4' : 'left-4'
          )}
          aria-label="Quick Exit"
        >
          <X className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Keyboard Shortcut Indicator */}
      <div className={cn(
        'fixed z-40 bg-gray-900 text-white text-xs px-2 py-1 rounded',
        'opacity-0 hover:opacity-100 transition-opacity pointer-events-none',
        position.includes('top') ? 'top-14' : 'bottom-14',
        position.includes('right') ? 'right-4' : 'left-4'
      )}>
        Press {hotkey} to exit quickly
      </div>
    </>
  );
}

// Standalone function for immediate exit (can be called from anywhere)
export function quickExit(redirectUrl = 'https://www.google.com') {
  if (typeof window === 'undefined') return;
  
  // Replace current page in history
  window.location.replace(redirectUrl);
  
  // Try to clear additional history
  try {
    const historyLength = window.history.length;
    for (let i = 0; i < historyLength; i++) {
      window.history.back();
    }
  } catch (e) {
    // Some browsers may block this
  }
}