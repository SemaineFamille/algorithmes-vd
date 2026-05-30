const CACHE = "algo-vd-v1";
const IMAGES = [
  "/algorithmes-vd/images/icon-192.png",
  "/algorithmes-vd/images/icon-512.png"
];

// Installation : on met en cache uniquement les icônes
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(IMAGES)));
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

// Fetch : images depuis le cache, tout le reste depuis le réseau
self.addEventListener("fetch", (e) => {
  if (e.request.destination === "image") {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
  }
});
