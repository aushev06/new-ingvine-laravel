import{r as S,g as K,e as U,Z as I,_ as m,f as O,h as nt,i as it,k as D,a as s,c as G,l as y,m as M,n as X,o as Z,p as rt,q as _,t as w,j as k,v as V,T as ot,w as st,x as at,M as ct,F as lt,H as ut}from"./app.25f0cfc2.js";function dt(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function pt(t){return parseFloat(t)}const ht=S.exports.createContext(),j=ht;function ft(t){return K("MuiGrid",t)}const mt=[0,1,2,3,4,5,6,7,8,9,10],gt=["column-reverse","column","row-reverse","row"],xt=["nowrap","wrap-reverse","wrap"],v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=U("MuiGrid",["root","container","item","zeroMinWidth",...mt.map(t=>`spacing-xs-${t}`),...gt.map(t=>`direction-xs-${t}`),...xt.map(t=>`wrap-xs-${t}`),...v.map(t=>`grid-xs-${t}`),...v.map(t=>`grid-sm-${t}`),...v.map(t=>`grid-md-${t}`),...v.map(t=>`grid-lg-${t}`),...v.map(t=>`grid-xl-${t}`)]),vt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function x(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function wt({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((i,r)=>{let o={};if(e[r]&&(n=e[r]),!n)return i;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=y({values:e.columns,breakpoints:t.breakpoints.values}),u=typeof a=="object"?a[r]:a;if(u==null)return i;const d=`${Math.round(n/u*1e8)/1e6}%`;let l={};if(e.container&&e.item&&e.columnSpacing!==0){const c=t.spacing(e.columnSpacing);if(c!=="0px"){const p=`calc(${d} + ${x(c)})`;l={flexBasis:p,maxWidth:p}}}o=m({flexBasis:d,flexGrow:0,maxWidth:d},l)}return t.breakpoints.values[r]===0?Object.assign(i,o):i[t.breakpoints.up(r)]=o,i},{})}function kt({theme:t,ownerState:e}){const n=y({values:e.direction,breakpoints:t.breakpoints.values});return M({theme:t},n,i=>{const r={flexDirection:i};return i.indexOf("column")===0&&(r[`& > .${$.item}`]={maxWidth:"none"}),r})}function H({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(r=>{n===""&&e[r]!==0&&(n=r)});const i=Object.keys(t).sort((r,o)=>t[r]-t[o]);return i.slice(0,i.indexOf(n))}function $t({theme:t,ownerState:e}){const{container:n,rowSpacing:i}=e;let r={};if(n&&i!==0){const o=y({values:i,breakpoints:t.breakpoints.values});let a;typeof o=="object"&&(a=H({breakpoints:t.breakpoints.values,values:o})),r=M({theme:t},o,(u,d)=>{var l;const c=t.spacing(u);return c!=="0px"?{marginTop:`-${x(c)}`,[`& > .${$.item}`]:{paddingTop:x(c)}}:(l=a)!=null&&l.includes(d)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return r}function bt({theme:t,ownerState:e}){const{container:n,columnSpacing:i}=e;let r={};if(n&&i!==0){const o=y({values:i,breakpoints:t.breakpoints.values});let a;typeof o=="object"&&(a=H({breakpoints:t.breakpoints.values,values:o})),r=M({theme:t},o,(u,d)=>{var l;const c=t.spacing(u);return c!=="0px"?{width:`calc(100% + ${x(c)})`,marginLeft:`-${x(c)}`,[`& > .${$.item}`]:{paddingLeft:x(c)}}:(l=a)!=null&&l.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return r}function St(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const i=[];return e.forEach(r=>{const o=t[r];Number(o)>0&&i.push(n[`spacing-${r}-${String(o)}`])}),i}const Ct=I("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:i,direction:r,item:o,spacing:a,wrap:u,zeroMinWidth:d,breakpoints:l}=n;let c=[];i&&(c=St(a,l,e));const p=[];return l.forEach(h=>{const f=n[h];f&&p.push(e[`grid-${h}-${String(f)}`])}),[e.root,i&&e.container,o&&e.item,d&&e.zeroMinWidth,...c,r!=="row"&&e[`direction-xs-${String(r)}`],u!=="wrap"&&e[`wrap-xs-${String(u)}`],...p]}})(({ownerState:t})=>m({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),kt,$t,bt,wt);function yt(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(i=>{const r=t[i];if(Number(r)>0){const o=`spacing-${i}-${String(r)}`;n.push(o)}}),n}const Nt=t=>{const{classes:e,container:n,direction:i,item:r,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:d}=t;let l=[];n&&(l=yt(o,d));const c=[];d.forEach(h=>{const f=t[h];f&&c.push(`grid-${h}-${String(f)}`)});const p={root:["root",n&&"container",r&&"item",u&&"zeroMinWidth",...l,i!=="row"&&`direction-xs-${String(i)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...c]};return X(p,ft,e)},Wt=S.exports.forwardRef(function(e,n){const i=O({props:e,name:"MuiGrid"}),{breakpoints:r}=nt(),o=it(i),{className:a,columns:u,columnSpacing:d,component:l="div",container:c=!1,direction:p="row",item:h=!1,rowSpacing:f,spacing:N=0,wrap:q="wrap",zeroMinWidth:Q=!1}=o,W=D(o,vt),J=f||N,Y=d||N,tt=S.exports.useContext(j),B=c?u||12:tt,R={},L=m({},W);r.keys.forEach(b=>{W[b]!=null&&(R[b]=W[b],delete L[b])});const z=m({},o,{columns:B,container:c,direction:p,item:h,rowSpacing:J,columnSpacing:Y,wrap:q,zeroMinWidth:Q,spacing:N},R,{breakpoints:r.keys}),et=Nt(z);return s(j.Provider,{value:B,children:s(Ct,m({ownerState:z,className:G(et.root,a),as:l,ref:n},L))})}),Gt=Wt;function Mt(t){return K("MuiSkeleton",t)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Bt=["animation","className","component","height","style","variant","width"];let C=t=>t,P,E,T,A;const Rt=t=>{const{classes:e,variant:n,animation:i,hasChildren:r,width:o,height:a}=t;return X({root:["root",n,i,r&&"withChildren",r&&!o&&"fitContent",r&&!a&&"heightAuto"]},Mt,e)},Lt=Z(P||(P=C`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),zt=Z(E||(E=C`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),_t=I("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=dt(t.shape.borderRadius)||"px",i=pt(t.shape.borderRadius);return m({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:rt(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&_(T||(T=C`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Lt),({ownerState:t,theme:e})=>t.animation==="wave"&&_(A||(A=C`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),zt,(e.vars||e).palette.action.hover)),Vt=S.exports.forwardRef(function(e,n){const i=O({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:a="span",height:u,style:d,variant:l="text",width:c}=i,p=D(i,Bt),h=m({},i,{animation:r,component:a,variant:l,hasChildren:Boolean(p.children)}),f=Rt(h);return s(_t,m({as:a,ref:n,className:G(f.root,o),ownerState:h},p,{style:m({width:c,height:u},d)}))}),g=Vt,jt=({children:t,classes:e})=>s("div",{className:w.cards,children:s("div",{className:G({[w.categoryList]:(e==null?void 0:e.list)==="categoryList"},w.cardsList,e==null?void 0:e.list),children:t})}),F=({children:t,classes:e,isLoading:n,isLoaded:i,itemsLength:r,skeletonWidth:o,skeletonCount:a=6})=>s(jt,{classes:e,children:t}),Pt=()=>k("div",{className:V.skeletonCardItem,style:{width:272},children:[s(g,{variant:"rect",width:272,height:200}),k("div",{className:"p-20",children:[s(g,{width:"60%"}),s(g,{width:"70%"}),s("div",{className:"d-flex align-items-center",children:s(g,{width:"60px",height:35})}),s(g,{width:"90%"}),k("div",{className:"d-flex align-items-center justify-content-between",style:{position:"relative",top:5},children:[s(g,{width:"20%",height:35}),s(g,{width:"40px",height:"65px",className:V.skeletonCardItemButton})]})]})]}),Et=({categories:t,isLoading:e})=>e?s("div",{children:s(F,{children:Array.from({length:8},(n,i)=>s("div",{className:w.chefsSkeleton,children:s(Pt,{},i)},i))})}):s("div",{children:t.map(n=>k("div",{className:w.items,id:n.slug,children:[s(ot,{variant:"h6",style:{fontSize:36},children:n.name}),s(F,{children:n.foodProperties.map(i=>s(Gt,{item:!0,xs:4,children:s(st,{food:i},i.id)},i.id))})]},n.id))}),Tt=()=>{const{data:t,isLoading:e}=at();return s(ct,{children:s(Et,{isLoading:e,categories:t==null?void 0:t.data})})};function Ft(t){return k(lt,{children:[s(ut,{title:"Ingvine Food - \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u043A\u0443\u0441\u043D\u043E\u0439 \u0435\u0434\u044B"}),s(Tt,{})]})}export{Ft as default};
