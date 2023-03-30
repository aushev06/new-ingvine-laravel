import{M as ke}from"./MainLayout.d33ccc9f.js";import{ae as V,a as o,y as j,x as q,Z as U,G as we,I as ce,n as b,J as le,r as v,M as K,o as H,c as W,B as X,N as Se,ak as A,al as Z,am as de,an as Y,j as C,R as $e,a8 as Ie,b as Ne,d as Be,ao as Pe,f as ze,g as ee,F as ue,aa as Me,m as Oe,H as Re}from"./app.4b3f38bf.js";import{e as De,B as Le,I as Fe,M as Ee,T}from"./dividerClasses.e1557578.js";import{s as We,I as Ae}from"./index.ad3959c8.js";import{u as pe,B as Ge}from"./index.98d55eb7.js";import{F as me,a as he}from"./FormLabel.e1a7c57c.js";import{S as Te,R as fe,F as ge,a as _e}from"./RadioGroup.85d9db11.js";import{D as Ve}from"./index.af3381f0.js";import{D as je}from"./Divider.990d00d6.js";import"./NavLink.5cc50047.js";function qe(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ue(e){return parseFloat(e)}const Ke=V(o("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),He=V(o("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Xe=V(o("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ze(e){return q("MuiCheckbox",e)}const Qe=j("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),G=Qe,Je=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ye=e=>{const{classes:t,indeterminate:n,color:i}=e,a={root:["root",n&&"indeterminate",`color${ce(i)}`]},r=X(a,Ze,t);return b({},t,r)},et=U(Te,{shouldForwardProp:e=>we(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,n.color!=="default"&&t[`color${ce(n.color)}`]]}})(({theme:e,ownerState:t})=>b({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:le(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${G.checked}, &.${G.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${G.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),tt=o(He,{}),ot=o(Ke,{}),nt=o(Xe,{}),rt=v.exports.forwardRef(function(t,n){var i,a;const r=K({props:t,name:"MuiCheckbox"}),{checkedIcon:l=tt,color:h="primary",icon:f=ot,indeterminate:u=!1,indeterminateIcon:p=nt,inputProps:_,size:g="medium",className:y}=r,k=H(r,Je),s=u?p:f,d=u?p:l,c=b({},r,{color:h,indeterminate:u,size:g}),x=Ye(c);return o(et,b({type:"checkbox",inputProps:b({"data-indeterminate":u},_),icon:v.exports.cloneElement(s,{fontSize:(i=s.props.fontSize)!=null?i:g}),checkedIcon:v.exports.cloneElement(d,{fontSize:(a=d.props.fontSize)!=null?a:g}),ownerState:c,ref:n,className:W(x.root,y)},k,{classes:x}))}),it=rt,at=v.exports.createContext(),te=at;function st(e){return q("MuiGrid",e)}const ct=[0,1,2,3,4,5,6,7,8,9,10],lt=["column-reverse","column","row-reverse","row"],dt=["nowrap","wrap-reverse","wrap"],z=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],O=j("MuiGrid",["root","container","item","zeroMinWidth",...ct.map(e=>`spacing-xs-${e}`),...lt.map(e=>`direction-xs-${e}`),...dt.map(e=>`wrap-xs-${e}`),...z.map(e=>`grid-xs-${e}`),...z.map(e=>`grid-sm-${e}`),...z.map(e=>`grid-md-${e}`),...z.map(e=>`grid-lg-${e}`),...z.map(e=>`grid-xl-${e}`)]),ut=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function B(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function pt({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((i,a)=>{let r={};if(t[a]&&(n=t[a]),!n)return i;if(n===!0)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=A({values:t.columns,breakpoints:e.breakpoints.values}),h=typeof l=="object"?l[a]:l;if(h==null)return i;const f=`${Math.round(n/h*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const _=`calc(${f} + ${B(p)})`;u={flexBasis:_,maxWidth:_}}}r=b({flexBasis:f,flexGrow:0,maxWidth:f},u)}return e.breakpoints.values[a]===0?Object.assign(i,r):i[e.breakpoints.up(a)]=r,i},{})}function mt({theme:e,ownerState:t}){const n=A({values:t.direction,breakpoints:e.breakpoints.values});return Z({theme:e},n,i=>{const a={flexDirection:i};return i.indexOf("column")===0&&(a[`& > .${O.item}`]={maxWidth:"none"}),a})}function Ce({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(a=>{n===""&&t[a]!==0&&(n=a)});const i=Object.keys(e).sort((a,r)=>e[a]-e[r]);return i.slice(0,i.indexOf(n))}function ht({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let a={};if(n&&i!==0){const r=A({values:i,breakpoints:e.breakpoints.values});let l;typeof r=="object"&&(l=Ce({breakpoints:e.breakpoints.values,values:r})),a=Z({theme:e},r,(h,f)=>{var u;const p=e.spacing(h);return p!=="0px"?{marginTop:`-${B(p)}`,[`& > .${O.item}`]:{paddingTop:B(p)}}:(u=l)!=null&&u.includes(f)?{}:{marginTop:0,[`& > .${O.item}`]:{paddingTop:0}}})}return a}function ft({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let a={};if(n&&i!==0){const r=A({values:i,breakpoints:e.breakpoints.values});let l;typeof r=="object"&&(l=Ce({breakpoints:e.breakpoints.values,values:r})),a=Z({theme:e},r,(h,f)=>{var u;const p=e.spacing(h);return p!=="0px"?{width:`calc(100% + ${B(p)})`,marginLeft:`-${B(p)}`,[`& > .${O.item}`]:{paddingLeft:B(p)}}:(u=l)!=null&&u.includes(f)?{}:{width:"100%",marginLeft:0,[`& > .${O.item}`]:{paddingLeft:0}}})}return a}function gt(e,t,n={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(a=>{const r=e[a];Number(r)>0&&i.push(n[`spacing-${a}-${String(r)}`])}),i}const _t=U("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:a,item:r,spacing:l,wrap:h,zeroMinWidth:f,breakpoints:u}=n;let p=[];i&&(p=gt(l,u,t));const _=[];return u.forEach(g=>{const y=n[g];y&&_.push(t[`grid-${g}-${String(y)}`])}),[t.root,i&&t.container,r&&t.item,f&&t.zeroMinWidth,...p,a!=="row"&&t[`direction-xs-${String(a)}`],h!=="wrap"&&t[`wrap-xs-${String(h)}`],..._]}})(({ownerState:e})=>b({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),mt,ht,ft,pt);function Ct(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const n=[];return t.forEach(i=>{const a=e[i];if(Number(a)>0){const r=`spacing-${i}-${String(a)}`;n.push(r)}}),n}const yt=e=>{const{classes:t,container:n,direction:i,item:a,spacing:r,wrap:l,zeroMinWidth:h,breakpoints:f}=e;let u=[];n&&(u=Ct(r,f));const p=[];f.forEach(g=>{const y=e[g];y&&p.push(`grid-${g}-${String(y)}`)});const _={root:["root",n&&"container",a&&"item",h&&"zeroMinWidth",...u,i!=="row"&&`direction-xs-${String(i)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...p]};return X(_,st,t)},vt=v.exports.forwardRef(function(t,n){const i=K({props:t,name:"MuiGrid"}),{breakpoints:a}=Se(),r=De(i),{className:l,columns:h,columnSpacing:f,component:u="div",container:p=!1,direction:_="row",item:g=!1,rowSpacing:y,spacing:k=0,wrap:s="wrap",zeroMinWidth:d=!1}=r,c=H(r,ut),x=y||k,R=f||k,D=v.exports.useContext(te),L=p?h||12:D,N={},S=b({},c);a.keys.forEach($=>{c[$]!=null&&(N[$]=c[$],delete S[$])});const P=b({},r,{columns:L,container:p,direction:_,item:g,rowSpacing:x,columnSpacing:R,wrap:s,zeroMinWidth:d,spacing:k},N,{breakpoints:a.keys}),F=yt(P);return o(te.Provider,{value:L,children:o(_t,b({ownerState:P,className:W(F.root,l),as:u,ref:n},S))})}),xt=vt;function bt(e){return q("MuiSkeleton",e)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const kt=["animation","className","component","height","style","variant","width"];let E=e=>e,oe,ne,re,ie;const wt=e=>{const{classes:t,variant:n,animation:i,hasChildren:a,width:r,height:l}=e;return X({root:["root",n,i,a&&"withChildren",a&&!r&&"fitContent",a&&!l&&"heightAuto"]},bt,t)},St=de(oe||(oe=E`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),$t=de(ne||(ne=E`
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
`)),It=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const n=qe(e.shape.borderRadius)||"px",i=Ue(e.shape.borderRadius);return b({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:le(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&Y(re||(re=E`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),St),({ownerState:e,theme:t})=>e.animation==="wave"&&Y(ie||(ie=E`
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
    `),$t,(t.vars||t).palette.action.hover)),Nt=v.exports.forwardRef(function(t,n){const i=K({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:r,component:l="span",height:h,style:f,variant:u="text",width:p}=i,_=H(i,kt),g=b({},i,{animation:a,component:l,variant:u,hasChildren:Boolean(_.children)}),y=wt(g);return o(It,b({as:l,ref:n,className:W(y.root,r),ownerState:g},_,{style:b({width:p,height:h},f)}))}),I=Nt;const Bt="_root_yg9p1_1",Pt="_container_yg9p1_12",zt="_title_yg9p1_23",Mt="_optionTitle_yg9p1_32",Ot="_optionContainer_yg9p1_41",Rt="_property_yg9p1_45",Dt="_propertyPrice_yg9p1_50",Lt="_propertyActions_yg9p1_54",Ft="_font_yg9p1_83",Et="_buttonContainer_yg9p1_87",Wt="_modalDescriptionContainer_yg9p1_92",At="_modalDescription_yg9p1_92",Gt="_foodCard_yg9p1_105",Tt="_foodCard__image_yg9p1_114",Vt="_span_yg9p1_120",jt="_foodCard__title_yg9p1_126",qt="_foodCard__description_yg9p1_140",Ut="_foodCard__footer_yg9p1_156",Kt="_foodCard__footer__price_yg9p1_162",Ht="_foodCard__footer_action_yg9p1_176",Xt="_drawerPaper_yg9p1_181",Zt="_drawerContent_yg9p1_198",Qt="_skeletonCardItem_yg9p1_204",Jt="_skeletonCardItemButton_yg9p1_212",Yt="_imageOpacity_yg9p1_1",m={root:Bt,container:Pt,title:zt,optionTitle:Mt,optionContainer:Ot,property:Rt,propertyPrice:Dt,propertyActions:Lt,font:Ft,buttonContainer:Et,modalDescriptionContainer:Wt,modalDescription:At,foodCard:Gt,foodCard__image:Tt,span:Vt,foodCard__title:jt,foodCard__description:qt,foodCard__footer:Ut,foodCard__footer__price:Kt,foodCard__footer_action:Ht,drawerPaper:Xt,drawerContent:Zt,skeletonCardItem:Qt,skeletonCardItemButton:Jt,imageOpacity:Yt},ae=({onAdd:e,price:t})=>{const n=pe("(max-width:768px)");return o(Le,{onClick:e,className:We.root,variant:"outlined",children:n?o(Fe,{type:"plus"}):`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ${t?`${t} \u20BD`:""}`})},eo=({food:e,selectedProperty:t,setCartItem:n,onSend:i,handleChangePrice:a})=>{var k;const{selectedOptions:r,setSelectedOptions:l,setPrice:h}=v.exports.useContext(ye);v.exports.useState(null);const f=s=>{let d=[];return s.map(c=>{d[c.id]=c}),d},u=s=>{if(Object.values(r).find(d=>parseInt(s.id)===parseInt(d.id))){const d=Object.values(r).filter(x=>parseInt(x.id)!==parseInt(s.id)),c=f(d);l(c),g(c)}else{const d={...r,[s.id]:{quantity:1,id:s.id,optionCategoryId:s.option_category_id,price:s.price}};l(d),g(d)}},p=s=>{const d={...r,[s]:{quantity:r[s].quantity+1,id:s,price:r[s].price,optionCategoryId:r[s].optionCategoryId}};l(d),g(d)},_=s=>{if(r[s].quantity-1===0)return;const d={...r,[s]:{quantity:r[s].quantity-1,id:s,price:r[s].price,optionCategoryId:r[s].optionCategoryId}};if(l(d),g(d),r[s].quantity===0){const c=Object.values(r).filter(x=>x.id!==s);l(c)}},g=s=>{let d=0;Object.values(s).map(c=>{d+=c.price*c.quantity}),h(d+t.current.price),a(d+t.current.price)},y=s=>{if(r[s.id])return;const d=Object.values(r).filter(x=>parseInt(x.optionCategoryId)!==parseInt(s.option_category_id)),c=f(d);l({...c,[s.id]:{quantity:1,id:s.id,price:s.price,optionCategoryId:s.option_category_id}})};return(k=e==null?void 0:e.options)!=null&&k.length?o("div",{children:e.options.map((s,d)=>o("div",{className:m.optionContainer,children:C(me,{children:[o(he,{className:m.optionTitle,id:"group_-"+d,children:s.categoryName}),o(fe,{name:"group_"+d,"aria-labelledby":"group_"+d,children:s.items.map((c,x)=>C("div",{className:m.property,children:[o(ge,{value:c.id,className:m.font,onChange:c.multiplier===1&&s.required===!0?()=>{}:u.bind(null,c),onClick:c.multiplier===1&&s.required===!0?y.bind(null,c):()=>{},control:c.multiplier===1&&s.required===!0?o(_e,{}):o(it,{}),label:C("span",{children:[c.name," ",C("span",{className:m.propertyPrice,children:["+",c.price,"\u0420"]})]})},c.id),r[c.id]&&c.multiplier>1&&o(Ae,{quantity:r[c.id].quantity,onDecrement:()=>_(c.id),onIncrement:()=>p(c.id)})]},c.id))})]})},d))}):null},ye=$e.createContext({}),to=({food:e})=>{const{name:t,description:n,img:i,properties:a=[],options:r=[]}=e,{openAlert:l}=Ie(),h=Ne(Be),[f]=Pe(),[u,p]=v.exports.useState(!1),_=pe("(max-width:768px)"),g=_?10:18,y=t.slice(0,g),k=n.slice(0,21),[s,d]=v.exports.useState([]),c=ze(),[x,R]=v.exports.useState(!1),[D,L]=v.exports.useState(a[0].id),N=v.exports.useRef(a[0]),S=()=>{if(!h){c(ee(!0));return}R(!0)},P=()=>R(!1),[F,$]=v.exports.useState(N.current.price),ve=w=>{L(w),N.current=a.find(be=>be.id===w)},xe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:_?"100%":830,bgcolor:"#fff",boxShadow:24,p:4,borderRadius:"30px"},Q=()=>C(ue,{children:[o(T,{className:m.title,id:"modal-modal-title",variant:"h6",component:"h2",children:t}),C("div",{className:m.container,children:[o("div",{children:o("div",{className:m.foodCard__image,children:o("img",{src:i,alt:"",loading:"lazy"})})}),o("div",{className:m.modalDescriptionContainer,children:o(T,{className:m.modalDescription,id:"modal-modal-description",sx:{mt:2},children:n||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})})]}),a.length>1&&o("div",{className:m.optionContainer,children:C(me,{children:[o(he,{className:m.optionTitle,id:"demo-row-radio-buttons-group-label",children:"\u041F\u043E\u0440\u0446\u0438\u044F"}),o(fe,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:a.map(w=>o(ge,{onClick:()=>ve(w.id),checked:w.id===D,value:w.id,control:o(_e,{}),label:w.name},w.id))})]})}),o(eo,{handleChangePrice:w=>$(w),food:e,selectedProperty:N}),o("br",{}),o(je,{variant:"middle"}),o("div",{className:m.buttonContainer,children:o(ae,{price:F,onAdd:J})})]}),J=async()=>{if(!h){c(ee(!0));return}await f({foodPropertyId:D,quantity:1,options:s}),c(await Me()),l("\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443","success")};return C(ye.Provider,{value:{selectedOptions:s,setSelectedOptions:d,price:F,setPrice:$},children:[C("div",{className:m.foodCard,children:[o("div",{className:m.foodCard__image,onClick:S,children:o("img",{loading:"lazy",src:i,alt:""})}),C("div",{className:m.foodCard__title,title:t,style:{cursor:"pointer"},onClick:()=>S(),children:[y," ",y.length===g?"...":""]}),C("div",{className:m.foodCard__description,children:[u?n||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442":k||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"," ",!u&&k.length===21?o("span",{className:m.span,onClick:()=>S(),children:"..."}):""]}),C("div",{className:m.foodCard__footer,children:[C("div",{children:[a.length>1?"\u041E\u0442":"",C("span",{className:m.foodCard__footer__price,children:["\xA0",a[0].price," \u0420"]})]}),o("div",{className:m.foodCard__footer_action,children:o(ae,{onAdd:a.length>1||r.length?S:J})})]})]}),_?o(Ve,{open:x,onClose:P,anchor:"bottom",classes:{paper:m.drawerPaper},children:o("div",{className:m.drawerContent,children:Q()})}):o(Ee,{open:x,onClose:P,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(Ge,{sx:xe,children:Q()})})]})},oo="_cards_1c9ez_1",no="_cardsList_1c9ez_5",ro="_categoryList_1c9ez_34",io="_result_1c9ez_54",ao="_chefsSkeleton_1c9ez_61",so="_items_1c9ez_66",M={cards:oo,cardsList:no,categoryList:ro,result:io,chefsSkeleton:ao,items:so},co=({children:e,classes:t})=>o("div",{className:M.cards,children:o("div",{className:W({[M.categoryList]:(t==null?void 0:t.list)==="categoryList"},M.cardsList,t==null?void 0:t.list),children:e})}),se=({children:e,classes:t,isLoading:n,isLoaded:i,itemsLength:a,skeletonWidth:r,skeletonCount:l=6})=>o(co,{classes:t,children:e}),lo=()=>C("div",{className:m.skeletonCardItem,style:{width:272},children:[o(I,{variant:"rect",width:272,height:200}),C("div",{className:"p-20",children:[o(I,{width:"60%"}),o(I,{width:"70%"}),o("div",{className:"d-flex align-items-center",children:o(I,{width:"60px",height:35})}),o(I,{width:"90%"}),C("div",{className:"d-flex align-items-center justify-content-between",style:{position:"relative",top:5},children:[o(I,{width:"20%",height:35}),o(I,{width:"40px",height:"65px",className:m.skeletonCardItemButton})]})]})]}),uo=({categories:e,isLoading:t})=>t?o("div",{children:o(se,{children:Array.from({length:8},(n,i)=>o("div",{className:M.chefsSkeleton,children:o(lo,{},i)},i))})}):o("div",{children:e.map(n=>C("div",{className:M.items,id:n.slug,children:[o(T,{variant:"h6",style:{fontSize:36},children:n.name}),o(se,{children:n.foodProperties.map(i=>o(xt,{item:!0,xs:4,children:o(to,{food:i},i.id)},i.id))})]},n.id))}),po=()=>{const{data:e,isLoading:t}=Oe();return o(ke,{children:o(uo,{isLoading:t,categories:e==null?void 0:e.data})})};function ko(e){return C(ue,{children:[o(Re,{title:"Vanilla Cake - \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u043A\u0443\u0441\u043D\u043E\u0439 \u0435\u0434\u044B"}),o(po,{})]})}export{ko as default};
