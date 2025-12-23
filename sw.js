// sw.js - 这是一个最简单的 Service Worker，用于满足 PWA 安装标准
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 这里即使什么都不做，也是 PWA 必须要求的
});
