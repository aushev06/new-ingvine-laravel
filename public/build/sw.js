if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.0530c6ae.js",revision:null},{url:"assets/app.476cf20b.css",revision:null},{url:"assets/ApplicationLogo.29c46f11.js",revision:null},{url:"assets/ConfirmPassword.50737aeb.js",revision:null},{url:"assets/Dashboard.5404ea9d.js",revision:null},{url:"assets/Delivery.14b712f0.css",revision:null},{url:"assets/Delivery.8a9f8bc8.js",revision:null},{url:"assets/Divider.2ddbd481.js",revision:null},{url:"assets/dividerClasses.34292bff.js",revision:null},{url:"assets/Dropdown.be6a1898.js",revision:null},{url:"assets/ForgotPassword.586c538a.js",revision:null},{url:"assets/FormLabel.bf93327a.js",revision:null},{url:"assets/index.03ef14a3.js",revision:null},{url:"assets/index.04f9472b.js",revision:null},{url:"assets/index.66400a59.js",revision:null},{url:"assets/index.67a9b279.js",revision:null},{url:"assets/index.9649e2de.js",revision:null},{url:"assets/index.b77a14a6.css",revision:null},{url:"assets/index.c408edad.css",revision:null},{url:"assets/index.dd2b891f.css",revision:null},{url:"assets/index.f6279cc6.css",revision:null},{url:"assets/InputLabel.ae69d32f.js",revision:null},{url:"assets/Login.751a77aa.js",revision:null},{url:"assets/MainLayout.d161bfd4.js",revision:null},{url:"assets/MainLayout.f999b456.css",revision:null},{url:"assets/NavLink.4a472323.js",revision:null},{url:"assets/object.de1a71e2.js",revision:null},{url:"assets/PayPage.c1845bb0.js",revision:null},{url:"assets/PayPage.e8493b26.css",revision:null},{url:"assets/PrimaryButton.1e656089.js",revision:null},{url:"assets/Profile.a11a8281.js",revision:null},{url:"assets/RadioGroup.42233382.js",revision:null},{url:"assets/Register.ec460a60.js",revision:null},{url:"assets/ResetPassword.0e9feea2.js",revision:null},{url:"assets/SuccessPage.a4150f44.js",revision:null},{url:"assets/SuccessPage.de1711b8.css",revision:null},{url:"assets/TextInput.e43b2b74.js",revision:null},{url:"assets/VerifyEmail.76af503a.js",revision:null},{url:"assets/Welcome.36996aee.js",revision:null},{url:"assets/Welcome.a1c39254.css",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"8fc494cee89ea45baf40c16278952177"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
