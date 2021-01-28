const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];
const self = this; // this represents the service worker

// Installation of ServiceWorker
self.addEventListener("install", (event) => {
  // open the cache and add the files to the catch
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      // if there is something to fetch (we are online), then fetch it
      // otherwise, return offline.html
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the ServiceWorker
self.addEventListener("activate", (event) => {
  // remove all the previous caches and only keep the latest one
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
