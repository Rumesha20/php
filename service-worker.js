const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.php',
    '/styles.css',
    '/script.js',
    '/path/to/icon.png',
    '/path/to/icon-512.png'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request because it's a stream that can only be consumed once
                let fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response because it's a stream that can only be consumed once
                        let responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Delete outdated caches
                    return cacheName !== CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    // Do something when notification is clicked
    console.log('Notification clicked!');
});

self.addEventListener('offline', function(event) {
    // Do something when offline
    console.log('You are offline.');
});

self.addEventListener('online', function(event) {
    // Do something when online
    console.log('You are online.');
});
