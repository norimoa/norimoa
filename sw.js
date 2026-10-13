/* 놀이모아 서비스워커 — 네트워크 우선 + 오프라인 대비 캐시
   (항상 최신을 먼저 받아오고, 인터넷이 안 될 때만 캐시로 보여줘요) */
const CACHE = 'nolimoa-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;            // 저장/업로드 등은 그대로 통과
  e.respondWith(
    fetch(req).then(res => {
      try {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      } catch (_) {}
      return res;
    }).catch(() => caches.match(req))           // 오프라인이면 캐시에서
  );
});
