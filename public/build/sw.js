if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutPage.ad89bc92.js",revision:null},{url:"assets/app.1263cd97.css",revision:null},{url:"assets/app.bd6b502d.js",revision:null},{url:"assets/ApplicationLogo.fac30290.js",revision:null},{url:"assets/ConfirmPassword.674f5c71.js",revision:null},{url:"assets/Dashboard.1a9139e8.js",revision:null},{url:"assets/Delivery.14b712f0.css",revision:null},{url:"assets/Delivery.4137651c.js",revision:null},{url:"assets/Divider.065c1aa7.js",revision:null},{url:"assets/Dropdown.3e5da5fe.js",revision:null},{url:"assets/ForgotPassword.ba638638.js",revision:null},{url:"assets/FormLabel.580ec6ae.js",revision:null},{url:"assets/index.09c1f2df.js",revision:null},{url:"assets/index.0d8b873f.js",revision:null},{url:"assets/index.31173f9c.css",revision:null},{url:"assets/index.571445bf.js",revision:null},{url:"assets/index.7558e7c6.css",revision:null},{url:"assets/index.87426210.js",revision:null},{url:"assets/index.8991451c.js",revision:null},{url:"assets/index.948b6624.css",revision:null},{url:"assets/index.a9d95967.js",revision:null},{url:"assets/index.b77a14a6.css",revision:null},{url:"assets/InputLabel.7808a3b4.js",revision:null},{url:"assets/Login.fd9dba66.js",revision:null},{url:"assets/MainLayout.1f8c770d.css",revision:null},{url:"assets/MainLayout.ab89c103.js",revision:null},{url:"assets/NavLink.9ba06d69.js",revision:null},{url:"assets/object.58155b99.js",revision:null},{url:"assets/Pay.1239d5f0.css",revision:null},{url:"assets/Pay.module.89729d00.js",revision:null},{url:"assets/PayPage.59d30096.js",revision:null},{url:"assets/PrimaryButton.84a54fe3.js",revision:null},{url:"assets/Profile.0107d11a.js",revision:null},{url:"assets/RadioGroup.a1d66ae5.js",revision:null},{url:"assets/Register.96562ff7.js",revision:null},{url:"assets/ResetPassword.d52757ba.js",revision:null},{url:"assets/Result.de1711b8.css",revision:null},{url:"assets/Result.module.4f04610d.js",revision:null},{url:"assets/SuccessPage.c9807ceb.js",revision:null},{url:"assets/Taxi.e743b152.js",revision:null},{url:"assets/TextField.12a4c14b.js",revision:null},{url:"assets/TextInput.d578eb3e.js",revision:null},{url:"assets/VerifyEmail.a768f09e.js",revision:null},{url:"assets/Welcome.5bda0a9d.js",revision:null},{url:"assets/Welcome.88079cdc.css",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"8fc494cee89ea45baf40c16278952177"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
