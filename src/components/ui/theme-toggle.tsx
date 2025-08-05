'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Monitor, Type, Contrast, Accessibility } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark' | 'system';
type FontSize = 'small' | 'medium' | 'large' | 'extra-large';
type ContrastMode = 'normal' | 'high';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  contrastMode: ContrastMode;
  setContrastMode: (mode: ContrastMode) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultFontSize?: FontSize;
  defaultContrastMode?: ContrastMode;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultFontSize = 'medium',
  defaultContrastMode = 'normal',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [fontSize, setFontSize] = useState<FontSize>(defaultFontSize);
  const [contrastMode, setContrastMode] = useState<ContrastMode>(defaultContrastMode);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedFontSize = localStorage.getItem('fontSize') as FontSize;
    const savedContrastMode = localStorage.getItem('contrastMode') as ContrastMode;
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';

    if (savedTheme) setTheme(savedTheme);
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedContrastMode) setContrastMode(savedContrastMode);
    setReducedMotion(savedReducedMotion);

    // Check system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && !savedReducedMotion) {
      setReducedMotion(true);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Determine if dark mode should be active
    let shouldBeDark = false;
    if (theme === 'dark') {
      shouldBeDark = true;
    } else if (theme === 'system') {
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDark(shouldBeDark);
    
    // Apply theme classes
    root.classList.remove('light', 'dark');
    root.classList.add(shouldBeDark ? 'dark' : 'light');
    
    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply font size changes
  useEffect(() => {
    const root = window.document.documentElement;
    const fontSizeMap = {
      small: '0.875',
      medium: '1',
      large: '1.125',
      'extra-large': '1.25',
    };
    
    root.style.setProperty('--font-size-multiplier', fontSizeMap[fontSize]);
    root.classList.remove('font-small', 'font-medium', 'font-large', 'font-extra-large');
    root.classList.add(`font-${fontSize}`);
    
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // Apply contrast mode changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('contrast-normal', 'contrast-high');
    root.classList.add(`contrast-${contrastMode}`);
    
    localStorage.setItem('contrastMode', contrastMode);
  }, [contrastMode]);

  // Apply reduced motion preference
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('reduce-motion', reducedMotion);
    
    localStorage.setItem('reducedMotion', reducedMotion.toString());
  }, [reducedMotion]);

  // Handle theme change
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  // Handle font size change
  const handleFontSizeChange = (newSize: FontSize) => {
    setFontSize(newSize);
  };

  // Handle contrast mode change
  const handleContrastModeChange = (newMode: ContrastMode) => {
    setContrastMode(newMode);
  };

  // Handle reduced motion change
  const handleReducedMotionChange = (reduced: boolean) => {
    setReducedMotion(reduced);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleThemeChange,
        fontSize,
        setFontSize: handleFontSizeChange,
        contrastMode,
        setContrastMode: handleContrastModeChange,
        reducedMotion,
        setReducedMotion: handleReducedMotionChange,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Simple theme toggle button
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <Button
      icon={getIcon()}
      onClick={toggleTheme}
      variant="ghost"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      className={className}
    />
  );
}

// Comprehensive accessibility panel
interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function AccessibilityPanel({ isOpen, onClose, className = '' }: AccessibilityPanelProps) {
  const {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    reducedMotion,
    setReducedMotion,
  } = useTheme();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn(
          'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'bg-white dark:bg-gray-900 rounded-lg shadow-xl border',
          'w-full max-w-md p-6 max-h-[80vh] overflow-y-auto',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close accessibility panel"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Theme Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Color Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'light' as const, label: 'Light', icon: Sun },
                { value: 'dark' as const, label: 'Dark', icon: Moon },
                { value: 'system' as const, label: 'System', icon: Monitor },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  className={cn(
                    'flex flex-col items-center gap-2 p-3 rounded-lg border transition-colors',
                    theme === value
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Type className="inline w-4 h-4 mr-1" />
              Font Size
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'small' as const, label: 'Small' },
                { value: 'medium' as const, label: 'Medium' },
                { value: 'large' as const, label: 'Large' },
                { value: 'extra-large' as const, label: 'Extra Large' },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setFontSize(value)}
                  className={cn(
                    'p-2 rounded-lg border text-sm transition-colors',
                    fontSize === value
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contrast Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Contrast className="inline w-4 h-4 mr-1" />
              Contrast
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'normal' as const, label: 'Normal' },
                { value: 'high' as const, label: 'High Contrast' },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setContrastMode(value)}
                  className={cn(
                    'p-2 rounded-lg border text-sm transition-colors',
                    contrastMode === value
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Reduced Motion */}
          <div>
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Reduce Motion
              </span>
              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={cn(
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                  reducedMotion ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                )}
                role="switch"
                aria-checked={reducedMotion}
              >
                <span
                  className={cn(
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  )}
                />
              </button>
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Reduces animations and transitions throughout the site
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            onClick={onClose}
            variant="outline"
            size="sm"
            fullWidth
          >
            Close
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Accessibility trigger button
export function AccessibilityTrigger({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        icon={<Accessibility className="w-4 h-4" />}
        onClick={() => setIsOpen(true)}
        variant="ghost"
        aria-label="Open accessibility settings"
        className={className}
      />
      <AccessibilityPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}