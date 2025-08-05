'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

export default function CrisisSafetyFeatures() {
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);
  const [showQuickExit] = useState(true);

  // Quick exit function
  const quickExit = useCallback(() => {
    // Clear any local storage data in privacy mode
    if (isPrivacyMode) {
      localStorage.clear();
      sessionStorage.clear();
    }
    
    // Clear browser history by replacing current page
    window.location.replace('https://weather.com');
  }, [isPrivacyMode]);

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        quickExit();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPrivacyMode, quickExit]);

  // Privacy mode effect
  useEffect(() => {
    if (isPrivacyMode) {
      // Change document title to something generic
      document.title = 'Arizona Government Resources';
      
      // Prevent browser from caching the page
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => {
            registration.unregister();
          });
        });
      }
    } else {
      // Restore normal title
      document.title = 'Arizona Family Law Guide - Free Legal Information';
    }

    return () => {
      // Cleanup on unmount
      if (isPrivacyMode) {
        document.title = 'Arizona Government Resources';
      }
    };
  }, [isPrivacyMode]);

  return (
    <>
      {/* Quick Exit Button - Fixed position for easy access */}
      {showQuickExit && (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          {/* Quick Exit Button */}
          <button
            onClick={quickExit}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            title="Quick Exit (Press ESC key)"
            aria-label="Quick exit to weather.com"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Exit (ESC)</span>
            <span className="sm:hidden">Exit</span>
          </button>

          {/* Privacy Mode Toggle */}
          <button
            onClick={() => setIsPrivacyMode(!isPrivacyMode)}
            className={`px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isPrivacyMode 
                ? 'bg-orange-600 hover:bg-orange-700 text-white focus:ring-orange-500' 
                : 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500'
            }`}
            title={isPrivacyMode ? 'Privacy mode active - no history tracking' : 'Enable privacy mode'}
            aria-label={isPrivacyMode ? 'Privacy mode is active' : 'Enable privacy mode'}
          >
            {isPrivacyMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {isPrivacyMode ? 'Private' : 'Privacy'}
            </span>
          </button>
        </div>
      )}

      {/* Privacy Mode Indicator */}
      {isPrivacyMode && (
        <div className="fixed bottom-4 left-4 z-40 bg-orange-100 border border-orange-400 text-orange-800 px-3 py-2 rounded-lg text-sm shadow-lg">
          <div className="flex items-center gap-2">
            <EyeOff className="w-4 h-4" />
            <span>Privacy mode active</span>
          </div>
          <div className="text-xs text-orange-600 mt-1">
            No history • Generic tab title • Data not saved
          </div>
        </div>
      )}

      {/* Safety Instructions - Only show on first visit */}
      <SafetyInstructions />
    </>
  );
}

function SafetyInstructions() {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Check if user has seen safety instructions before
    const hasSeenInstructions = localStorage.getItem('hasSeenSafetyInstructions');
    if (!hasSeenInstructions) {
      setShowInstructions(true);
    }
  }, []);

  const dismissInstructions = () => {
    localStorage.setItem('hasSeenSafetyInstructions', 'true');
    setShowInstructions(false);
  };

  if (!showInstructions) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Safety Features Available
            </h3>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <p>• <strong>Quick Exit:</strong> Press ESC key or click Exit button to instantly go to weather.com</p>
              <p>• <strong>Privacy Mode:</strong> Prevents history tracking and uses generic tab title</p>
              <p>• <strong>Safe Browsing:</strong> All features designed with your safety in mind</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-4">
              <p className="text-xs text-amber-800">
                <strong>Remember:</strong> If you&apos;re in immediate danger, call 911. These tools help protect your digital privacy while seeking legal information.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={dismissInstructions}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Got it
              </button>
              <button
                onClick={() => {
                  dismissInstructions();
                  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm transition-colors"
              >
                Exit now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}