'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only register service worker in production and if supported
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      console.log('Registering service worker...');
      
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none' // Always check for updates
      });

      console.log('Service Worker registered successfully:', registration);

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        console.log('Service Worker update found');
        const newWorker = registration.installing;
        
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('New service worker installed, update available');
              
              // Notify user about update
              if (window.confirm('A new version is available. Reload to update?')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        }
      });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Message from service worker:', event.data);
        
        if (event.data.type === 'SW_UPDATE_AVAILABLE') {
          console.log('Service worker update available');
          // This could trigger a toast notification instead of alert
        }
      });

      // Handle controller changes (when service worker takes control)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service worker controller changed');
        // Optionally reload the page
        window.location.reload();
      });

      // Check for waiting service worker on page load
      if (registration.waiting) {
        console.log('Service worker is waiting');
        // Could show update prompt here
      }

      // Periodic update checks (every 24 hours)
      setInterval(() => {
        registration.update();
      }, 24 * 60 * 60 * 1000);

    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  };

  // This component doesn't render anything
  return null;
}

// Hook for interacting with service worker
export function useServiceWorker() {
  const isSupported = typeof window !== 'undefined' && 'serviceWorker' in navigator;
  
  const getRegistration = async () => {
    if (!isSupported) return null;
    return await navigator.serviceWorker.getRegistration();
  };

  const getCacheStatus = async () => {
    if (!isSupported) return null;
    
    const registration = await getRegistration();
    if (!registration?.active) return null;

    return new Promise((resolve) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        resolve(event.data);
      };

      registration.active?.postMessage(
        { type: 'GET_CACHE_STATUS' },
        [messageChannel.port2]
      );
    });
  };

  const clearCache = async () => {
    if (!isSupported || !('caches' in window)) return false;
    
    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      return true;
    } catch (error) {
      console.error('Failed to clear cache:', error);
      return false;
    }
  };

  const forceUpdate = async () => {
    if (!isSupported) return false;
    
    const registration = await getRegistration();
    if (registration) {
      registration.update();
      return true;
    }
    return false;
  };

  return {
    isSupported,
    getRegistration,
    getCacheStatus,
    clearCache,
    forceUpdate
  };
}