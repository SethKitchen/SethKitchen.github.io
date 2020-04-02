'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "182cb23efd2d909715aeac5de86a4221",
"/assets/FontManifest.json": "92b5cae09039cd19e250711d4a3dafda",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/lib/themes/def/assets/android-icon-144x144.png": "8c199e7d187715e22e7c359876c854cc",
"/assets/lib/themes/def/assets/android-icon-168x168.png": "f89bf06d3a398b112638a66279b3acb4",
"/assets/lib/themes/def/assets/android-icon-192x192.png": "1c761d4c8a25766c12a537163e23d992",
"/assets/lib/themes/def/assets/android-icon-48x48.png": "c30eba784a2730dedd1b77e8cd92ef0a",
"/assets/lib/themes/def/assets/android-icon-512x512.png": "84624c62dcd4c30f873e1f5a6c13c196",
"/assets/lib/themes/def/assets/android-icon-72x72.png": "44647da0e9ea2821a1b6afb987f1d19d",
"/assets/lib/themes/def/assets/android-icon-96x96.png": "2bb0863bb82d7dd312b39972fc407bcc",
"/assets/lib/themes/def/assets/apple-touch-icon.png": "390f2d2e1d8234cb1310bcedb790369e",
"/assets/lib/themes/def/assets/apple_splash_1125.png": "65c23ec9c3b8b01bb9294002fa33eabd",
"/assets/lib/themes/def/assets/apple_splash_1242.png": "983453daff97fbf607d9c3a12b0ed05d",
"/assets/lib/themes/def/assets/apple_splash_1536.png": "9af4f690b112740b204731cbad7ec46a",
"/assets/lib/themes/def/assets/apple_splash_1668.png": "5f82f534791227865f9e695af0bf1224",
"/assets/lib/themes/def/assets/apple_splash_2048.png": "edc82c3e96d3d86e5a901c9c2eba3e45",
"/assets/lib/themes/def/assets/apple_splash_640.png": "e72960443b47441f7dfc6dfb7ebc34be",
"/assets/lib/themes/def/assets/apple_splash_750.png": "23f497ddabfc87c971126300d5022b3c",
"/assets/lib/themes/def/assets/ban2.jpg": "6f68b09b58a8cb94f707d271b44fb2f2",
"/assets/lib/themes/def/assets/ban3.jpg": "97f6a8a03856fab95693359f27265532",
"/assets/lib/themes/def/assets/collection.jpg": "54a20441adc266a16a2ace9ff2785733",
"/assets/lib/themes/def/assets/favicon-16x16.png": "b08222782854c9b22d63ffa455f20739",
"/assets/lib/themes/def/assets/favicon-32x32.png": "65cd0f8a82d2d512d2f62772e7e952e1",
"/assets/lib/themes/def/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"/assets/lib/themes/def/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"/assets/lib/themes/def/assets/full_width_banner.jpg": "f78d4389e4f8375829587af00c10e858",
"/assets/lib/themes/def/assets/iconbutton.png": "9e4e1544c1781e02320130464a5c680e",
"/assets/lib/themes/def/assets/ig/ig01.jpg": "4f01ca22d5a8c393a6df83361826b7db",
"/assets/lib/themes/def/assets/ig/ig02.jpg": "dfd1c6ace10cf04349d965c07fbfcd9a",
"/assets/lib/themes/def/assets/ig/ig03.jpg": "93c0d5463c25f255f8de87664e0074e5",
"/assets/lib/themes/def/assets/ig/ig04.jpg": "02d6875a0a26c88f25d16d9eed3ff387",
"/assets/lib/themes/def/assets/ig/ig05.jpg": "6c2bfab49755fcdfc53f5aa046bc22ab",
"/assets/lib/themes/def/assets/ig/ig06.jpg": "b27906e914e2e5ca19d7bc241b30174f",
"/assets/lib/themes/def/assets/Loading.png": "588a1ea7f5afb633138934c41f373cb4",
"/assets/lib/themes/def/assets/logo.png": "b2274ccef9c0ee135414c5b7b86ff0c2",
"/assets/lib/themes/def/assets/logo.svg": "7bac81cc44bd6caad2429694b509f291",
"/assets/lib/themes/def/assets/placeholder.jpg": "8678aed6582d277a4b10862b0be7c87d",
"/assets/lib/themes/def/assets/slide_01.jpg": "fe2e2e30284e702502ec7001b7aa5db0",
"/assets/lib/themes/def/assets/slide_02.jpg": "f479f122ece29ea84b0f78f8cc1275c5",
"/assets/lib/themes/def/assets/slide_03.jpg": "863ceaa72a1cefc7bbd3d7013a0426a3",
"/assets/LICENSE": "c2565553320e0d382bec93001bbad338",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "598832f126d9f69787b78150915b35f8",
"/main.dart.js": "964bbf48ac15f12fa524153f2bfa34c7",
"/manifest.json": "b583ddc0a2da0fb9cd8ac0ac6441f3b6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
