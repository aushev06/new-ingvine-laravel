import{b as me,s as Ht,d as jt,e as Bt,f as Nt,j as y,F as ie,a as s,g as ee,c as W,h as Dt,R as q,_ as ke,r as w,L as te,i as ne,k as Rt,l as At,m as xt}from"./app.8881debb.js";import{I as zt,D as ft,L as R}from"./index.98f93165.js";import{u as $e,B as Wt,M as we,p as ue,P as Qt,e as xe,a as Ft}from"./index.00da8cd5.js";import{M as qt,T as Ee,L as dt,I as Ut}from"./dividerClasses.5b48aa25.js";import{N as le}from"./NavLink.46db9fac.js";const Xt="_header_mvank_1",Yt="_mobileLogo_mvank_9",Vt="_btns_mvank_15",Gt="_left_mvank_25",Jt="_right_mvank_33",Kt="_list_mvank_39",Zt="_active_mvank_46",en="_phone_mvank_50",tn="_phoneText_mvank_59",nn="_logo_mvank_69",rn="_location_mvank_96",an="_locationText_mvank_104",S={header:Xt,mobileLogo:Yt,btns:Vt,left:Gt,right:Jt,list:Kt,active:Zt,phone:en,phoneText:tn,logo:nn,location:rn,locationText:an},on="_paper_hhwa1_1",ln="_root_hhwa1_6",sn="_mainList_hhwa1_10",un="_item_hhwa1_16",cn="_mainItemBoldText_hhwa1_33",fn="_closeButton_hhwa1_38",dn="_closeIcon_hhwa1_54",pn="_logout_hhwa1_87",hn="_btns_hhwa1_102",T={paper:on,root:ln,mainList:sn,item:un,mainItemBoldText:cn,closeButton:fn,closeIcon:dn,logout:pn,btns:hn},vn="_title_hkhzi_1",mn="_root_hkhzi_9",_n="_container_hkhzi_21",gn="_item_hkhzi_29",yn="_active_hkhzi_44",bn="_btn_hkhzi_48",wn="_drawerPaper_hkhzi_73",En="_drawerContent_hkhzi_90",z={title:vn,root:mn,container:_n,item:gn,active:yn,btn:bn,drawerPaper:wn,drawerContent:En},Oe=()=>{const t=$e("(max-width:768px)"),e=me(Ht),n=me(jt),r=me(Bt),a=Nt(),u={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:360,bgcolor:"#fff",boxShadow:24,p:4,borderRadius:"30px"},o=l=>{a(Dt(l.name)),localStorage.setItem("city",l.name),a(ee(!1))},i=()=>y(ie,{children:[s(Ee,{className:z.title,id:"modal-modal-title",variant:"h6",component:"h2",children:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u0440\u043E\u0434"}),s("div",{className:z.container,children:s("ul",{children:e==null?void 0:e.map(l=>s(R,{onClick:()=>o(l),className:W(z.item,l.name.toLowerCase()==(n==null?void 0:n.toLowerCase())?z.active:""),children:l.name},l.slug))})})]});return y(ie,{children:[s(zt,{onClick:()=>a(ee(!0)),iconType:"pin",text:n||"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434"}),t?s(ft,{open:r,onClose:()=>ee(!1),anchor:"bottom",classes:{paper:z.drawerPaper},children:s("div",{className:z.drawerContent,children:i()})}):s(qt,{open:r,onClose:()=>a(ee(!1)),children:s(Wt,{sx:u,children:i()})})]})},On=q.lazy(()=>ke(()=>import("./index.40f6cfbf.js"),["assets/index.40f6cfbf.js","assets/app.8881debb.js","assets/app.1263cd97.css","assets/dividerClasses.5b48aa25.js","assets/index.115dbbcb.js","assets/index.948b6624.css","assets/index.98f93165.js","assets/index.b77a14a6.css","assets/Divider.f23367be.js","assets/index.31173f9c.css"])),Sn=({menuOpened:t,onClose:e})=>y(ft,{anchor:"left",classes:{paper:T.paper},open:t,onClose:e,children:[s("button",{type:"button",className:T.closeButton,onClick:e,children:s("span",{className:T.closeIcon})}),s("nav",{className:T.root,children:y("ul",{className:T.mainList,children:[s(we,{className:T.item,children:s(le,{href:"/",children:s(Ee,{className:T.mainItemBoldText,variant:"body1",children:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"})})}),s(we,{className:T.item,children:s(le,{href:"/delivery",children:s(Ee,{className:T.mainItemBoldText,variant:"body1",children:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"})})})]})}),y("div",{className:T.btns,children:[s(Oe,{}),s("div",{children:s(q.Suspense,{children:s(On,{})})})]})]}),Tn=q.lazy(()=>ke(()=>import("./index.40f6cfbf.js"),["assets/index.40f6cfbf.js","assets/app.8881debb.js","assets/app.1263cd97.css","assets/dividerClasses.5b48aa25.js","assets/index.115dbbcb.js","assets/index.948b6624.css","assets/index.98f93165.js","assets/index.b77a14a6.css","assets/Divider.f23367be.js","assets/index.31173f9c.css"])),Pn=q.lazy(()=>ke(()=>import("./index.8f7151ac.js"),["assets/index.8f7151ac.js","assets/dividerClasses.5b48aa25.js","assets/app.8881debb.js","assets/app.1263cd97.css","assets/object.8568af8d.js","assets/index.00da8cd5.js","assets/FormLabel.d0206049.js","assets/index.7558e7c6.css"])),kn=q.memo(function({className:e,onMenuClick:n}){const r=$e("(max-width:768px)"),[a,u]=w.exports.useState(!1);return r?y(ie,{children:[y("header",{className:S.header,children:[s("div",{children:s(te,{href:"/",children:s("img",{className:S.mobileLogo,src:"/logo.png",alt:""})})}),s("div",{children:s("img",{onClick:()=>u(!0),src:"/burger.svg",alt:""})})]}),s(Sn,{menuOpened:a,onClose:()=>u(!1)}),s("div",{style:{display:"none"},children:s(Oe,{})})]}):y("header",{className:W(S.header,"layout"),children:[s("div",{className:S.left,children:s(te,{href:"/",className:S.logo,children:s("i",{children:s("img",{src:"logo.png",alt:""})})})}),y("div",{className:S.right,children:[y(dt,{className:S.list,children:[s(R,{children:s(te,{className:window.location.pathname=="/"?S.active:"",href:"/",children:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"})}),s(R,{children:s(te,{className:window.location.pathname=="/delivery"?S.active:"",href:"/delivery",children:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"})}),s(R,{children:s(le,{href:"/",children:"\u0410\u043A\u0446\u0438\u0438"})}),s(R,{children:s(le,{href:"/",children:"\u041E \u043D\u0430\u0441"})})]}),s(w.exports.Suspense,{fallback:null,children:y("div",{className:S.btns,children:[s(Oe,{}),s("div",{children:s(Tn,{})}),s("div",{children:s(Pn,{})})]})})]})]})}),$n="_root_1ev8n_1",Mn="_fixedCategory_1ev8n_22",Ln="_list_1ev8n_33",In="_more_1ev8n_41",Cn="_item_1ev8n_49",Hn="_active_1ev8n_70",H={root:$n,fixedCategory:Mn,list:Ln,more:In,item:Cn,active:Hn};var _={},Me={},U={},X={},pt="Expected a function",ze=0/0,jn="[object Symbol]",Bn=/^\s+|\s+$/g,Nn=/^[-+]0x[0-9a-f]+$/i,Dn=/^0b[01]+$/i,Rn=/^0o[0-7]+$/i,An=parseInt,xn=typeof ne=="object"&&ne&&ne.Object===Object&&ne,zn=typeof self=="object"&&self&&self.Object===Object&&self,Wn=xn||zn||Function("return this")(),Qn=Object.prototype,Fn=Qn.toString,qn=Math.max,Un=Math.min,_e=function(){return Wn.Date.now()};function Xn(t,e,n){var r,a,u,o,i,l,c=0,f=!1,d=!1,g=!0;if(typeof t!="function")throw new TypeError(pt);e=We(e)||0,se(n)&&(f=!!n.leading,d="maxWait"in n,u=d?qn(We(n.maxWait)||0,e):u,g="trailing"in n?!!n.trailing:g);function E(p){var O=r,N=a;return r=a=void 0,c=p,o=t.apply(N,O),o}function L(p){return c=p,i=setTimeout(b,e),f?E(p):o}function I(p){var O=p-l,N=p-c,F=e-O;return d?Un(F,u-N):F}function $(p){var O=p-l,N=p-c;return l===void 0||O>=e||O<0||d&&N>=u}function b(){var p=_e();if($(p))return A(p);i=setTimeout(b,I(p))}function A(p){return i=void 0,g&&r?E(p):(r=a=void 0,o)}function x(){i!==void 0&&clearTimeout(i),c=0,r=l=a=i=void 0}function M(){return i===void 0?o:A(_e())}function C(){var p=_e(),O=$(p);if(r=arguments,a=this,l=p,O){if(i===void 0)return L(l);if(d)return i=setTimeout(b,e),E(l)}return i===void 0&&(i=setTimeout(b,e)),o}return C.cancel=x,C.flush=M,C}function Yn(t,e,n){var r=!0,a=!0;if(typeof t!="function")throw new TypeError(pt);return se(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Xn(t,e,{leading:r,maxWait:e,trailing:a})}function se(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Vn(t){return!!t&&typeof t=="object"}function Gn(t){return typeof t=="symbol"||Vn(t)&&Fn.call(t)==jn}function We(t){if(typeof t=="number")return t;if(Gn(t))return ze;if(se(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=se(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Bn,"");var n=Dn.test(t);return n||Rn.test(t)?An(t.slice(2),n?2:8):Nn.test(t)?ze:+t}var Jn=Yn,Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.addPassiveEventListener=function(e,n,r){var a=function(){var u=!1;try{var o=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",null,o)}catch{}return u}();e.addEventListener(n,r,a?{passive:!0}:!1)};Y.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r)};Object.defineProperty(X,"__esModule",{value:!0});var Kn=Jn,Zn=tr(Kn),er=Y;function tr(t){return t&&t.__esModule?t:{default:t}}var nr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Zn.default)(e,n)},v={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=nr(function(a){v.scrollHandler(e)},n);v.scrollSpyContainers.push(e),(0,er.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return v.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=v.scrollSpyContainers[v.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(v.currentPositionX(e),v.currentPositionY(e))})},addStateHandler:function(e){v.spySetState.push(e)},addSpyHandler:function(e,n){var r=v.scrollSpyContainers[v.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(v.currentPositionX(n),v.currentPositionY(n))},updateStates:function(){v.spySetState.forEach(function(e){return e()})},unmount:function(e,n){v.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),v.spySetState&&v.spySetState.length&&v.spySetState.indexOf(e)>-1&&v.spySetState.splice(v.spySetState.indexOf(e),1),document.removeEventListener("scroll",v.scrollHandler)},update:function(){return v.scrollSpyContainers.forEach(function(e){return v.scrollHandler(e)})}};X.default=v;var Q={},V={};Object.defineProperty(V,"__esModule",{value:!0});var rr=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,a=r?"#"+r:"",u=window&&window.location,o=a?u.pathname+u.search+a:u.pathname+u.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},ar=function(){return window.location.hash.replace(/^#/,"")},or=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},ir=function(e){return getComputedStyle(e).position!=="static"},ge=function(e,n){for(var r=e.offsetTop,a=e.offsetParent;a&&!n(a);)r+=a.offsetTop,a=a.offsetParent;return{offsetTop:r,offsetParent:a}},lr=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(ir(e)){if(n.offsetParent!==e){var a=function(f){return f===e||f===document},u=ge(n,a),o=u.offsetTop,i=u.offsetParent;if(i!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(f){return f===document};return ge(n,l).offsetTop-ge(e,l).offsetTop};V.default={updateHash:rr,getHash:ar,filterElementInContainer:or,scrollOffset:lr};var ce={},Le={};Object.defineProperty(Le,"__esModule",{value:!0});Le.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});var sr=Y,ur=["mousedown","mousewheel","touchmove","keydown"];Ie.default={subscribe:function(e){return typeof document<"u"&&ur.forEach(function(n){return(0,sr.addPassiveEventListener)(document,n,e)})}};var G={};Object.defineProperty(G,"__esModule",{value:!0});var Se={registered:{},scrollEvent:{register:function(e,n){Se.registered[e]=n},remove:function(e){Se.registered[e]=null}}};G.default=Se;Object.defineProperty(ce,"__esModule",{value:!0});var cr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fr=V;fe(fr);var dr=Le,Qe=fe(dr),pr=Ie,hr=fe(pr),vr=G,P=fe(vr);function fe(t){return t&&t.__esModule?t:{default:t}}var ht=function(e){return Qe.default[e.smooth]||Qe.default.defaultEasing},mr=function(e){return typeof e=="function"?e:function(){return e}},_r=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Te=function(){return _r()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),vt=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},mt=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft},_t=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop},gr=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,a=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)},yr=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,a=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)},br=function t(e,n,r){var a=n.data;if(!n.ignoreCancelEvents&&a.cancel){P.default.registered.end&&P.default.registered.end(a.to,a.target,a.currentPositionY);return}if(a.delta=Math.round(a.targetPosition-a.startPosition),a.start===null&&(a.start=r),a.progress=r-a.start,a.percent=a.progress>=a.duration?1:e(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var u=t.bind(null,e,n);Te.call(window,u);return}P.default.registered.end&&P.default.registered.end(a.to,a.target,a.currentPosition)},Ce=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},J=function(e,n,r,a){if(n.data=n.data||vt(),window.clearTimeout(n.data.delayTimeout),hr.default.subscribe(function(){n.data.cancel=!0}),Ce(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?mt(n):_t(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){P.default.registered.end&&P.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=mr(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=a;var u=ht(n),o=br.bind(null,u,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){P.default.registered.begin&&P.default.registered.begin(n.data.to,n.data.target),Te.call(window,o)},n.delay);return}P.default.registered.begin&&P.default.registered.begin(n.data.to,n.data.target),Te.call(window,o)},de=function(e){return e=cr({},e),e.data=e.data||vt(),e.absolute=!0,e},wr=function(e){J(0,de(e))},Er=function(e,n){J(e,de(n))},Or=function(e){e=de(e),Ce(e),J(e.horizontal?gr(e):yr(e),e)},Sr=function(e,n){n=de(n),Ce(n);var r=n.horizontal?mt(n):_t(n);J(e+r,n)};ce.default={animateTopScroll:J,getAnimationType:ht,scrollToTop:wr,scrollToBottom:Or,scrollTo:Er,scrollMore:Sr};Object.defineProperty(Q,"__esModule",{value:!0});var Tr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pr=V,kr=He(Pr),$r=ce,Mr=He($r),Lr=G,re=He(Lr);function He(t){return t&&t.__esModule?t:{default:t}}var ae={},Fe=void 0;Q.default={unmount:function(){ae={}},register:function(e,n){ae[e]=n},unregister:function(e){delete ae[e]},get:function(e){return ae[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Fe=e},getActiveLink:function(){return Fe},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=Tr({},n,{absolute:!1});var a=n.containerId,u=n.container,o=void 0;a?o=document.getElementById(a):u&&u.nodeType?o=u:o=document,n.absolute=!0;var i=n.horizontal,l=kr.default.scrollOffset(o,r,i)+(n.offset||0);if(!n.smooth){re.default.registered.begin&&re.default.registered.begin(e,r),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,re.default.registered.end&&re.default.registered.end(e,r);return}Mr.default.animateTopScroll(l,n,e,r)}};var pe={};Object.defineProperty(pe,"__esModule",{value:!0});var Ir=V,ye=Cr(Ir);function Cr(t){return t&&t.__esModule?t:{default:t}}var Hr={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,a=r.get(e);if(a&&(n||e!==r.getActiveLink())){var u=this.containers[e]||document;r.scrollTo(e,{container:u})}},getHash:function(){return ye.default.getHash()},changeHash:function(e,n){this.isInitialized()&&ye.default.getHash()!==e&&ye.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};pe.default=Hr;Object.defineProperty(U,"__esModule",{value:!0});var qe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jr=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Br=w.exports,Ue=K(Br),Nr=X,oe=K(Nr),Dr=Q,Rr=K(Dr),Ar=ue.exports,h=K(Ar),xr=pe,j=K(xr);function K(t){return t&&t.__esModule?t:{default:t}}function zr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Wr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Qr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Xe={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};U.default=function(t,e){var n=e||Rr.default,r=function(u){Qr(o,u);function o(i){zr(this,o);var l=Wr(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a.call(l),l.state={active:!1},l}return jr(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();oe.default.isMounted(l)||oe.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(j.default.isMounted()||j.default.mount(n),j.default.mapContainer(this.props.to,l)),oe.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){oe.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c=qe({},this.props);for(var f in Xe)c.hasOwnProperty(f)&&delete c[f];return c.className=l,c.onClick=this.handleClick,Ue.default.createElement(t,c)}}]),o}(Ue.default.PureComponent),a=function(){var o=this;this.scrollTo=function(i,l){n.scrollTo(i,qe({},o.state,l))},this.handleClick=function(i){o.props.onClick&&o.props.onClick(i),i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(i,l){var c=o.getScrollSpyContainer();if(!(j.default.isMounted()&&!j.default.isInitialized())){var f=o.props.horizontal,d=o.props.to,g=null,E=void 0,L=void 0;if(f){var I=0,$=0,b=0;if(c.getBoundingClientRect){var A=c.getBoundingClientRect();b=A.left}if(!g||o.props.isDynamic){if(g=n.get(d),!g)return;var x=g.getBoundingClientRect();I=x.left-b+i,$=I+x.width}var M=i-o.props.offset;E=M>=Math.floor(I)&&M<Math.floor($),L=M<Math.floor(I)||M>=Math.floor($)}else{var C=0,p=0,O=0;if(c.getBoundingClientRect){var N=c.getBoundingClientRect();O=N.top}if(!g||o.props.isDynamic){if(g=n.get(d),!g)return;var F=g.getBoundingClientRect();C=F.top-O+l,p=C+F.height}var Z=l-o.props.offset;E=Z>=Math.floor(C)&&Z<Math.floor(p),L=Z<Math.floor(C)||Z>=Math.floor(p)}var De=n.getActiveLink();if(L){if(d===De&&n.setActiveLink(void 0),o.props.hashSpy&&j.default.getHash()===d){var Re=o.props.saveHashHistory,It=Re===void 0?!1:Re;j.default.changeHash("",It)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(d,g))}if(E&&(De!==d||o.state.active===!1)){n.setActiveLink(d);var Ae=o.props.saveHashHistory,Ct=Ae===void 0?!1:Ae;o.props.hashSpy&&j.default.changeHash(d,Ct),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d,g))}}}};return r.propTypes=Xe,r.defaultProps={offset:0},r};Object.defineProperty(Me,"__esModule",{value:!0});var Fr=w.exports,Ye=gt(Fr),qr=U,Ur=gt(qr);function gt(t){return t&&t.__esModule?t:{default:t}}function Xr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ve(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Yr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Vr=function(t){Yr(e,t);function e(){var n,r,a,u;Xr(this,e);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return u=(r=(a=Ve(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(i))),a),a.render=function(){return Ye.default.createElement("a",a.props,a.props.children)},r),Ve(a,u)}return e}(Ye.default.Component);Me.default=(0,Ur.default)(Vr);var je={};Object.defineProperty(je,"__esModule",{value:!0});var Gr=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Jr=w.exports,Ge=yt(Jr),Kr=U,Zr=yt(Kr);function yt(t){return t&&t.__esModule?t:{default:t}}function ea(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ta(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function na(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ra=function(t){na(e,t);function e(){return ea(this,e),ta(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Gr(e,[{key:"render",value:function(){return Ge.default.createElement("input",this.props,this.props.children)}}]),e}(Ge.default.Component);je.default=(0,Zr.default)(ra);var Be={},he={};Object.defineProperty(he,"__esModule",{value:!0});var aa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),ia=w.exports,Je=ve(ia),la=Rt.exports;ve(la);var sa=Q,Ke=ve(sa),ua=ue.exports,Ze=ve(ua);function ve(t){return t&&t.__esModule?t:{default:t}}function ca(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fa(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function da(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}he.default=function(t){var e=function(n){da(r,n);function r(a){ca(this,r);var u=fa(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,a));return u.childBindings={domNode:null},u}return oa(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(u){this.props.name!==u.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Ke.default.unregister(this.props.name)}},{key:"registerElems",value:function(u){Ke.default.register(u,this.childBindings.domNode)}},{key:"render",value:function(){return Je.default.createElement(t,aa({},this.props,{parentBindings:this.childBindings}))}}]),r}(Je.default.Component);return e.propTypes={name:Ze.default.string,id:Ze.default.string},e};Object.defineProperty(Be,"__esModule",{value:!0});var et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),ha=w.exports,tt=Ne(ha),va=he,ma=Ne(va),_a=ue.exports,nt=Ne(_a);function Ne(t){return t&&t.__esModule?t:{default:t}}function ga(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ya(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ba(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var bt=function(t){ba(e,t);function e(){return ga(this,e),ya(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return pa(e,[{key:"render",value:function(){var r=this,a=et({},this.props);return a.parentBindings&&delete a.parentBindings,tt.default.createElement("div",et({},a,{ref:function(o){r.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(tt.default.Component);bt.propTypes={name:nt.default.string,id:nt.default.string};Be.default=(0,ma.default)(bt);var rt=At.jsx,at=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ot=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function it(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function st(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ut=w.exports,D=X,be=Q,m=ue.exports,B=pe,ct={to:m.string.isRequired,containerId:m.string,container:m.object,activeClass:m.string,spy:m.bool,smooth:m.oneOfType([m.bool,m.string]),offset:m.number,delay:m.number,isDynamic:m.bool,onClick:m.func,duration:m.oneOfType([m.number,m.func]),absolute:m.bool,onSetActive:m.func,onSetInactive:m.func,ignoreCancelEvents:m.bool,hashSpy:m.bool,spyThrottle:m.number},wa={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||be,a=function(o){st(i,o);function i(l){it(this,i);var c=lt(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,l));return u.call(c),c.state={active:!1},c}return ot(i,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,f=this.props.container;return c?document.getElementById(c):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();D.isMounted(c)||D.mount(c,this.props.spyThrottle),this.props.hashSpy&&(B.isMounted()||B.mount(r),B.mapContainer(this.props.to,c)),this.props.spy&&D.addStateHandler(this.stateHandler),D.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){D.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var f=at({},this.props);for(var d in ct)f.hasOwnProperty(d)&&delete f[d];return f.className=c,f.onClick=this.handleClick,rt(e,{...f})}}]),i}(ut.Component),u=function(){var i=this;this.scrollTo=function(l,c){r.scrollTo(l,at({},i.state,c))},this.handleClick=function(l){i.props.onClick&&i.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),i.scrollTo(i.props.to,i.props)},this.stateHandler=function(){r.getActiveLink()!==i.props.to&&(i.state!==null&&i.state.active&&i.props.onSetInactive&&i.props.onSetInactive(),i.setState({active:!1}))},this.spyHandler=function(l){var c=i.getScrollSpyContainer();if(!(B.isMounted()&&!B.isInitialized())){var f=i.props.to,d=null,g=0,E=0,L=0;if(c.getBoundingClientRect){var I=c.getBoundingClientRect();L=I.top}if(!d||i.props.isDynamic){if(d=r.get(f),!d)return;var $=d.getBoundingClientRect();g=$.top-L+l,E=g+$.height}var b=l-i.props.offset,A=b>=Math.floor(g)&&b<Math.floor(E),x=b<Math.floor(g)||b>=Math.floor(E),M=r.getActiveLink();if(x)return f===M&&r.setActiveLink(void 0),i.props.hashSpy&&B.getHash()===f&&B.changeHash(),i.props.spy&&i.state.active&&(i.setState({active:!1}),i.props.onSetInactive&&i.props.onSetInactive()),D.updateStates();if(A&&M!==f)return r.setActiveLink(f),i.props.hashSpy&&B.changeHash(f),i.props.spy&&(i.setState({active:!0}),i.props.onSetActive&&i.props.onSetActive(f)),D.updateStates()}}};return a.propTypes=ct,a.defaultProps={offset:0},a},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){st(a,r);function a(u){it(this,a);var o=lt(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,u));return o.childBindings={domNode:null},o}return ot(a,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;be.unregister(this.props.name)}},{key:"registerElems",value:function(o){be.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return rt(e,{...this.props,parentBindings:this.childBindings})}}]),a}(ut.Component);return n.propTypes={name:m.string,id:m.string},n}},Ea=wa;Object.defineProperty(_,"__esModule",{value:!0});_.Helpers=_.ScrollElement=_.ScrollLink=_.animateScroll=_.scrollSpy=_.Events=_.scroller=_.Element=_.Button=Pe=_.Link=void 0;var Oa=Me,wt=k(Oa),Sa=je,Et=k(Sa),Ta=Be,Ot=k(Ta),Pa=Q,St=k(Pa),ka=G,Tt=k(ka),$a=X,Pt=k($a),Ma=ce,kt=k(Ma),La=U,$t=k(La),Ia=he,Mt=k(Ia),Ca=Ea,Lt=k(Ca);function k(t){return t&&t.__esModule?t:{default:t}}var Pe=_.Link=wt.default;_.Button=Et.default;_.Element=Ot.default;_.scroller=St.default;_.Events=Tt.default;_.scrollSpy=Pt.default;_.animateScroll=kt.default;_.ScrollLink=$t.default;_.ScrollElement=Mt.default;_.Helpers=Lt.default;_.default={Link:wt.default,Button:Et.default,Element:Ot.default,scroller:St.default,Events:Tt.default,scrollSpy:Pt.default,animateScroll:kt.default,ScrollLink:$t.default,ScrollElement:Mt.default,Helpers:Lt.default};const Ha=({categories:t})=>{var c;const e=$e("(max-width:768px)"),n=w.exports.useRef(null),r=(t==null?void 0:t.slice(0,e?7:10))||[],a=e?7:10,u=(t==null?void 0:t.slice(a))||[],[o,i]=w.exports.useState((c=t[0])==null?void 0:c.id),[l]=w.exports.useState("");return w.exports.useEffect(()=>{const f=document.querySelector(`#category-${o}`);r.find(d=>d.id===o)&&f&&window&&window.pageYOffset>130&&f.scrollIntoView(!0)},[o]),s("div",{ref:n,className:W(H.root,l),children:y(dt,{className:H.list,children:[r==null?void 0:r.map(f=>s(R,{id:"category-"+f.id,className:W(H.item,f.id===o?H.active:""),children:s(Pe,{onSetActive:()=>i(f.id),activeClass:H.active,to:f.slug,spy:!0,smooth:!0,offset:50,duration:500,children:f.name})},f.id)),t.length>a&&s(Qt,{variant:"popover",popupId:"demo-popup-menu",children:f=>y(ie,{children:[y(R,{id:"category-more",...xe.bindTrigger(f),className:W(H.item,H.more),children:["\u0415\u0449\u0435 ",s("span",{children:s(Ut,{type:"down"})})]}),s(Ft,{...xe.bindMenu(f),children:u.map(d=>s(we,{onClick:f.close,children:s(Pe,{onSetActive:()=>i(d.id),activeClass:H.active,to:d.slug,spy:!0,smooth:!0,offset:50,duration:500,children:d.name})},d.id))})]})})]})})},Aa=({classes:t,children:e,disableCategories:n})=>{const{data:r,isLoading:a}=xt();return y("div",{children:[s(kn,{}),!n&&!a&&s(Ha,{categories:r==null?void 0:r.data}),s("main",{className:W("content",t==null?void 0:t.main,"layout"),children:e})]})};export{Aa as M,Oe as S};
