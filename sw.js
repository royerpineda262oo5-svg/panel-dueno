// Service worker mínimo: requerido para que la app sea instalable.
// Pasa todas las peticiones directo a la red (los datos siempre en vivo).
self.addEventListener('install', function(e) { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e) { /* passthrough: red directa */ });
