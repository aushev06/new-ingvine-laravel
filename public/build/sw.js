if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.476cf20b.css",revision:null},{url:"assets/app.db582371.js",revision:null},{url:"assets/ApplicationLogo.dfc5e6fe.js",revision:null},{url:"assets/ConfirmPassword.f111ae81.js",revision:null},{url:"assets/Dashboard.04f36966.js",revision:null},{url:"assets/Delivery.14b712f0.css",revision:null},{url:"assets/Delivery.81ce1410.js",revision:null},{url:"assets/Divider.a2a5b87b.js",revision:null},{url:"assets/dividerClasses.e029716e.js",revision:null},{url:"assets/Dropdown.d5fb8b28.js",revision:null},{url:"assets/ForgotPassword.645fd5ef.js",revision:null},{url:"assets/FormLabel.6b7faa27.js",revision:null},{url:"assets/index.0c09819a.js",revision:null},{url:"assets/index.13c98e33.js",revision:null},{url:"assets/index.b77a14a6.css",revision:null},{url:"assets/index.ba2b0917.js",revision:null},{url:"assets/index.bae30aca.js",revision:null},{url:"assets/index.c408edad.css",revision:null},{url:"assets/index.dd2b891f.css",revision:null},{url:"assets/index.ec5dd3f4.js",revision:null},{url:"assets/index.f6279cc6.css",revision:null},{url:"assets/InputLabel.f09a3206.js",revision:null},{url:"assets/Login.e425ace1.js",revision:null},{url:"assets/MainLayout.8ab9f331.js",revision:null},{url:"assets/MainLayout.b18aa974.css",revision:null},{url:"assets/NavLink.9006c90a.js",revision:null},{url:"assets/object.33151b62.js",revision:null},{url:"assets/PayPage.54cfc836.js",revision:null},{url:"assets/PayPage.e8493b26.css",revision:null},{url:"assets/PrimaryButton.acddcbfd.js",revision:null},{url:"assets/Profile.e5464553.js",revision:null},{url:"assets/RadioGroup.8178605a.js",revision:null},{url:"assets/Register.1a86fdfb.js",revision:null},{url:"assets/ResetPassword.4f665e97.js",revision:null},{url:"assets/SuccessPage.a9f4f369.js",revision:null},{url:"assets/SuccessPage.de1711b8.css",revision:null},{url:"assets/TextInput.bebb7aa4.js",revision:null},{url:"assets/VerifyEmail.062efd3b.js",revision:null},{url:"assets/Welcome.79b2f882.js",revision:null},{url:"assets/Welcome.ae21af66.css",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"8fc494cee89ea45baf40c16278952177"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
