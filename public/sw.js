const CACHE_NAME = 'chirag-portfolio-v3'
const PRECACHE_URLS = JSON.parse('PRECACHE_MANIFEST')

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('chirag-portfolio-') && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle this deployed site's assets. CDN requests can have different
  // CORS modes, and an opaque cached response cannot safely satisfy them.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  // A fresh HTML document is preferred whenever there is a connection. If it
  // is unavailable, return the saved app shell so client-side routing works.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', copy)))
          return response
        })
        .catch(() => caches.match('./index.html')),
    )
    return
  }

  // Built JS, CSS, images and PDFs are precached at build time. Any same-origin
  // asset requested later is cached after its first successful response.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse

      return fetch(request).then((response) => {
        if (!response || (!response.ok && response.type !== 'opaque')) return response

        const copy = response.clone()
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)))
        return response
      }).catch(() => new Response('', { status: 503, statusText: 'Offline' }))
    }),
  )
})
