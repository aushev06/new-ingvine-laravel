import{M as ke}from"./MainLayout.9cb24537.js";import{ac as V,a as o,A as j,B as q,Z as U,Q as we,X as ce,t as y,V as le,r as x,I as K,q as H,f as E,K as X,S as Se,p as $e,az as W,aA as Z,aB as de,aC as Y,j as C,R as Ie,a5 as Ne,u as Be,b as Pe,aD as ze,d as Me,M as Oe,e as ee,F as ue,T,a7 as Re,l as De,H as Le}from"./app.b2b04ce0.js";import{B as Fe,I as Ae}from"./index.8351109f.js";import{s as Ee,I as We}from"./index.22780ab1.js";import{u as pe,B as Ge}from"./index.fe9d4fb3.js";import{F as me,a as fe}from"./FormLabel.81834709.js";import{S as Te,R as he,F as _e,a as ge}from"./RadioGroup.fe107db4.js";import{D as Ve}from"./index.a293da75.js";import{D as je}from"./Divider.dbb777ad.js";import"./NavLink.fba40214.js";function qe(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ue(e){return parseFloat(e)}const Ke=V(o("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),He=V(o("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Xe=V(o("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ze(e){return q("MuiCheckbox",e)}const Qe=j("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),G=Qe,Je=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ye=e=>{const{classes:t,indeterminate:n,color:i}=e,a={root:["root",n&&"indeterminate",`color${ce(i)}`]},r=X(a,Ze,t);return y({},t,r)},et=U(Te,{shouldForwardProp:e=>we(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,n.color!=="default"&&t[`color${ce(n.color)}`]]}})(({theme:e,ownerState:t})=>y({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:le(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${G.checked}, &.${G.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${G.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),tt=o(He,{}),ot=o(Ke,{}),nt=o(Xe,{}),rt=x.exports.forwardRef(function(t,n){var i,a;const r=K({props:t,name:"MuiCheckbox"}),{checkedIcon:l=tt,color:f="primary",icon:h=ot,indeterminate:u=!1,indeterminateIcon:p=nt,inputProps:g,size:_="medium",className:v}=r,k=H(r,Je),s=u?p:h,d=u?p:l,c=y({},r,{color:f,indeterminate:u,size:_}),b=Ye(c);return o(et,y({type:"checkbox",inputProps:y({"data-indeterminate":u},g),icon:x.exports.cloneElement(s,{fontSize:(i=s.props.fontSize)!=null?i:_}),checkedIcon:x.exports.cloneElement(d,{fontSize:(a=d.props.fontSize)!=null?a:_}),ownerState:c,ref:n,className:E(b.root,v)},k,{classes:b}))}),it=rt,at=x.exports.createContext(),te=at;function st(e){return q("MuiGrid",e)}const ct=[0,1,2,3,4,5,6,7,8,9,10],lt=["column-reverse","column","row-reverse","row"],dt=["nowrap","wrap-reverse","wrap"],z=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],O=j("MuiGrid",["root","container","item","zeroMinWidth",...ct.map(e=>`spacing-xs-${e}`),...lt.map(e=>`direction-xs-${e}`),...dt.map(e=>`wrap-xs-${e}`),...z.map(e=>`grid-xs-${e}`),...z.map(e=>`grid-sm-${e}`),...z.map(e=>`grid-md-${e}`),...z.map(e=>`grid-lg-${e}`),...z.map(e=>`grid-xl-${e}`)]),ut=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function B(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function pt({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((i,a)=>{let r={};if(t[a]&&(n=t[a]),!n)return i;if(n===!0)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=W({values:t.columns,breakpoints:e.breakpoints.values}),f=typeof l=="object"?l[a]:l;if(f==null)return i;const h=`${Math.round(n/f*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const g=`calc(${h} + ${B(p)})`;u={flexBasis:g,maxWidth:g}}}r=y({flexBasis:h,flexGrow:0,maxWidth:h},u)}return e.breakpoints.values[a]===0?Object.assign(i,r):i[e.breakpoints.up(a)]=r,i},{})}function mt({theme:e,ownerState:t}){const n=W({values:t.direction,breakpoints:e.breakpoints.values});return Z({theme:e},n,i=>{const a={flexDirection:i};return i.indexOf("column")===0&&(a[`& > .${O.item}`]={maxWidth:"none"}),a})}function Ce({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(a=>{n===""&&t[a]!==0&&(n=a)});const i=Object.keys(e).sort((a,r)=>e[a]-e[r]);return i.slice(0,i.indexOf(n))}function ft({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let a={};if(n&&i!==0){const r=W({values:i,breakpoints:e.breakpoints.values});let l;typeof r=="object"&&(l=Ce({breakpoints:e.breakpoints.values,values:r})),a=Z({theme:e},r,(f,h)=>{var u;const p=e.spacing(f);return p!=="0px"?{marginTop:`-${B(p)}`,[`& > .${O.item}`]:{paddingTop:B(p)}}:(u=l)!=null&&u.includes(h)?{}:{marginTop:0,[`& > .${O.item}`]:{paddingTop:0}}})}return a}function ht({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let a={};if(n&&i!==0){const r=W({values:i,breakpoints:e.breakpoints.values});let l;typeof r=="object"&&(l=Ce({breakpoints:e.breakpoints.values,values:r})),a=Z({theme:e},r,(f,h)=>{var u;const p=e.spacing(f);return p!=="0px"?{width:`calc(100% + ${B(p)})`,marginLeft:`-${B(p)}`,[`& > .${O.item}`]:{paddingLeft:B(p)}}:(u=l)!=null&&u.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${O.item}`]:{paddingLeft:0}}})}return a}function _t(e,t,n={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(a=>{const r=e[a];Number(r)>0&&i.push(n[`spacing-${a}-${String(r)}`])}),i}const gt=U("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:a,item:r,spacing:l,wrap:f,zeroMinWidth:h,breakpoints:u}=n;let p=[];i&&(p=_t(l,u,t));const g=[];return u.forEach(_=>{const v=n[_];v&&g.push(t[`grid-${_}-${String(v)}`])}),[t.root,i&&t.container,r&&t.item,h&&t.zeroMinWidth,...p,a!=="row"&&t[`direction-xs-${String(a)}`],f!=="wrap"&&t[`wrap-xs-${String(f)}`],...g]}})(({ownerState:e})=>y({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),mt,ft,ht,pt);function Ct(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const n=[];return t.forEach(i=>{const a=e[i];if(Number(a)>0){const r=`spacing-${i}-${String(a)}`;n.push(r)}}),n}const vt=e=>{const{classes:t,container:n,direction:i,item:a,spacing:r,wrap:l,zeroMinWidth:f,breakpoints:h}=e;let u=[];n&&(u=Ct(r,h));const p=[];h.forEach(_=>{const v=e[_];v&&p.push(`grid-${_}-${String(v)}`)});const g={root:["root",n&&"container",a&&"item",f&&"zeroMinWidth",...u,i!=="row"&&`direction-xs-${String(i)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...p]};return X(g,st,t)},xt=x.exports.forwardRef(function(t,n){const i=K({props:t,name:"MuiGrid"}),{breakpoints:a}=Se(),r=$e(i),{className:l,columns:f,columnSpacing:h,component:u="div",container:p=!1,direction:g="row",item:_=!1,rowSpacing:v,spacing:k=0,wrap:s="wrap",zeroMinWidth:d=!1}=r,c=H(r,ut),b=v||k,R=h||k,D=x.exports.useContext(te),L=p?f||12:D,N={},S=y({},c);a.keys.forEach($=>{c[$]!=null&&(N[$]=c[$],delete S[$])});const P=y({},r,{columns:L,container:p,direction:g,item:_,rowSpacing:b,columnSpacing:R,wrap:s,zeroMinWidth:d,spacing:k},N,{breakpoints:a.keys}),F=vt(P);return o(te.Provider,{value:L,children:o(gt,y({ownerState:P,className:E(F.root,l),as:u,ref:n},S))})}),bt=xt;function yt(e){return q("MuiSkeleton",e)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const kt=["animation","className","component","height","style","variant","width"];let A=e=>e,oe,ne,re,ie;const wt=e=>{const{classes:t,variant:n,animation:i,hasChildren:a,width:r,height:l}=e;return X({root:["root",n,i,a&&"withChildren",a&&!r&&"fitContent",a&&!l&&"heightAuto"]},yt,t)},St=de(oe||(oe=A`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),$t=de(ne||(ne=A`
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
`)),It=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const n=qe(e.shape.borderRadius)||"px",i=Ue(e.shape.borderRadius);return y({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:le(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&Y(re||(re=A`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),St),({ownerState:e,theme:t})=>e.animation==="wave"&&Y(ie||(ie=A`
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
    `),$t,(t.vars||t).palette.action.hover)),Nt=x.exports.forwardRef(function(t,n){const i=K({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:r,component:l="span",height:f,style:h,variant:u="text",width:p}=i,g=H(i,kt),_=y({},i,{animation:a,component:l,variant:u,hasChildren:Boolean(g.children)}),v=wt(_);return o(It,y({as:l,ref:n,className:E(v.root,r),ownerState:_},g,{style:y({width:p,height:f},h)}))}),I=Nt;const Bt="_root_fv1o1_1",Pt="_container_fv1o1_12",zt="_title_fv1o1_23",Mt="_optionTitle_fv1o1_32",Ot="_optionContainer_fv1o1_41",Rt="_property_fv1o1_45",Dt="_propertyPrice_fv1o1_50",Lt="_propertyActions_fv1o1_54",Ft="_font_fv1o1_83",At="_buttonContainer_fv1o1_87",Et="_modalDescriptionContainer_fv1o1_92",Wt="_modalDescription_fv1o1_92",Gt="_foodCard_fv1o1_105",Tt="_foodCard__image_fv1o1_114",Vt="_span_fv1o1_120",jt="_foodCard__title_fv1o1_126",qt="_foodCard__description_fv1o1_141",Ut="_foodCard__footer_fv1o1_158",Kt="_foodCard__footer__price_fv1o1_164",Ht="_foodCard__footer_action_fv1o1_178",Xt="_drawerPaper_fv1o1_183",Zt="_drawerContent_fv1o1_200",Qt="_skeletonCardItem_fv1o1_207",Jt="_skeletonCardItemButton_fv1o1_215",Yt="_imageOpacity_fv1o1_1",m={root:Bt,container:Pt,title:zt,optionTitle:Mt,optionContainer:Ot,property:Rt,propertyPrice:Dt,propertyActions:Lt,font:Ft,buttonContainer:At,modalDescriptionContainer:Et,modalDescription:Wt,foodCard:Gt,foodCard__image:Tt,span:Vt,foodCard__title:jt,foodCard__description:qt,foodCard__footer:Ut,foodCard__footer__price:Kt,foodCard__footer_action:Ht,drawerPaper:Xt,drawerContent:Zt,skeletonCardItem:Qt,skeletonCardItemButton:Jt,imageOpacity:Yt},ae=({onAdd:e,price:t})=>{const n=pe("(max-width:768px)");return o(Fe,{onClick:e,className:Ee.root,variant:"outlined",children:n?o(Ae,{type:"plus"}):`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ${t?`${t} \u20BD`:""}`})},eo=({food:e,selectedProperty:t,setCartItem:n,onSend:i,handleChangePrice:a})=>{var k;const{selectedOptions:r,setSelectedOptions:l,setPrice:f}=x.exports.useContext(ve);x.exports.useState(null);const h=s=>{let d=[];return s.map(c=>{d[c.id]=c}),d},u=s=>{if(Object.values(r).find(d=>parseInt(s.id)===parseInt(d.id))){const d=Object.values(r).filter(b=>parseInt(b.id)!==parseInt(s.id)),c=h(d);l(c),_(c)}else{const d={...r,[s.id]:{quantity:1,id:s.id,optionCategoryId:s.option_category_id,price:s.price}};l(d),_(d)}},p=s=>{const d={...r,[s]:{quantity:r[s].quantity+1,id:s,price:r[s].price,optionCategoryId:r[s].optionCategoryId}};l(d),_(d)},g=s=>{if(r[s].quantity-1===0)return;const d={...r,[s]:{quantity:r[s].quantity-1,id:s,price:r[s].price,optionCategoryId:r[s].optionCategoryId}};if(l(d),_(d),r[s].quantity===0){const c=Object.values(r).filter(b=>b.id!==s);l(c)}},_=s=>{let d=0;Object.values(s).map(c=>{d+=c.price*c.quantity}),f(d+t.current.price),a(d+t.current.price)},v=s=>{if(r[s.id])return;const d=Object.values(r).filter(b=>parseInt(b.optionCategoryId)!==parseInt(s.option_category_id)),c=h(d);l({...c,[s.id]:{quantity:1,id:s.id,price:s.price,optionCategoryId:s.option_category_id}})};return(k=e==null?void 0:e.options)!=null&&k.length?o("div",{children:e.options.map((s,d)=>o("div",{className:m.optionContainer,children:C(me,{children:[o(fe,{className:m.optionTitle,id:"group_-"+d,children:s.categoryName}),o(he,{name:"group_"+d,"aria-labelledby":"group_"+d,children:s.items.map((c,b)=>C("div",{className:m.property,children:[o(_e,{value:c.id,className:m.font,onChange:c.multiplier===1&&s.required===!0?()=>{}:u.bind(null,c),onClick:c.multiplier===1&&s.required===!0?v.bind(null,c):()=>{},control:c.multiplier===1&&s.required===!0?o(ge,{}):o(it,{}),label:C("span",{children:[c.name," ",C("span",{className:m.propertyPrice,children:["+",c.price,"\u0420"]})]})},c.id),r[c.id]&&c.multiplier>1&&o(We,{quantity:r[c.id].quantity,onDecrement:()=>g(c.id),onIncrement:()=>p(c.id)})]},c.id))})]})},d))}):null},ve=Ie.createContext({}),to=({food:e})=>{const{name:t,description:n,img:i,properties:a=[],options:r=[]}=e,{openAlert:l}=Ne(),f=Be(Pe),[h]=ze(),[u,p]=x.exports.useState(!1),g=pe("(max-width:768px)"),_=g?10:18,v=t,k=n,[s,d]=x.exports.useState([]),c=Me(),[b,R]=x.exports.useState(!1),[D,L]=x.exports.useState(a[0].id),N=x.exports.useRef(a[0]),S=()=>{if(!f){c(ee(!0));return}R(!0)},P=()=>R(!1),[F,$]=x.exports.useState(N.current.price),xe=w=>{L(w),N.current=a.find(ye=>ye.id===w)},be={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:g?"100%":830,bgcolor:"#fff",boxShadow:24,p:4,borderRadius:"30px"},Q=()=>C(ue,{children:[o(T,{className:m.title,id:"modal-modal-title",variant:"h6",component:"h2",children:t}),C("div",{className:m.container,children:[o("div",{children:o("div",{className:m.foodCard__image,children:o("img",{src:i,alt:"",loading:"lazy"})})}),o("div",{className:m.modalDescriptionContainer,children:o(T,{className:m.modalDescription,id:"modal-modal-description",sx:{mt:2},children:n||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})})]}),a.length>1&&o("div",{className:m.optionContainer,children:C(me,{children:[o(fe,{className:m.optionTitle,id:"demo-row-radio-buttons-group-label",children:"\u041F\u043E\u0440\u0446\u0438\u044F"}),o(he,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:a.map(w=>o(_e,{onClick:()=>xe(w.id),checked:w.id===D,value:w.id,control:o(ge,{}),label:w.name},w.id))})]})}),o(eo,{handleChangePrice:w=>$(w),food:e,selectedProperty:N}),o("br",{}),o(je,{variant:"middle"}),o("div",{className:m.buttonContainer,children:o(ae,{price:F,onAdd:J})})]}),J=async()=>{if(!f){c(ee(!0));return}await h({foodPropertyId:D,quantity:1,options:s}),c(await Re()),l("\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443","success")};return C(ve.Provider,{value:{selectedOptions:s,setSelectedOptions:d,price:F,setPrice:$},children:[C("div",{className:m.foodCard,children:[o("div",{className:m.foodCard__image,onClick:S,children:o("img",{loading:"lazy",src:i,alt:""})}),C("div",{className:m.foodCard__title,title:t,style:{cursor:"pointer"},onClick:()=>S(),children:[v," ",v.length===_?"...":""]}),C("div",{className:m.foodCard__description,children:[u?n||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442":k||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"," ",!u&&k.length===21?o("span",{className:m.span,onClick:()=>S(),children:"..."}):""]}),C("div",{className:m.foodCard__footer,children:[C("div",{children:[a.length>1?"\u041E\u0442":"",C("span",{className:m.foodCard__footer__price,children:["\xA0",a[0].price," \u0420"]})]}),o("div",{className:m.foodCard__footer_action,children:o(ae,{onAdd:a.length>1||r.length?S:J})})]})]}),g?o(Ve,{open:b,onClose:P,anchor:"bottom",classes:{paper:m.drawerPaper},children:o("div",{className:m.drawerContent,children:Q()})}):o(Oe,{open:b,onClose:P,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(Ge,{sx:be,children:Q()})})]})},oo="_cards_1c9ez_1",no="_cardsList_1c9ez_5",ro="_categoryList_1c9ez_34",io="_result_1c9ez_54",ao="_chefsSkeleton_1c9ez_61",so="_items_1c9ez_66",M={cards:oo,cardsList:no,categoryList:ro,result:io,chefsSkeleton:ao,items:so},co=({children:e,classes:t})=>o("div",{className:M.cards,children:o("div",{className:E({[M.categoryList]:(t==null?void 0:t.list)==="categoryList"},M.cardsList,t==null?void 0:t.list),children:e})}),se=({children:e,classes:t,isLoading:n,isLoaded:i,itemsLength:a,skeletonWidth:r,skeletonCount:l=6})=>o(co,{classes:t,children:e}),lo=()=>C("div",{className:m.skeletonCardItem,style:{width:272},children:[o(I,{variant:"rect",width:272,height:200}),C("div",{className:"p-20",children:[o(I,{width:"60%"}),o(I,{width:"70%"}),o("div",{className:"d-flex align-items-center",children:o(I,{width:"60px",height:35})}),o(I,{width:"90%"}),C("div",{className:"d-flex align-items-center justify-content-between",style:{position:"relative",top:5},children:[o(I,{width:"20%",height:35}),o(I,{width:"40px",height:"65px",className:m.skeletonCardItemButton})]})]})]}),uo=({categories:e,isLoading:t})=>t?o("div",{children:o(se,{children:Array.from({length:8},(n,i)=>o("div",{className:M.chefsSkeleton,children:o(lo,{},i)},i))})}):o("div",{children:e.map(n=>C("div",{className:M.items,id:n.slug,children:[o(T,{variant:"h6",style:{fontSize:36},children:n.name}),o(se,{children:n.foodProperties.map(i=>o(bt,{item:!0,xs:4,children:o(to,{food:i},i.id)},i.id))})]},n.id))}),po=()=>{const{data:e,isLoading:t}=De();return o(ke,{children:o(uo,{isLoading:t,categories:e==null?void 0:e.data})})};function ko(e){return C(ue,{children:[o(Le,{title:"Ingvine Food - \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u043A\u0443\u0441\u043D\u043E\u0439 \u0435\u0434\u044B"}),o(po,{})]})}export{ko as default};
