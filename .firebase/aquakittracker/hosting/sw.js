if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const f=e=>a(e,c),o={module:{uri:c},exports:t,require:f};s[c]=Promise.all(i.map((e=>o[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8e3eea418b355e51599b9e42b45d925f"},{url:"/_next/static/29SEZVqq6mRCYKLYAJfBO/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/29SEZVqq6mRCYKLYAJfBO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/329adb58-01fedb1a4cc933c7.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/698-775c450dfdfbb565.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/934-fe6982d13ba64dd2.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/app/layout-c7b18aa1a1001ba7.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/app/page-fd2ee6f986b8ed25.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/bce60fc1-87e17c074df9f3ea.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/cacdea1d-d3be676f6e17d1f0.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/main-a2d04b6e86b669c7.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/main-app-a273a2c2d09532ed.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-235efd5b2218e747.js",revision:"29SEZVqq6mRCYKLYAJfBO"},{url:"/_next/static/css/0eae03c5409b9272.css",revision:"0eae03c5409b9272"},{url:"/_next/static/css/be3f222f6146a4b0.css",revision:"be3f222f6146a4b0"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/574b8eee21d0c580-s.p.woff2",revision:"4fb2ac836ce86d4d7ba530c1a81ac118"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0b262710c68177e-s.woff2",revision:"4c9f1da35dc7cbc949e408ecfd1fb0da"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/images/favicon.ico",revision:"e6af08752d883c93f9adce662b27671b"},{url:"/images/icons/apple-touch-icon.png",revision:"79464e32728a8cb34f54f39fd0cb8bb1"},{url:"/images/icons/icon.png",revision:"bb9dc54dd2be35089218950ece9123ed"},{url:"/images/icons/maskable_icon_x128.png",revision:"7257e342a5a2a3f8839e99b7bc1b2ab0"},{url:"/images/icons/maskable_icon_x192.png",revision:"c8fed7fbdcd2b4333544bea749d1c6b2"},{url:"/images/icons/maskable_icon_x384.png",revision:"5d98b870f1969119c826bfd4c25eeb35"},{url:"/images/icons/maskable_icon_x48.png",revision:"9425f0140a945fdf9f1cbca4e3d88600"},{url:"/images/icons/maskable_icon_x512.png",revision:"e3fda2f7cdf8d6feab7dbd4c16f7f313"},{url:"/images/icons/maskable_icon_x72.png",revision:"a2205fdf89f68e1243c41253948def7d"},{url:"/images/icons/maskable_icon_x96.png",revision:"1bd26c3da9c415042f849333dd3ec07e"},{url:"/images/screenshot.png",revision:"ed0d64ec08d0e3035bab9be92c549fde"},{url:"/manifest.json",revision:"a66890b4fdd560875914a76acf9089c9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
