'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "20cd7a6f6a20fde5ec23017de596ea70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9d47e46d473996a4e3856799cad07e49",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f724c6539de9a39ddee6f5f69f094941",
".git/logs/refs/heads/main": "4cb3fa46b95c020b3b38d3cc62be5f3f",
".git/logs/refs/remotes/origin/main": "a80cbe014db170fa218fd1d5ee67b47f",
".git/objects/17/6ce6dbf41ad6e9ac27a247035e393d4c0b7afc": "6de9f55dfd15dd334f2d1fbb2ea44336",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d31b8a9be96518b8e3235447967b88394873f0": "58042e477080d812023c515849b78593",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d7/b48970114be63590319b1015a12fa5f9a1fc45": "8fd507217442829ba1738762dc23e743",
".git/objects/e0/cb343256e8cccae406b6eacc82b684b7d8f47b": "f004f8c57c29f131c4430948a3c184a2",
".git/refs/heads/main": "76a2d053bc1d627647282f01aa3b7993",
".git/refs/remotes/origin/main": "76a2d053bc1d627647282f01aa3b7993",
"assets/AssetManifest.json": "0e81564fa4c59838267fa1c85721eea5",
"assets/assets/fonts/FireflixSans-Icon.ttf": "7a708006d24cd319192d2adb30614567",
"assets/assets/fonts/FireflixSans-Regular.ttf": "56bd0039f10c24276d075aa9f765c28b",
"assets/assets/images/avend.jpg": "d7c190d6ed4c29316d6d19df9a8275c8",
"assets/assets/images/bbydriver.jpg": "474acec3b932f9b2ac57dbdd8332e940",
"assets/assets/images/blackPantherTitle.png": "951eb4ffd6c3e42e003781c3a28a3b28",
"assets/assets/images/br2049.jpg": "93e30f88077211a5fc327f93f6001f64",
"assets/assets/images/coco.jpg": "c0dafd4094a593b6213ad4bee451ef12",
"assets/assets/images/fireflix_icon.png": "aab3dacb01dbd95d3983d4938b558646",
"assets/assets/images/johnwick.jpg": "992307ee86a8655d9f7b26b13160e8e7",
"assets/assets/images/johnwickTitle.png": "172f75a584c569f413f9051a97eb1834",
"assets/assets/images/jwc3.jpg": "69fa6b9815ff75c3354ffc7dea4dea91",
"assets/assets/images/lionking.jpg": "78492a4f5062314c44a85440259e9a7b",
"assets/assets/images/login.jpg": "2fe1151df5537e6c837d120bc33fdc49",
"assets/assets/images/mi5.jpg": "f1f41c6bad488a120c757888252925a5",
"assets/assets/images/mi6.jpg": "ec57700d82b7f4417e57ec2a3314b79c",
"assets/assets/images/moana.jpg": "56c120b01aff6effd23742cf2a840bf4",
"assets/assets/images/rat.jpg": "2672204a2ddedbb16990f1a8c3083e99",
"assets/assets/images/scam1992.jpg": "ec54c1597438d822003650e60f2a5cd4",
"assets/assets/images/spdrman.jpg": "55e4959d9cd7575698f8d12d063effef",
"assets/assets/images/tenet.jpg": "a2e3aed249e4b36409106f310f27dde6",
"assets/assets/images/Tenet_Logo.png": "bb8312884508aff3aa71372bd3b345e0",
"assets/assets/images/thorragnarok.jpg": "4f468c647239b2c99d98011127d2c6d0",
"assets/assets/images/ts4.jpg": "74248c8ff69271fb2a2e6c53901e14b6",
"assets/assets/images/zootopia.jpg": "b612974a92a4cf40de59be4f4e1fb622",
"assets/FontManifest.json": "ee0cdeab39f3ab06a6be48e20c0e540b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "392ff4e4ca4a7de415eb897f0e580726",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f653e1cf6bbc292ff6d3bb9468a6569a",
"/": "f653e1cf6bbc292ff6d3bb9468a6569a",
"main.dart.js": "b996efab31b372cbdc437a4a6fefa154",
"manifest.json": "72e5e231358a6dd9d87adde59a9b180b",
"version.json": "2b2ada07d13bd103554afa325e5228c8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
