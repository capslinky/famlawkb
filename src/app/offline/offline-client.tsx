/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  WifiOff, 
  RefreshCw, 
  Shield, 
  BookOpen, 
  Phone,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function OfflinePageClient() {
  const [isOnline, setIsOnline] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [cachedContent, setCachedContent] = useState<string[]>([]);

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get last sync time from localStorage
    const lastSync = localStorage.getItem('lastSyncTime');
    if (lastSync) {
      setLastSyncTime(new Date(lastSync).toLocaleString());
    }

    // Get cached content info
    if ('serviceWorker' in navigator && 'caches' in window) {
      caches.open('arizona-family-law-v1').then(cache => {
        cache.keys().then(keys => {
          const urls = keys.map(key => {
            const url = new URL(key.url);
            return url.pathname;
          }).filter(path => {
            // Filter to show only main content pages
            return path.startsWith('/protection') || 
                   path.startsWith('/getting-divorced') ||
                   path.startsWith('/forms') ||
                   path.startsWith('/resources') ||
                   path.startsWith('/custody') ||
                   path === '/';
          });
          setCachedContent(urls);
        });
      }).catch(() => {
        // Fallback list if cache access fails
        setCachedContent([
          '/',
          '/protection/emergency',
          '/getting-divorced',
          '/forms',
          '/resources',
          '/custody'
        ]);
      });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRefresh = () => {
    if (isOnline) {
      window.location.reload();
    } else {
      // Try to refresh anyway - might work if connection restored
      window.location.reload();
    }
  };

  const handleRetryConnection = () => {
    // Force a network request to check connectivity
    fetch('/api/health', { cache: 'no-cache' })
      .then(() => {
        setIsOnline(true);
        window.location.reload();
      })
      .catch(() => {
        setIsOnline(false);
      });
  };

  const offlineResources = [
    {
      title: 'Emergency Protection',
      description: 'Immediate help for domestic violence situations',
      path: '/protection/emergency',
      icon: Shield,
      urgent: true
    },
    {
      title: 'Getting Divorced',
      description: 'Complete guide to divorce in Arizona',
      path: '/getting-divorced',
      icon: BookOpen,
      urgent: false
    },
    {
      title: 'Court Forms',
      description: 'Essential legal forms and documents',
      path: '/forms',
      icon: BookOpen,
      urgent: false
    },
    {
      title: 'Legal Resources',
      description: 'Comprehensive legal help and guidance',
      path: '/resources',
      icon: BookOpen,
      urgent: false
    }
  ];

  const emergencyContacts = [
    {
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      available: '24/7'
    },
    {
      name: 'Arizona Coalition to End Sexual Violence',
      number: '602-279-2980',
      available: 'Business Hours'
    },
    {
      name: 'Emergency Services',
      number: '911',
      available: '24/7'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <WifiOff className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">You're Offline</h1>
            <p className="text-orange-100">
              Your internet connection is unavailable, but some content is still accessible.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Connection Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {isOnline ? 'Connection Restored' : 'No Internet Connection'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isOnline ? 
                      'Your internet connection has been restored.' :
                      'Check your network settings and try again.'
                    }
                  </p>
                  {lastSyncTime && (
                    <p className="text-xs text-gray-500 mt-1">
                      Last synced: {lastSyncTime}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleRetryConnection}
                  variant="outline"
                  size="sm"
                  leftIcon={<RefreshCw className="w-4 h-4" />}
                >
                  Retry
                </Button>
                {isOnline && (
                  <Button
                    onClick={handleRefresh}
                    size="sm"
                    leftIcon={<RefreshCw className="w-4 h-4" />}
                  >
                    Refresh Page
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Offline Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Offline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offlineResources.map((resource, index) => {
              const Icon = resource.icon;
              const isAvailable = cachedContent.includes(resource.path);
              
              return (
                <motion.div
                  key={resource.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className={`p-4 transition-all ${
                    isAvailable 
                      ? 'hover:shadow-md cursor-pointer' 
                      : 'opacity-60'
                  } ${resource.urgent ? 'border-l-4 border-l-red-500' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        resource.urgent ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          resource.urgent ? 'text-red-600' : 'text-blue-600'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">
                            {resource.title}
                          </h3>
                          {isAvailable ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Clock className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {resource.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          {isAvailable ? 'Available offline' : 'Requires internet connection'}
                        </div>
                      </div>
                    </div>
                    
                    {isAvailable && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <a 
                          href={resource.path}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          View Content →
                        </a>
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 border-l-4 border-l-red-500">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Emergency Contacts (Available Offline)
              </h3>
            </div>
            
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{contact.name}</div>
                    <div className="text-sm text-gray-600">{contact.available}</div>
                  </div>
                  <a
                    href={`tel:${contact.number}`}
                    className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> These phone numbers work without internet connection. 
                If you're in immediate danger, call 911.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Tips for Offline Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tips for Using the App Offline
            </h3>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Previously viewed pages are automatically saved for offline access</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Essential legal information is always available offline</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Emergency contact information doesn't require internet</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Form data is saved locally and will sync when connection returns</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}