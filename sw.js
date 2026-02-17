self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('bkcenter-store').then(function(cache) {
return cache.addAll([
'/',
'/index.html',
'/style.css',
'/order.html'
]);
})
);
});

self.addEventListener('fetch', function(e) {
e.respondWith(
caches.match(e.request).then(function(response) {
return response || fetch(e.request);
})
);
});
