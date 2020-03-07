/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4c735b7b50bfc6829deb42e5c546e37c"
  },
  {
    "url": "about/index.html",
    "revision": "dc770a92fa024c49d715308b1e17df7d"
  },
  {
    "url": "assets/css/0.styles.235e3e04.css",
    "revision": "a7446497a6b1a903d1f0bff94e43918b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90d5ce24.js",
    "revision": "bd0a77daae8152c31c19cd0c9da07e3a"
  },
  {
    "url": "assets/js/11.c8122141.js",
    "revision": "1e490000d21a2596d68e4f6e327714a7"
  },
  {
    "url": "assets/js/12.c4bdbe23.js",
    "revision": "78734dc35178982aa32f20b416f2ed18"
  },
  {
    "url": "assets/js/13.04483c99.js",
    "revision": "d6933553ab6aac860e4e444a730c56e5"
  },
  {
    "url": "assets/js/14.c722c837.js",
    "revision": "85229d11e13820b442194067a533fe06"
  },
  {
    "url": "assets/js/2.1368c320.js",
    "revision": "af353f2603577974feb2bcd7cb3fea3c"
  },
  {
    "url": "assets/js/3.006668b3.js",
    "revision": "fb3650215ead85dba4fc3073e8697fd5"
  },
  {
    "url": "assets/js/4.789a85f4.js",
    "revision": "f8a1fe2bd204ea4703aaa2370638744f"
  },
  {
    "url": "assets/js/5.37b1a6fc.js",
    "revision": "ff487203593ccac4dacadefe94f3a093"
  },
  {
    "url": "assets/js/6.d5ddb942.js",
    "revision": "a2ef9c6c6de6079f60367e3a36825786"
  },
  {
    "url": "assets/js/7.fee31048.js",
    "revision": "1318434dfec65f6d70fd4f2626132d8c"
  },
  {
    "url": "assets/js/8.d9cbb416.js",
    "revision": "11328f98823fa652a6f1649fa28eb04f"
  },
  {
    "url": "assets/js/9.2621643b.js",
    "revision": "28f5a13ed52fc885b672ddb0ea911188"
  },
  {
    "url": "assets/js/app.a879ced3.js",
    "revision": "d438954b90697905124599169c582a19"
  },
  {
    "url": "avator.png",
    "revision": "1fd46659c9a4989d32faee6d1954632b"
  },
  {
    "url": "css/css1.html",
    "revision": "8950ec3eb75162d27fe45a8ca9daa50f"
  },
  {
    "url": "css/css2.html",
    "revision": "e72bde609105ddcfc157ced2f354df1a"
  },
  {
    "url": "css/index.html",
    "revision": "c797075d2e957166b1e450e46325d1e1"
  },
  {
    "url": "index.html",
    "revision": "45655b891ea05bf91a6b4d38944e69f3"
  },
  {
    "url": "javascript/index.html",
    "revision": "43e876785448cace97f30e0b4adf2754"
  },
  {
    "url": "javascript/js1.html",
    "revision": "f87772cd86d317d31586088a307a1b0a"
  },
  {
    "url": "javascript/js2.html",
    "revision": "cc5861cb7be9c29f79a348e260f35f8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
