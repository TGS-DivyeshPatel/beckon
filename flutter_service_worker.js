'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "45e3dfd362bee3953239581c520baeee",
"index.html": "41ab7b066955e8e69c6a01e3b1d2f141",
"/": "41ab7b066955e8e69c6a01e3b1d2f141",
"firebase-messaging-sw.js": "a0e811c4026f9d800357378c84b0b77a",
"main.dart.js": "30418629a4362a7fc1696ecac26f1f80",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b787cc0244298bebdf03ffd51d022ba",
"assets/dotenv": "7453d86259b7c3db2a2230bdbf2947ac",
"assets/AssetManifest.json": "c1f76a562ff5971063eeb46cce63668f",
"assets/NOTICES": "0b08e3c50ff52aa5785fb032b02c5d5f",
"assets/FontManifest.json": "3c77a1bf5ccba4cdc512dca065e8e726",
"assets/AssetManifest.bin.json": "6a3598a2707de16b40ea2f162ac29138",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "64fd7069181b5ddae53f81dd4b0255e4",
"assets/fonts/MaterialIcons-Regular.otf": "54739e6ed1441f6678b51758c00b59f0",
"assets/assets/images/booking.png": "366fd6041e49e026022cb81cd14a1b77",
"assets/assets/images/animation1.json": "c72e4739a557188090adff505468967f",
"assets/assets/images/giftbox.png": "0c70ab9eca8952005817bf61deb38c48",
"assets/assets/images/gpay.png": "e2cd01ef29aee75b8860a2b789cd14cc",
"assets/assets/images/book3.png": "736f6f21e5d6918d36e4b0ad4cec4147",
"assets/assets/images/service.png": "12431d7014309af27318c1704a0c76d8",
"assets/assets/images/spinner.gif": "4885d9cde779f405ac6e5d186cb0133e",
"assets/assets/images/map.jpg": "7819a7fc4cf4154da0c42a7b74813244",
"assets/assets/images/book2.png": "42348aa074db0e4202c06e9ea987a7e7",
"assets/assets/images/login-image.png": "e45f05c3c16a0c66cf3c0cf4dd187fb0",
"assets/assets/images/book4.png": "9f169064f34aefacfe14b14fc9f5dc3a",
"assets/assets/images/cctv.png": "d1c5080303b6b97c40be7fff10295ea8",
"assets/assets/images/placeholder.png": "0cadee66dffd8ca3b2d4836bb70af835",
"assets/assets/images/hdd.png": "3961cc5dbd8803a2d52b5a6b8b5ba74a",
"assets/assets/images/logo.png": "6be69d2788a3506cd2e8c57739e41141",
"assets/assets/images/calendar.png": "dba9e53c1d65f4d2ed50ae2e0f7ab8af",
"assets/assets/images/profile.jpg": "07c69722fc6ada6a42559e2e9cdb8803",
"assets/assets/images/paytm.png": "5ad2be032bb2158ba27b8f51d57832f8",
"assets/assets/images/playstore.png": "efd1460d14ccfee268062aa10909aa27",
"assets/assets/images/animation2.json": "8f7ed6935f49dfab69b9fd51a472746b",
"assets/assets/images/no_internet.jpg": "f89d1e47bc69387b90581917c107c03a",
"assets/assets/icons/faqs.png": "780e7153adf3b1deed5efc645534005e",
"assets/assets/icons/grid.svg": "ba949572bae0980d514de43cf63f3afc",
"assets/assets/icons/info.png": "3c8cccd85b9dc7292a3de5becc0319f8",
"assets/assets/icons/loader.png": "ede922ba485056332f746679de70a707",
"assets/assets/icons/check.png": "d0843683957cf71ddedbf6eeace1b0ca",
"assets/assets/icons/plus.png": "b59503e11bbefbc27e0d9409b06e63f6",
"assets/assets/icons/support.png": "1802c5d0d11474f56c6f12abb6c2163b",
"assets/assets/icons/booking.png": "814d4250623d8720ed9d44da68329b75",
"assets/assets/icons/user.svg": "551688c000af702c54a1e9687365a1a2",
"assets/assets/icons/dashboard.png": "ea41280ada8053f6edde9bc47d8b0786",
"assets/assets/icons/bell.png": "0ccdea7c74fcec468ad0a45e0bdace24",
"assets/assets/icons/aboutus.png": "528707b9c7262066b67eca6f53452b15",
"assets/assets/icons/contact-book.png": "3d96f1e51e935cf512e8377a12185b56",
"assets/assets/icons/wallet.png": "12a170fd33a3e52112b1671d48ca5d1d",
"assets/assets/icons/biometric.png": "b2c75128bee43627968468e398416ff4",
"assets/assets/icons/home.svg": "623cb32823803dbd73d117d29e871922",
"assets/assets/icons/time.png": "2b465cf5c6ee137d217a440310b9d915",
"assets/assets/icons/privacyIcon.png": "b4fb540106cfccae8ed5c212339c114f",
"assets/assets/icons/contact-mail.png": "0d741ab723d0a918dbe2aad8c6ed7235",
"assets/assets/icons/terms.png": "19ea77f5225b7a9875fd194002094405",
"assets/assets/icons/suggestions.png": "81fa946d00e22461a01ccc03d8982138",
"assets/assets/icons/referral.png": "549d923a34bdc092c1c8b6a9af8991d3",
"assets/assets/icons/cart.svg": "7b413fab7abe9ea155577be5f601ce39",
"assets/assets/icons/download.svg": "7c3cd5cc61f19028bf58f8cb1aa2fcfe",
"assets/assets/icons/logout.png": "13502435559ee29f127b9357ad6338fe",
"assets/assets/icons/user.png": "b1e39c736e90b1fb43669b1eea1e937d",
"assets/assets/icons/information.png": "5ef3ce5794d2391fc0204a7e755f1d23",
"assets/assets/icons/cctv.png": "39fddee63473d3921e7068ea93a330c6",
"assets/assets/icons/passwordIcon.png": "059952bb1892ba8386a937d35328f032",
"assets/assets/icons/privacy.png": "590619d7fba1596217ca7c046ec9a3aa",
"assets/assets/icons/minus-sign.png": "dac87f7bdf1a0fcd8125aae264f7f945",
"assets/assets/icons/menu.png": "f6833542110f761958f7f5d3fe50875a",
"assets/assets/icons/password.png": "2a74556861e3d92741d0d3cf25a765ef",
"assets/assets/icons/confirm.png": "cc10601414cd8cc7e2b775888806c70b",
"assets/assets/icons/cctv-camera.png": "dba10789b318f9aeace18940d946257a",
"assets/assets/icons/coupon.svg": "a5e214b9f13c33f764b5f23ce1c55495",
"assets/assets/icons/privacy-policy.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/assets/icons/laptop.png": "bf4b9519ca5a8ce996cfed73679ced84",
"assets/assets/icons/calendar.png": "0a0e008876bda565aedb65fd6c27756a",
"assets/assets/icons/refer.png": "2f286769d51725e31b14bcf3c8c8d199",
"assets/assets/icons/edit.svg": "c44b89e7ab23201e0741e9580727bccf",
"assets/assets/icons/share.png": "9cc0fe5dbc30efa775e4727fc9678158",
"assets/assets/icons/profile.png": "31945f335780e6d1f7c97a9acc43eeb3",
"assets/assets/icons/mobile.png": "ed5f46a530b4fb2082cb892b84332497",
"assets/assets/icons/location.png": "d5cecf41629319eff22256dd543c3ad3",
"assets/assets/icons/terms-and-conditions.png": "4e3dfad7a7df295af6438db418a812b5",
"assets/assets/icons/pencil.png": "88d7ad124d1dcefc7acb5044a0ac8e72",
"assets/assets/icons/computer.png": "c9e6ef9dba9887e41e790cf98653b407",
"assets/assets/icons/about-us.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/assets/icons/edit.png": "87f64a5ba2bfc81cf199025fa86e5dd4",
"assets/assets/icons/checklist.png": "16a505d7ee2061bcc299bf0332a0398b",
"assets/assets/icons/map-pin.svg": "d5e0072ad98e046e93d69253796e7247",
"assets/assets/icons/camera.png": "ebbef37a013debd491d6289f21908e37",
"assets/assets/icons/feedback.png": "41defac5a66d9d157f4b6c018319c6ea",
"assets/assets/icons/chevron-left.svg": "4ce304dca87786d6a2201e30f4571b53",
"assets/assets/icons/close.png": "03e4f870e030d95b69277e13047d15ef",
"assets/assets/ringtone/bell_tipo.mp3": "bcd8fa56f96d3b3da7b9f6c4cb812586",
"assets/assets/ringtone/marimba_soft.mp3": "b7f15877baf60957b0845d1ab408ebc1",
"assets/assets/ringtone/bells_ringtone.mp3": "205a8cfec4b583436bc1192df4546edc",
"assets/assets/ringtone/outgoing_ringtone.mp3": "90843f2d0f9b670ac93c7d58f8f40857",
"assets/assets/ringtone/soft_ringtone.mp3": "5ea33a39159110a20d0686c6fd498ab3",
"assets/assets/ringtone/nice_bells.mp3": "3334a805653613a0e3fed3c6164c6cd8",
"assets/assets/ringtone/digital_bells.mp3": "fa702f109a38d24fc1d9f55ecb2d33f8",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
