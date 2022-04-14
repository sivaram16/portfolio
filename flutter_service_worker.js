'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "40f9cf474d18ee1aac100ec63dd51891",
"assets/assets/font/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/font/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/images/android.webp": "66d621f434509730a2eb66736a1c7def",
"assets/assets/images/beshoppi.png": "dbb9f8c4b47c9ea3c540a6ec20b461d1",
"assets/assets/images/bug.png": "3b33a07427267f3bab46205ccc69d91a",
"assets/assets/images/chrome.png": "159685ec7322bdce7d351c9b57289d88",
"assets/assets/images/crm.png": "ba72e5f90892a655921f5b4795f88696",
"assets/assets/images/dart.webp": "5c8830a571d0d131c3d2299eaa839564",
"assets/assets/images/draw.png": "a030f42e5c8726d7eb756672c4550650",
"assets/assets/images/drawing.png": "183e2490609407d59e37f70613aa3d2b",
"assets/assets/images/emart.webp": "9c842dac637ee97cd609bbc174a7e4b3",
"assets/assets/images/facebook.png": "10698249cb4420435122de4d1a387fd8",
"assets/assets/images/fast.png": "e57ec2a140f726e5b154824b7d9bee2b",
"assets/assets/images/feather.png": "dda39760dcd18a3509bb2c61a0d8954f",
"assets/assets/images/figma.webp": "0d2b98637c6b8be58f6a757d6daff38b",
"assets/assets/images/firebase.webp": "1195935aa7527bdcb79127a530743717",
"assets/assets/images/flutter.webp": "e302365cfbf20136f2c9584016292d5d",
"assets/assets/images/git.webp": "ac77fe193038e8a0fdea4ac4f7d4f3fc",
"assets/assets/images/github.png": "da6c534ff4f0c46203362974e4f1866e",
"assets/assets/images/heart.png": "fb71bca1b4bfd766a640573a2dd02800",
"assets/assets/images/home_icon_dark.webp": "9077905ed2145b2c75c92f7e49202fc5",
"assets/assets/images/home_icon_light.webp": "684bdec0b4ae484916b2bdd47d670d80",
"assets/assets/images/java.webp": "aab53baae035da30d8ee3519d02d1a19",
"assets/assets/images/library.webp": "08b0446e3bbf06308f56def4f850b196",
"assets/assets/images/linkedin.png": "8ad70f00ddc10234d2f740f7b5801885",
"assets/assets/images/linux.webp": "2c1eed98b8384d1c0bef67ed85993a28",
"assets/assets/images/marksmen_logo.png": "12a6a708ada2d2f61abcf93dfa4dea92",
"assets/assets/images/moon.png": "fb0c7412de1d0f2bc0c279290e882089",
"assets/assets/images/nodejs.png": "264a7ac7f4278b0a5a42fb032a53d4ff",
"assets/assets/images/nurse.webp": "f2c1c56160b1df29724e11a2d78546ad",
"assets/assets/images/od-back.png": "81e266cf17b9e890317bdb9d6123646d",
"assets/assets/images/od-fore.png": "6e22d8f7091e7f65faa5484818935408",
"assets/assets/images/pulse_logo.png": "c9f3f9257435d81987f6f68e778e797e",
"assets/assets/images/python.webp": "5f3a320090a07b5a96369073f5671b2f",
"assets/assets/images/reminder.png": "e6bea4368bcf330030c2549cde8f2d22",
"assets/assets/images/responsible.png": "cdc79ebdd5d5f9bc85c3b534bb8f733a",
"assets/assets/images/send.png": "e8414155686f805ace3c57a29c7398b7",
"assets/assets/images/settings.png": "c511f07ed0dbcc055697a132596fc06f",
"assets/assets/images/shield.png": "628c73ac06f312157a72bb3b9d2750ca",
"assets/assets/images/sivaram_pic.webp": "2d8d18ef54c87d57851e7a271f5399ab",
"assets/assets/images/slack.webp": "59350c0f1aaf673a8fa66b4db06274d3",
"assets/assets/images/sun.png": "e28bb856af583dc5d9a2ee8f2976d08e",
"assets/assets/images/teaching.webp": "799161783ec6b774f80fa2b17b642481",
"assets/assets/images/tracker.png": "cd0004a7f0a40c9f690f6b2b7586e30f",
"assets/assets/images/twitter.png": "b427be3c8f232266d3afb785460e62d6",
"assets/assets/images/water.webp": "281d225f09b9791d18fde75136c48e50",
"assets/assets/images/windows.webp": "c7439c4851b0f2a1c75e22a4a00f2fcc",
"assets/FontManifest.json": "818df66bd6b1275ae3b34c7a2791769c",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "64da8b420ed85e04698d0d202f6ed045",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "bf536fadd1f8dbd7c91a9a02fa4b688a",
"icons/Icon-192.png": "bf536fadd1f8dbd7c91a9a02fa4b688a",
"icons/Icon-512.png": "bf536fadd1f8dbd7c91a9a02fa4b688a",
"index.html": "9b349ebd600c559861f2b12d49fda857",
"/": "9b349ebd600c559861f2b12d49fda857",
"main.dart.js": "9408ce2c085e3ea3cbeed962fa3851df",
"manifest.json": "a3aee3efa6862e2ab226f93a9acff75a",
"version.json": "23bf5faa891eb0f0747127610c96a8cc"
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
