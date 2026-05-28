const CACHE_NAME = 'algo-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  caches.keys().then((names) => {
    for (let name of names) {
      caches.delete(name);
    }
  });
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
