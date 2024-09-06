// Fires when the service worker is installed but once installed it won't fire again
self.addEventListener("install", e => {
    console.log("Install - new version!");
    e.waitUntil(
        // Open a cache called static
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./master.css", "./images/logo192.png"]);
        }) 
    )
})

// Intercept GET requests
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            // Search cache otherwise go to the network
            return response || fetch(e.request);
        })
    )
    console.log(`Intercepting fetch request for: ${e.request.url}`)
})