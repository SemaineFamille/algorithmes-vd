const CACHE = "algo-vd-v1";
const ASSETS = [
  "/algorithmes-vd/",
  "/algorithmes-vd/index.html",
  "/algorithmes-vd/app.js",
  "/algorithmes-vd/style.css",
  "/algorithmes-vd/app.webmanifest",
  "/algorithmes-vd/images/icon-192.png",
  "/algorithmes-vd/images/icon-512.png"
];

// Installation : mise en cache des fichiers essentiels
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activation : supprime les anciens caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache en priorité, réseau en fallback
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
