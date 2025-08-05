// Service Worker for Arizona Family Law Knowledge Base
// Provides offline caching, push notifications, and app update handling

const CACHE_NAME = 'arizona-family-law-v1';
const OFFLINE_PAGE = '/offline';

// Essential resources to cache immediately
const ESSENTIAL_RESOURCES = [
  '/',
  '/offline',
  '/protection/emergency',
  '/getting-divorced',
  '/forms',
  '/resources',
  '/custody',
  '/legal-disclaimer',
  '/reference/faq'
];

// Static assets to cache
const STATIC_ASSETS = [
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Pages that should be cached for offline use
  CACHE_FIRST: [
    /^\/$/,
    /^\/protection/,
    /^\/getting-divorced/,
    /^\/forms/,
    /^\/resources/,
    /^\/custody/,
    /^\/topics/,
    /^\/procedures/,
    /^\/modules/,
    /^\/legal-disclaimer/,
    /^\/reference/
  ],
  
  // API calls that should use network first
  NETWORK_FIRST: [
    /^\/api/,
    /^\/search/
  ],
  
  // Static assets that rarely change
  STALE_WHILE_REVALIDATE: [
    /\.(js|css|png|jpg|jpeg|svg|ico|woff|woff2)$/,
    /^\/icons/,
    /^\/images/
  ]
};

// Install event - cache essential resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching essential resources...');
        return cache.addAll([...ESSENTIAL_RESOURCES, ...STATIC_ASSETS]);
      })
      .then(() => {
        console.log('Essential resources cached successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch(error => {
        console.error('Failed to cache essential resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              // Delete old versions of the cache
              return cacheName.startsWith('arizona-family-law-') && 
                     cacheName !== CACHE_NAME;
            })
            .map(cacheName => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Old caches cleaned up');
        return self.clients.claim(); // Take control of all clients
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }
  
  // Determine cache strategy based on URL
  const strategy = getCacheStrategy(url.pathname);
  
  switch (strategy) {
    case 'CACHE_FIRST':
      event.respondWith(cacheFirst(request));
      break;
    case 'NETWORK_FIRST':
      event.respondWith(networkFirst(request));
      break;
    case 'STALE_WHILE_REVALIDATE':
      event.respondWith(staleWhileRevalidate(request));
      break;
    default:
      event.respondWith(networkFirst(request));
  }
});

// Cache-first strategy (for pages)
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      console.log('Serving from cache:', request.url);
      return cachedResponse;
    }
    
    console.log('Fetching and caching:', request.url);
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, serving offline page:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match(OFFLINE_PAGE);
      return offlineResponse || new Response('Offline', { status: 503 });
    }
    
    throw error;
  }
}

// Network-first strategy (for API calls)
async function networkFirst(request) {
  try {
    console.log('Network first for:', request.url);
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale-while-revalidate strategy (for static assets)
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Start network request in background
  const networkPromise = fetch(request)
    .then(networkResponse => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(error => {
      console.log('Network request failed:', error);
    });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    console.log('Serving stale from cache:', request.url);
    return cachedResponse;
  }
  
  // Wait for network if no cached version
  console.log('No cached version, waiting for network:', request.url);
  return networkPromise;
}

// Determine cache strategy based on URL
function getCacheStrategy(pathname) {
  // Check cache-first patterns (pages)
  if (CACHE_STRATEGIES.CACHE_FIRST.some(pattern => pattern.test(pathname))) {
    return 'CACHE_FIRST';
  }
  
  // Check network-first patterns (API)
  if (CACHE_STRATEGIES.NETWORK_FIRST.some(pattern => pattern.test(pathname))) {
    return 'NETWORK_FIRST';
  }
  
  // Check stale-while-revalidate patterns (static assets)
  if (CACHE_STRATEGIES.STALE_WHILE_REVALIDATE.some(pattern => pattern.test(pathname))) {
    return 'STALE_WHILE_REVALIDATE';
  }
  
  return 'NETWORK_FIRST'; // Default strategy
}

// Background sync for form submissions when offline
self.addEventListener('sync', event => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'form-submission') {
    event.waitUntil(syncFormSubmissions());
  }
});

// Handle form submissions when back online
async function syncFormSubmissions() {
  try {
    const cache = await caches.open('form-submissions');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        const response = await fetch(request);
        if (response.ok) {
          await cache.delete(request);
          console.log('Form submission synced:', request.url);
        }
      } catch (error) {
        console.error('Failed to sync form submission:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', event => {
  console.log('Push notification received:', event);
  
  const options = {
    body: 'You have important legal updates to review.',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    tag: 'legal-update',
    actions: [
      {
        action: 'view',
        title: 'View Updates',
        icon: '/icons/view-icon.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icons/dismiss-icon.png'
      }
    ],
    data: {
      url: '/'
    }
  };
  
  if (event.data) {
    try {
      const payload = event.data.json();
      options.body = payload.body || options.body;
      options.data.url = payload.url || options.data.url;
    } catch (error) {
      console.error('Failed to parse push payload:', error);
    }
  }
  
  event.waitUntil(
    self.registration.showNotification('Arizona Family Law', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'view' || !event.action) {
    const urlToOpen = event.notification.data?.url || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(clientList => {
          // Check if there's already a window open
          for (const client of clientList) {
            if (client.url.includes(self.location.origin) && 'focus' in client) {
              client.navigate(urlToOpen);
              return client.focus();
            }
          }
          
          // Open new window if none exists
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
        })
    );
  }
});

// Handle messages from the main thread
self.addEventListener('message', event => {
  console.log('Service Worker received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    
    // Notify clients that update is available
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'SW_UPDATE_AVAILABLE'
        });
      });
    });
  }
  
  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    caches.open(CACHE_NAME).then(cache => {
      cache.keys().then(keys => {
        event.ports[0].postMessage({
          type: 'CACHE_STATUS',
          cachedUrls: keys.map(key => key.url),
          cacheSize: keys.length
        });
      });
    });
  }
});

// Periodic cache cleanup (cleanup old entries)
self.addEventListener('periodicsync', event => {
  if (event.tag === 'cache-cleanup') {
    event.waitUntil(cleanupOldCache());
  }
});

// Clean up old cache entries
async function cleanupOldCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    const now = Date.now();
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
    
    for (const request of keys) {
      const response = await cache.match(request);
      const dateHeader = response.headers.get('date');
      
      if (dateHeader) {
        const cacheDate = new Date(dateHeader).getTime();
        if (now - cacheDate > maxAge) {
          console.log('Removing old cache entry:', request.url);
          await cache.delete(request);
        }
      }
    }
  } catch (error) {
    console.error('Cache cleanup failed:', error);
  }
}

// Error handling for unhandled promise rejections
self.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection in Service Worker:', event.reason);
  event.preventDefault();
});

console.log('Service Worker script loaded successfully');