const staticMoreCoffee =  "more-coffee-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee1",
    "/images/coffee2",
    "/images/coffee3",
    "/images/coffee4",
    "/images/coffee5",
    "/images/coffee6",
    "/images/coffee7",
    "/images/coffee8",
    "/images/coffee9",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMoreCoffee).then(cache => {
            cache.addAll(assets)
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    );
});