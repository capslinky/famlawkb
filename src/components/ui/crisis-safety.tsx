'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Eye, EyeOff, Phone, ExternalLink, X } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface CrisisSafetyContextType {
  isPrivacyMode: boolean;
  setPrivacyMode: (enabled: boolean) => void;
  isCamouflageMode: boolean;
  setCamouflageMode: (enabled: boolean) => void;
  isDiscreteBrowsing: boolean;
  setDiscreteBrowsing: (enabled: boolean) => void;
  panicExit: () => void;
  quickHide: () => void;
  lastActivity: Date;
  resetActivity: () => void;
}

const CrisisSafetyContext = createContext<CrisisSafetyContextType | undefined>(undefined);

export function useCrisisSafety() {
  const context = useContext(CrisisSafetyContext);
  if (!context) {
    throw new Error('useCrisisSafety must be used within a CrisisSafetyProvider');
  }
  return context;
}

interface CrisisSafetyProviderProps {
  children: React.ReactNode;
  autoLogoutMinutes?: number;
}

export function CrisisSafetyProvider({ 
  children, 
  autoLogoutMinutes = 15 
}: CrisisSafetyProviderProps) {
  const [isPrivacyMode, setPrivacyMode] = useState(false);
  const [isCamouflageMode, setCamouflageMode] = useState(false);
  const [isDiscreteBrowsing, setDiscreteBrowsing] = useState(false);
  const [lastActivity, setLastActivity] = useState(new Date());
  const [showInactivityWarning, setShowInactivityWarning] = useState(false);

  // Track user activity
  const resetActivity = useCallback(() => {
    setLastActivity(new Date());
    setShowInactivityWarning(false);
  }, []);

  // Panic exit function
  const panicExit = useCallback(() => {
    // Clear localStorage for this domain
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear document title and favicon
    document.title = 'Weather - Local Forecast';
    
    // Redirect to a safe site
    window.location.href = 'https://weather.com';
  }, []);

  // Quick hide function
  const quickHide = useCallback(() => {
    if (isCamouflageMode) {
      setCamouflageMode(false);
    } else {
      setCamouflageMode(true);
    }
  }, [isCamouflageMode]);

  // Apply privacy mode effects
  useEffect(() => {
    if (isPrivacyMode) {
      // Change document title to something generic
      document.title = 'Arizona Government Resources';
      
      // Prevent history tracking
      if (window.history?.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      
      // Add meta tag to prevent caching
      const metaTag = document.createElement('meta');
      metaTag.httpEquiv = 'Cache-Control';
      metaTag.content = 'no-cache, no-store, must-revalidate';
      document.head.appendChild(metaTag);
      
      return () => {
        document.head.removeChild(metaTag);
      };
    }
  }, [isPrivacyMode]);

  // Apply camouflage mode
  useEffect(() => {
    if (isCamouflageMode) {
      document.title = 'Arizona Daily News - Local News & Weather';
      document.body.classList.add('camouflage-mode');
    } else {
      document.body.classList.remove('camouflage-mode');
    }
  }, [isCamouflageMode]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key for panic exit
      if (e.key === 'Escape' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        panicExit();
      }
      
      // Ctrl+H for quick hide
      if (e.key === 'h' && e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        quickHide();
      }
      
      // Ctrl+P for privacy toggle
      if (e.key === 'p' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        setPrivacyMode(!isPrivacyMode);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [panicExit, quickHide, isPrivacyMode]);

  // Track activity for auto-logout
  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    const handleActivity = () => {
      resetActivity();
    };

    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [resetActivity]);

  // Auto-logout timer
  useEffect(() => {
    const checkInactivity = () => {
      const now = new Date();
      const timeSinceActivity = now.getTime() - lastActivity.getTime();
      const warningTime = (autoLogoutMinutes - 2) * 60 * 1000; // 2 minutes before logout
      const logoutTime = autoLogoutMinutes * 60 * 1000;

      if (timeSinceActivity >= logoutTime) {
        panicExit();
      } else if (timeSinceActivity >= warningTime && !showInactivityWarning) {
        setShowInactivityWarning(true);
      }
    };

    const interval = setInterval(checkInactivity, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [lastActivity, autoLogoutMinutes, showInactivityWarning, panicExit]);

  return (
    <CrisisSafetyContext.Provider
      value={{
        isPrivacyMode,
        setPrivacyMode,
        isCamouflageMode,
        setCamouflageMode,
        isDiscreteBrowsing,
        setDiscreteBrowsing,
        panicExit,
        quickHide,
        lastActivity,
        resetActivity,
      }}
    >
      {children}
      <InactivityWarning 
        isVisible={showInactivityWarning}
        onContinue={resetActivity}
        onExit={panicExit}
      />
      <CrisisSafetyIndicators />
    </CrisisSafetyContext.Provider>
  );
}

// Inactivity warning modal
interface InactivityWarningProps {
  isVisible: boolean;
  onContinue: () => void;
  onExit: () => void;
}

function InactivityWarning({ isVisible, onContinue, onExit }: InactivityWarningProps) {
  const [countdown, setCountdown] = useState(120); // 2 minutes

  useEffect(() => {
    if (!isVisible) {
      setCountdown(120);
      return;
    }

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          onExit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, onExit]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-900">Session Timeout Warning</h2>
        </div>
        
        <p className="text-gray-600 mb-4">
          For your safety and privacy, you will be automatically logged out in{' '}
          <span className="font-mono font-bold text-orange-600">
            {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
          </span>
        </p>
        
        <div className="flex gap-3">
          <Button
            onClick={onContinue}
            variant="default"
            size="sm"
            fullWidth
          >
            Continue Session
          </Button>
          <Button
            onClick={onExit}
            variant="outline"
            size="sm"
            fullWidth
          >
            Exit Safely
          </Button>
        </div>
      </div>
    </div>
  );
}

// Crisis safety indicators
function CrisisSafetyIndicators() {
  const { isPrivacyMode, isCamouflageMode, isDiscreteBrowsing } = useCrisisSafety();

  if (!isPrivacyMode && !isCamouflageMode && !isDiscreteBrowsing) return null;

  return (
    <div className="fixed top-4 left-4 z-40 space-y-2">
      <AnimatePresence>
        {isPrivacyMode && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            <Shield className="w-4 h-4" />
            Privacy Mode
          </motion.div>
        )}
        
        {isCamouflageMode && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            <EyeOff className="w-4 h-4" />
            Camouflage Mode
          </motion.div>
        )}
        
        {isDiscreteBrowsing && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            <Eye className="w-4 h-4" />
            Discrete Mode
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Panic button component
interface PanicButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'floating' | 'inline';
}

export function PanicButton({ 
  className = '', 
  size = 'md',
  variant = 'floating'
}: PanicButtonProps) {
  const { panicExit } = useCrisisSafety();
  
  if (variant === 'floating') {
    return (
      <motion.div
        className={cn(
          'fixed bottom-4 right-4 z-50',
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          icon={<ExternalLink className="w-5 h-5" />}
          onClick={panicExit}
          variant="danger"
          size={size}
          aria-label="Quick exit to weather.com"
          className="shadow-lg"
        />
      </motion.div>
    );
  }

  return (
    <Button
      onClick={panicExit}
      variant="danger"
      size={size}
      leftIcon={<ExternalLink className="w-4 h-4" />}
      className={className}
    >
      Quick Exit
    </Button>
  );
}

// Safety mode toggle panel
interface SafetyModeToggleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SafetyModeToggle({ isOpen, onClose }: SafetyModeToggleProps) {
  const {
    isPrivacyMode,
    setPrivacyMode,
    isCamouflageMode,
    setCamouflageMode,
    isDiscreteBrowsing,
    setDiscreteBrowsing,
    panicExit,
  } = useCrisisSafety();

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
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl border w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" />
            <h2 className="text-lg font-semibold text-gray-900">Safety Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close safety settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Privacy Mode */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Privacy Mode</div>
              <div className="text-sm text-gray-500">Prevents history tracking</div>
            </div>
            <button
              onClick={() => setPrivacyMode(!isPrivacyMode)}
              className={cn(
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                isPrivacyMode ? 'bg-blue-600' : 'bg-gray-200'
              )}
              role="switch"
              aria-checked={isPrivacyMode}
            >
              <span
                className={cn(
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  isPrivacyMode ? 'translate-x-6' : 'translate-x-1'
                )}
              />
            </button>
          </div>

          {/* Camouflage Mode */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Camouflage Mode</div>
              <div className="text-sm text-gray-500">Looks like a news site</div>
            </div>
            <button
              onClick={() => setCamouflageMode(!isCamouflageMode)}
              className={cn(
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                isCamouflageMode ? 'bg-gray-600' : 'bg-gray-200'
              )}
              role="switch"
              aria-checked={isCamouflageMode}
            >
              <span
                className={cn(
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  isCamouflageMode ? 'translate-x-6' : 'translate-x-1'
                )}
              />
            </button>
          </div>

          {/* Discrete Browsing */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Discrete Browsing</div>
              <div className="text-sm text-gray-500">Minimal visual indicators</div>
            </div>
            <button
              onClick={() => setDiscreteBrowsing(!isDiscreteBrowsing)}
              className={cn(
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                isDiscreteBrowsing ? 'bg-purple-600' : 'bg-gray-200'
              )}
              role="switch"
              aria-checked={isDiscreteBrowsing}
            >
              <span
                className={cn(
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  isDiscreteBrowsing ? 'translate-x-6' : 'translate-x-1'
                )}
              />
            </button>
          </div>
        </div>

        {/* Emergency actions */}
        <div className="mt-6 pt-4 border-t space-y-3">
          <div className="text-sm text-gray-600 mb-3">
            <strong>Keyboard shortcuts:</strong>
            <br />
            • Ctrl+Shift+Esc: Quick exit
            <br />
            • Ctrl+H: Toggle camouflage
            <br />
            • Ctrl+Shift+P: Toggle privacy
          </div>
          
          <Button
            onClick={panicExit}
            variant="danger"
            size="sm"
            fullWidth
            leftIcon={<ExternalLink className="w-4 h-4" />}
          >
            Emergency Exit
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Emergency help button with crisis hotlines
export function EmergencyHelpButton({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const hotlines = [
    {
      name: 'National Domestic Violence Hotline',
      phone: '1-800-799-7233',
      text: 'Text START to 88788',
      website: 'https://www.thehotline.org',
    },
    {
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      website: 'https://www.crisistextline.org',
    },
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '1-800-273-8255',
      website: 'https://suicidepreventionlifeline.org',
    },
  ];

  return (
    <>
      <Button
        icon={<Phone className="w-4 h-4" />}
        onClick={() => setIsOpen(true)}
        variant="danger"
        aria-label="Emergency help and crisis hotlines"
        className={cn('shadow-lg', className)}
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl border w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Emergency Help</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {hotlines.map((hotline, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-1">{hotline.name}</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <a href={`tel:${hotline.phone}`} className="text-blue-600 hover:underline">
                          {hotline.phone}
                        </a>
                      </div>
                      {hotline.text && (
                        <div className="text-gray-600">{hotline.text}</div>
                      )}
                      {hotline.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-3 h-3" />
                          <a 
                            href={hotline.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>If you are in immediate danger, call 911.</strong>
                  <br />
                  These resources are confidential and available 24/7.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}