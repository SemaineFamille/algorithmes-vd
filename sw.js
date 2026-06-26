const CACHE_NAME = 'algo-vd-cache-v4'; // 🔥 change la version !

const IMAGES = [
  "images/icon-192.png",
  "images/icon-512.png"
];

// Installation : cache des images
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(IMAGES))
  );
  self.skipWaiting();
});

// Activation : supprime les anciens caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch : images depuis cache
self.addEventListener("fetch", (e) => {
  if (e.request.destination === "image") {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
  }
});
