'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "37306105ed1a96a262603f288f56f603",
"assets/AssetManifest.bin.json": "9c2024d986c5906b9b50e07fd65cdd4e",
"assets/AssetManifest.json": "02714dd15d1a354d2199f3773e340084",
"assets/assets/imagens/backgrounds/00f9e146-3d88-46c9-937a-1d7058777e7a.png": "174ffee38dfe41240b1557f97af776f6",
"assets/assets/imagens/backgrounds/bg_dark.png": "ec833e1ca7b4beaf71d6d423ce1d5ec5",
"assets/assets/imagens/backgrounds/bg_dark_2.png": "b2cd35b05d902af7edf9a6f10a92679a",
"assets/assets/imagens/backgrounds/bg_light.png": "01a8e1bbe909349abb8c4a578bfbef58",
"assets/assets/imagens/backgrounds/bg_purple.jpg": "1d2b89707a2373c7e7ac52ff2d1f1357",
"assets/assets/imagens/backgrounds/bg_purple1.jpg": "ca829b632fd57fbc50a09aa40f3d888c",
"assets/assets/imagens/backgrounds/bg_purple_2.png": "18d716ba9dea3116f095e24975f667a8",
"assets/assets/imagens/celular_2.png": "04b98a3116702d1163805f2063fab7d6",
"assets/assets/imagens/celular_3.png": "f5ae923bca3a460f21ec43523495bdb6",
"assets/assets/imagens/celular_34.png": "c97644cb15ded1c6fcb932d667ee533f",
"assets/assets/imagens/hero_1.png": "6afbe64453c979661dad93f4f33166d2",
"assets/assets/imagens/hero_2.png": "219fe6b96d8b3aba67109ca5cfa6487d",
"assets/assets/imagens/hero_3.png": "bf62903210e64b6ecf311c6f241f71bd",
"assets/assets/imagens/icone_challenge.png": "c5551c53631d4ccfd50bd45396ef5fba",
"assets/assets/imagens/icone_challenge_3d.png": "ce46f7f8e69ed6bdc68730091d62d650",
"assets/assets/imagens/icone_solve_3d.png": "e9fed79cddc581899ed3445f3b60b179",
"assets/assets/imagens/icone_solve_3d_1.png": "8246d8db0691abaeb4440307767c3be0",
"assets/assets/imagens/icone_solve_3d_2.png": "c24b53f5b03f53ddaa97716b7a907028",
"assets/assets/imagens/icon_solve_3d.png": "88b757c3c02388ab9e3a821b9b9ba8df",
"assets/assets/imagens/logoG.png": "e1ac6e33194eea7d6bf12c1bc93740df",
"assets/assets/imagens/logo_icon.png": "e725e7a0483df87383958995f4221ed4",
"assets/assets/imagens/logo_white.png": "90544cfa4c8c07f8ba2b39111d23bc0f",
"assets/assets/imagens/tela_admin-2.png": "34059732532103a17a57c9ebeffaf88e",
"assets/assets/imagens/tela_admin.png": "d7df727a8235330ce89f11cd139c04e0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "21e4d17bbcfb0d261f6d5f4b42a6569d",
"assets/NOTICES": "2d9920ddb30eaf878dd6d18e47d4559f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8cb15371300eb128795e4f893af86b50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "496fecac065f99f47b15267852f653d6",
"/": "496fecac065f99f47b15267852f653d6",
"main.dart.js": "30a85dd8d5e888673d929b8c38d97c7a",
"manifest.json": "ab48b950c7ac4a6d06896379c46521d4",
"version.json": "846729e1354139efaf59504311d6b7cf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
