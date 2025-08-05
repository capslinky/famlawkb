'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Wifi,
  WifiOff, 
  RefreshCw, 
  Bell, 
  BellOff,
  Smartphone,
  X,
  Check,
  AlertCircle
} from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { useToast } from './toast';
import { cn } from '@/lib/utils';

// PWA Install Prompt Component
interface InstallPromptProps {
  className?: string;
}

export function PWAInstallPrompt({ className = '' }: InstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    // Check if already installed
    if (typeof window !== 'undefined') {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isIOSStandalone = (window.navigator as any).standalone === true;
      setIsInstalled(isStandalone || isIOSStandalone);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Show prompt after user has been on site for a bit
      setTimeout(() => {
        if (!isInstalled) {
          setShowPrompt(true);
        }
      }, 30000); // Show after 30 seconds
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      showToast({
        type: 'success',
        title: 'App Installed!',
        description: 'You can now access the app from your home screen.'
      });
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled, showToast]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    
    setDeferredPrompt(null);
  };

  const dismissPrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // Don't show if already installed or dismissed recently
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) { // Don't show again for 7 days
        setShowPrompt(false);
      }
    }
  }, []);

  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className={cn('fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm', className)}
      >
        <Card className="p-4 shadow-lg border-l-4 border-l-primary-500">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 mb-1">Install App</h3>
              <p className="text-sm text-gray-600 mb-3">
                Get quick access to legal help. Works offline and includes crisis safety features.
              </p>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleInstall}
                  size="sm"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Install
                </Button>
                <Button 
                  onClick={dismissPrompt}
                  variant="ghost"
                  size="sm"
                >
                  Later
                </Button>
              </div>
            </div>
            
            <button
              onClick={dismissPrompt}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss install prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// Network Status Component
export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setShowStatus(true);
      showToast({
        type: 'success',
        title: 'Back online',
        description: 'Connection restored. Content will sync automatically.'
      });
      setTimeout(() => setShowStatus(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowStatus(true);
      showToast({
        type: 'warning',
        title: 'No internet connection',
        description: 'Some features may be limited. Previously viewed content is still available.'
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [showToast]);

  if (!showStatus) {
    return (
      <div className="fixed top-16 right-4 z-40 md:hidden">
        <div className={cn(
          'flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
          isOnline 
            ? 'bg-green-100 text-green-700' 
            : 'bg-orange-100 text-orange-700'
        )}>
          {isOnline ? (
            <Wifi className="w-3 h-3" />
          ) : (
            <WifiOff className="w-3 h-3" />
          )}
          {isOnline ? 'Online' : 'Offline'}
        </div>
      </div>
    );
  }

  return null;
}

// Service Worker Update Component
export function ServiceWorkerUpdate() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATE_AVAILABLE') {
          setShowUpdate(true);
        }
      });

      // Check for updates periodically
      const checkForUpdates = () => {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            registration.update();
          });
        });
      };

      // Check for updates every 30 minutes
      const updateInterval = setInterval(checkForUpdates, 30 * 60 * 1000);

      return () => clearInterval(updateInterval);
    }
  }, []);

  const handleUpdate = async () => {
    setIsUpdating(true);
    
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        
        for (const registration of registrations) {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          }
        }
        
        // Reload page after a brief delay
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error('Error updating service worker:', error);
      setIsUpdating(false);
      showToast({
        type: 'error',
        title: 'Update failed',
        description: 'Please refresh the page manually to get the latest version.'
      });
    }
  };

  if (!showUpdate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm"
      >
        <Card className="p-4 shadow-lg border-l-4 border-l-blue-500">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <RefreshCw className={cn('w-4 h-4 text-blue-600', isUpdating && 'animate-spin')} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 mb-1">Update Available</h3>
              <p className="text-sm text-gray-600 mb-3">
                A new version is available with important improvements and security updates.
              </p>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleUpdate}
                  size="sm"
                  loading={isUpdating}
                  leftIcon={!isUpdating ? <RefreshCw className="w-4 h-4" /> : undefined}
                >
                  {isUpdating ? 'Updating...' : 'Update Now'}
                </Button>
                <Button 
                  onClick={() => setShowUpdate(false)}
                  variant="ghost"
                  size="sm"
                  disabled={isUpdating}
                >
                  Later
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// Push Notifications Component
export function PushNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
      
      // Check if already subscribed
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          return registration.pushManager.getSubscription();
        }).then((subscription) => {
          setIsSubscribed(!!subscription);
        });
      }

      // Show prompt for important legal updates after user interaction
      const showNotificationPrompt = () => {
        if (Notification.permission === 'default') {
          setTimeout(() => setShowPrompt(true), 60000); // After 1 minute
        }
      };

      // Listen for user interaction
      const handleInteraction = () => {
        showNotificationPrompt();
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      };

      document.addEventListener('click', handleInteraction);
      document.addEventListener('keydown', handleInteraction);

      return () => {
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      };
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      showToast({
        type: 'error',
        title: 'Not supported',
        description: 'Push notifications are not supported in this browser.'
      });
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermission(permission);
      
      if (permission === 'granted') {
        // Subscribe to push notifications
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.ready;
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUBLIC_VAPID_KEY
          });
          
          setIsSubscribed(true);
          setShowPrompt(false);
          
          showToast({
            type: 'success',
            title: 'Notifications enabled',
            description: 'You\'ll receive important legal updates and deadline reminders.'
          });

          // Send subscription to server
          // await fetch('/api/subscribe', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(subscription)
          // });
        }
      } else {
        setShowPrompt(false);
        showToast({
          type: 'info',
          title: 'Notifications disabled',
          description: 'You can enable them later in your browser settings.'
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      showToast({
        type: 'error',
        title: 'Error',
        description: 'Failed to enable notifications. Please try again.'
      });
    }
  };

  const unsubscribe = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        
        if (subscription) {
          await subscription.unsubscribe();
          setIsSubscribed(false);
          
          showToast({
            type: 'info',
            title: 'Notifications disabled',
            description: 'You won\'t receive push notifications anymore.'
          });

          // Remove subscription from server
          // await fetch('/api/unsubscribe', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(subscription)
          // });
        }
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
      showToast({
        type: 'error',
        title: 'Error',
        description: 'Failed to disable notifications.'
      });
    }
  };

  if (!showPrompt || permission === 'denied') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <Card className="w-full max-w-md p-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Stay Updated on Important Legal Matters
            </h3>
            
            <p className="text-gray-600 mb-6">
              Get notified about court deadline reminders, law changes, and safety alerts. 
              We'll only send important updates.
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={requestPermission}
                className="w-full"
                leftIcon={<Bell className="w-4 h-4" />}
              >
                Enable Notifications
              </Button>
              
              <Button 
                onClick={() => setShowPrompt(false)}
                variant="outline"
                className="w-full"
              >
                Not Now
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              You can change this setting anytime in your browser preferences.
            </p>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// Offline Content Manager
export function OfflineContentManager() {
  const [offlineContent, setOfflineContent] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const { showToast } = useToast();

  const essentialPages = [
    { url: '/protection/emergency', title: 'Emergency Protection' },
    { url: '/getting-divorced', title: 'Getting Divorced' },
    { url: '/forms', title: 'Court Forms' },
    { url: '/resources', title: 'Resources' },
    { url: '/custody', title: 'Child Custody' }
  ];

  const downloadForOffline = async () => {
    if (!('serviceWorker' in navigator) || !('caches' in window)) {
      showToast({
        type: 'error',
        title: 'Not supported',
        description: 'Offline download is not supported in this browser.'
      });
      return;
    }

    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const cache = await caches.open('legal-content-v1');
      const totalPages = essentialPages.length;
      
      for (let i = 0; i < essentialPages.length; i++) {
        const page = essentialPages[i];
        await cache.add(page.url);
        setDownloadProgress(((i + 1) / totalPages) * 100);
        
        // Small delay to show progress
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      setOfflineContent(essentialPages.map(p => p.url));
      setIsDownloading(false);
      
      showToast({
        type: 'success',
        title: 'Content downloaded',
        description: 'Essential legal pages are now available offline.'
      });
    } catch (error) {
      console.error('Error downloading content:', error);
      setIsDownloading(false);
      showToast({
        type: 'error',
        title: 'Download failed',
        description: 'Failed to download content for offline use.'
      });
    }
  };

  const clearOfflineContent = async () => {
    try {
      await caches.delete('legal-content-v1');
      setOfflineContent([]);
      showToast({
        type: 'info',
        title: 'Offline content cleared',
        description: 'Downloaded content has been removed to free up space.'
      });
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">Offline Access</h3>
          <p className="text-sm text-gray-600">
            Download essential pages for offline viewing
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">
            {offlineContent.length} / {essentialPages.length}
          </div>
          <div className="text-xs text-gray-500">pages downloaded</div>
        </div>
      </div>

      {isDownloading && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
            <span>Downloading...</span>
            <span>{Math.round(downloadProgress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${downloadProgress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        {offlineContent.length === 0 ? (
          <Button
            onClick={downloadForOffline}
            disabled={isDownloading}
            className="w-full"
            leftIcon={<Download className="w-4 h-4" />}
          >
            {isDownloading ? 'Downloading...' : 'Download for Offline'}
          </Button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded">
              <Check className="w-4 h-4" />
              <span>Essential pages downloaded</span>
            </div>
            <Button
              onClick={clearOfflineContent}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Clear Downloaded Content
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

// PWA Provider Component
interface PWAProviderProps {
  children: React.ReactNode;
}

export function PWAProvider({ children }: PWAProviderProps) {
  return (
    <>
      {children}
      <PWAInstallPrompt />
      <NetworkStatus />
      <ServiceWorkerUpdate />
      <PushNotifications />
    </>
  );
}