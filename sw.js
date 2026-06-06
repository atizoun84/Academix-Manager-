const CACHE_NAME = 'academix-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/configuration.html',
  '/saisie.html',
  '/tableau1.html',
  '/tableau2.html',
  '/tableau3.html',
  '/tableau4.html',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
