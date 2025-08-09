// Choose a cache name
const cacheName = 'Aug8th.v1';
// List the files to precache
const precacheResources = ['/', '/breathe.html', '/style.css', '/script.js', '/haptics.js', '/nudge.js', '/reminders.json', 'https://esm.sh/ios-haptics@0.1.0/es2022/ios-haptics.mjs', 'https://fonts.googleapis.com/css2?family=Nata+Sans:wght@100..900&display=swap', 'https://esm.sh/ios-haptics'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.debug('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});