// Arizona Family Law Wiki - Service Worker for Offline Support

const CACHE_NAME = 'azlaw-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/core-topics/divorce/',
  '/core-topics/child-custody/',
  '/core-topics/child-support/',
  '/core-topics/property-division/',
  '/core-topics/spousal-maintenance/',
  '/resources/forms-and-documents/',
  '/resources/child-support-calculator/',
  '/reference/faq/',
  '/reference/glossary/',
  // Add critical CSS and JS
  '/assets/stylesheets/main.css',
  '/assets/javascripts/bundle.js',
  '/assets/stylesheets/custom.css',
  '/assets/javascripts/custom.js',
  '/assets/javascripts/ux-enhancements.js'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Cache frequently accessed pages
                if (event.request.url.includes('/core-topics/') || 
                    event.request.url.includes('/resources/') ||
                    event.request.url.includes('/reference/')) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          }
        );
      })
  );
});

// Update Service Worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for saved data
self.addEventListener('sync', event => {
  if (event.tag === 'sync-calculations') {
    event.waitUntil(syncCalculations());
  }
});

async function syncCalculations() {
  try {
    const db = await openDB();
    const calculations = await db.getAll('calculations');
    
    // Send calculations to server when online
    await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calculations)
    });
    
    // Clear synced data
    await db.clear('calculations');
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

// Simple IndexedDB wrapper
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('azlaw', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('calculations')) {
        db.createObjectStore('calculations', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}