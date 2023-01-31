const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.png",
  "/images/coffee2.png",
  "/images/coffee3.png",
  "/images/coffee4.png",
  "/images/coffee5.png",
  "/images/coffee6.png",
  "/images/coffee7.png",
  "/images/coffee8.png",
  "/images/coffee9.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})