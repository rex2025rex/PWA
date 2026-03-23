// Nombre 
const NOMBRE_CACHE = 'reloj-pwa-v7';

// Archivos que funcionan offline
const ARCHIVOS_PARA_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Evento de INSTALACIÓN: Se ejecuta la primera vez que se abre la app
self.addEventListener('install', evento => {
    evento.waitUntil(
        caches.open(NOMBRE_CACHE)
            .then(cache => {
                console.log('Service Worker: Guardando archivos en caché...');
                return cache.addAll(ARCHIVOS_PARA_CACHE);
            })
    );
});

// Evento FETCH: Se ejecuta cada vez que la app pide un archivo al servidor
self.addEventListener('fetch', evento => {
    evento.respondWith(
        caches.match(evento.request)
            .then(respuestaCaché => {
                // Si el archivo está en la caché, lo entrega. Si no, lo busca en internet.
                return respuestaCaché || fetch(evento.request);
            })
    );
});
