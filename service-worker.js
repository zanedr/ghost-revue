"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/ghost-revue/index.html","be4802040e6a41ff75c483881d4f728c"],["/ghost-revue/static/css/main.31d55162.css","cc9e89d6dbe65acffd5b08da2e502de8"],["/ghost-revue/static/js/main.7cbc1f2b.js","19b84017838d9578dcafa1835cc1a787"],["/ghost-revue/static/media/GLogo.f92dfb2e.svg","f92dfb2ec96cd489e62812c68c22b8b4"],["/ghost-revue/static/media/RLogo.3760df54.svg","3760df547ab1496278a87c48e31d9aa2"],["/ghost-revue/static/media/facebook.aa19a890.svg","aa19a890ed532e96ae14a9f43c47fd5f"],["/ghost-revue/static/media/facebookwhite.dedc0190.svg","dedc01909ab78ddbfc76ef108a668fa8"],["/ghost-revue/static/media/ghostlive-cropped.db620d6f.jpg","db620d6fabce46a5baf082ab3900155c"],["/ghost-revue/static/media/ghostrevue-bw-cleaner-small.a60fcb6b.svg","a60fcb6b04cdfa919806bf77e0bbcc00"],["/ghost-revue/static/media/ghostrevue-bw-cleaner.ee21781b.png","ee21781bac68ac754b0b661a78676f47"],["/ghost-revue/static/media/instagram.39a26959.svg","39a26959b8c252f24f9af31d2e05c1db"],["/ghost-revue/static/media/instagramwhite.1c0000aa.svg","1c0000aa2364d2d547ff8c664be72488"],["/ghost-revue/static/media/mail.e481ac64.svg","e481ac64566077803105cabb0edf3aaf"],["/ghost-revue/static/media/twitterwhite.447540e1.svg","447540e107267c8406e68fcd09c780ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/ghost-revue/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});