import{M as Me}from"./MainLayout.ec998afe.js";import{ae as K,a,y as H,x as X,Z,G as Be,I as fe,n as x,J as me,r as C,M as Q,o as J,c as F,B as Y,N as Pe,ak as A,al as ee,am as ge,an as oe,j as v,R as Re,a8 as ze,b as Ve,d as De,ao as Le,f as _e,g as re,F as ve,aa as We,ap as Ee,m as Fe,H as Ae}from"./app.376d1516.js";import{e as je,B as Ge,I as Te,M as qe,T as G}from"./dividerClasses.f372beda.js";import{s as Ue,I as Ke}from"./index.686bfdd4.js";import{u as Ce,B as He}from"./index.9dc7392c.js";import{F as ye,a as be}from"./FormLabel.76202fc8.js";import{S as Xe,R as xe,F as ke,a as we}from"./RadioGroup.1e666d83.js";import{D as Ze}from"./index.2f342b18.js";import{D as Qe}from"./Divider.6785c576.js";import"./NavLink.65145357.js";function Je(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ye(e){return parseFloat(e)}const et=K(a("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),tt=K(a("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),nt=K(a("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ot(e){return X("MuiCheckbox",e)}const rt=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=rt,it=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],at=e=>{const{classes:t,indeterminate:r,color:i}=e,n={root:["root",r&&"indeterminate",`color${fe(i)}`]},o=Y(n,ot,t);return x({},t,o)},st=Z(Xe,{shouldForwardProp:e=>Be(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,r.color!=="default"&&t[`color${fe(r.color)}`]]}})(({theme:e,ownerState:t})=>x({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:me(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ct=a(tt,{}),lt=a(et,{}),dt=a(nt,{}),ut=C.exports.forwardRef(function(t,r){var i,n;const o=Q({props:t,name:"MuiCheckbox"}),{checkedIcon:c=ct,color:l="primary",icon:h=lt,indeterminate:d=!1,indeterminateIcon:p=dt,inputProps:_,size:g="medium",className:y}=o,k=J(o,it),s=d?p:h,f=d?p:c,u=x({},o,{color:l,indeterminate:d,size:g}),b=at(u);return a(st,x({type:"checkbox",inputProps:x({"data-indeterminate":d},_),icon:C.exports.cloneElement(s,{fontSize:(i=s.props.fontSize)!=null?i:g}),checkedIcon:C.exports.cloneElement(f,{fontSize:(n=f.props.fontSize)!=null?n:g}),ownerState:u,ref:r,className:F(b.root,y)},k,{classes:b}))}),pt=ut,ht=C.exports.createContext(),ie=ht;function ft(e){return X("MuiGrid",e)}const mt=[0,1,2,3,4,5,6,7,8,9,10],gt=["column-reverse","column","row-reverse","row"],_t=["nowrap","wrap-reverse","wrap"],B=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],R=H("MuiGrid",["root","container","item","zeroMinWidth",...mt.map(e=>`spacing-xs-${e}`),...gt.map(e=>`direction-xs-${e}`),..._t.map(e=>`wrap-xs-${e}`),...B.map(e=>`grid-xs-${e}`),...B.map(e=>`grid-sm-${e}`),...B.map(e=>`grid-md-${e}`),...B.map(e=>`grid-lg-${e}`),...B.map(e=>`grid-xl-${e}`)]),vt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function O(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Ct({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((i,n)=>{let o={};if(t[n]&&(r=t[n]),!r)return i;if(r===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=A({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof c=="object"?c[n]:c;if(l==null)return i;const h=`${Math.round(r/l*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const _=`calc(${h} + ${O(p)})`;d={flexBasis:_,maxWidth:_}}}o=x({flexBasis:h,flexGrow:0,maxWidth:h},d)}return e.breakpoints.values[n]===0?Object.assign(i,o):i[e.breakpoints.up(n)]=o,i},{})}function yt({theme:e,ownerState:t}){const r=A({values:t.direction,breakpoints:e.breakpoints.values});return ee({theme:e},r,i=>{const n={flexDirection:i};return i.indexOf("column")===0&&(n[`& > .${R.item}`]={maxWidth:"none"}),n})}function Se({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(n=>{r===""&&t[n]!==0&&(r=n)});const i=Object.keys(e).sort((n,o)=>e[n]-e[o]);return i.slice(0,i.indexOf(r))}function bt({theme:e,ownerState:t}){const{container:r,rowSpacing:i}=t;let n={};if(r&&i!==0){const o=A({values:i,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=Se({breakpoints:e.breakpoints.values,values:o})),n=ee({theme:e},o,(l,h)=>{var d;const p=e.spacing(l);return p!=="0px"?{marginTop:`-${O(p)}`,[`& > .${R.item}`]:{paddingTop:O(p)}}:(d=c)!=null&&d.includes(h)?{}:{marginTop:0,[`& > .${R.item}`]:{paddingTop:0}}})}return n}function xt({theme:e,ownerState:t}){const{container:r,columnSpacing:i}=t;let n={};if(r&&i!==0){const o=A({values:i,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=Se({breakpoints:e.breakpoints.values,values:o})),n=ee({theme:e},o,(l,h)=>{var d;const p=e.spacing(l);return p!=="0px"?{width:`calc(100% + ${O(p)})`,marginLeft:`-${O(p)}`,[`& > .${R.item}`]:{paddingLeft:O(p)}}:(d=c)!=null&&d.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${R.item}`]:{paddingLeft:0}}})}return n}function kt(e,t,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(n=>{const o=e[n];Number(o)>0&&i.push(r[`spacing-${n}-${String(o)}`])}),i}const wt=Z("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:i,direction:n,item:o,spacing:c,wrap:l,zeroMinWidth:h,breakpoints:d}=r;let p=[];i&&(p=kt(c,d,t));const _=[];return d.forEach(g=>{const y=r[g];y&&_.push(t[`grid-${g}-${String(y)}`])}),[t.root,i&&t.container,o&&t.item,h&&t.zeroMinWidth,...p,n!=="row"&&t[`direction-xs-${String(n)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],..._]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),yt,bt,xt,Ct);function St(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return t.forEach(i=>{const n=e[i];if(Number(n)>0){const o=`spacing-${i}-${String(n)}`;r.push(o)}}),r}const It=e=>{const{classes:t,container:r,direction:i,item:n,spacing:o,wrap:c,zeroMinWidth:l,breakpoints:h}=e;let d=[];r&&(d=St(o,h));const p=[];h.forEach(g=>{const y=e[g];y&&p.push(`grid-${g}-${String(y)}`)});const _={root:["root",r&&"container",n&&"item",l&&"zeroMinWidth",...d,i!=="row"&&`direction-xs-${String(i)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...p]};return Y(_,ft,t)},$t=C.exports.forwardRef(function(t,r){const i=Q({props:t,name:"MuiGrid"}),{breakpoints:n}=Pe(),o=je(i),{className:c,columns:l,columnSpacing:h,component:d="div",container:p=!1,direction:_="row",item:g=!1,rowSpacing:y,spacing:k=0,wrap:s="wrap",zeroMinWidth:f=!1}=o,u=J(o,vt),b=y||k,z=h||k,V=C.exports.useContext(ie),D=p?l||12:V,N={},S=x({},u);n.keys.forEach(I=>{u[I]!=null&&(N[I]=u[I],delete S[I])});const M=x({},o,{columns:D,container:p,direction:_,item:g,rowSpacing:b,columnSpacing:z,wrap:s,zeroMinWidth:f,spacing:k},N,{breakpoints:n.keys}),L=It(M);return a(ie.Provider,{value:D,children:a(wt,x({ownerState:M,className:F(L.root,c),as:d,ref:r},S))})}),Nt=$t;function Ot(e){return X("MuiSkeleton",e)}H("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Mt=["animation","className","component","height","style","variant","width"];let E=e=>e,ae,se,ce,le;const Bt=e=>{const{classes:t,variant:r,animation:i,hasChildren:n,width:o,height:c}=e;return Y({root:["root",r,i,n&&"withChildren",n&&!o&&"fitContent",n&&!c&&"heightAuto"]},Ot,t)},Pt=ge(ae||(ae=E`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Rt=ge(se||(se=E`
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
`)),zt=Z("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const r=Je(e.shape.borderRadius)||"px",i=Ye(e.shape.borderRadius);return x({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:me(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&oe(ce||(ce=E`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Pt),({ownerState:e,theme:t})=>e.animation==="wave"&&oe(le||(le=E`
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
    `),Rt,(t.vars||t).palette.action.hover)),Vt=C.exports.forwardRef(function(t,r){const i=Q({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:c="span",height:l,style:h,variant:d="text",width:p}=i,_=J(i,Mt),g=x({},i,{animation:n,component:c,variant:d,hasChildren:Boolean(_.children)}),y=Bt(g);return a(zt,x({as:c,ref:r,className:F(y.root,o),ownerState:g},_,{style:x({width:p,height:l},h)}))}),$=Vt;const Dt="_root_1aynl_1",Lt="_container_1aynl_12",Wt="_title_1aynl_23",Et="_optionTitle_1aynl_32",Ft="_optionContainer_1aynl_41",At="_property_1aynl_45",jt="_propertyPrice_1aynl_50",Gt="_propertyActions_1aynl_54",Tt="_font_1aynl_83",qt="_buttonContainer_1aynl_87",Ut="_modalDescriptionContainer_1aynl_92",Kt="_modalDescription_1aynl_92",Ht="_foodCard_1aynl_105",Xt="_foodCard__image_1aynl_114",Zt="_span_1aynl_120",Qt="_foodCard__title_1aynl_126",Jt="_foodCard__description_1aynl_141",Yt="_foodCard__footer_1aynl_158",en="_foodCard__footer__price_1aynl_164",tn="_foodCard__footer_action_1aynl_178",nn="_drawerPaper_1aynl_183",on="_drawerContent_1aynl_200",rn="_skeletonCardItem_1aynl_206",an="_skeletonCardItemButton_1aynl_214",sn="_imageOpacity_1aynl_1",m={root:Dt,container:Lt,title:Wt,optionTitle:Et,optionContainer:Ft,property:At,propertyPrice:jt,propertyActions:Gt,font:Tt,buttonContainer:qt,modalDescriptionContainer:Ut,modalDescription:Kt,foodCard:Ht,foodCard__image:Xt,span:Zt,foodCard__title:Qt,foodCard__description:Jt,foodCard__footer:Yt,foodCard__footer__price:en,foodCard__footer_action:tn,drawerPaper:nn,drawerContent:on,skeletonCardItem:rn,skeletonCardItemButton:an,imageOpacity:sn},de=({onAdd:e,price:t})=>{const r=Ce("(max-width:768px)");return a(Ge,{onClick:e,className:Ue.root,variant:"outlined",children:r?a(Te,{type:"plus"}):`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ${t?`${t} \u20BD`:""}`})},cn=({food:e,selectedProperty:t,setCartItem:r,onSend:i,handleChangePrice:n})=>{var k;const{selectedOptions:o,setSelectedOptions:c,setPrice:l}=C.exports.useContext(Ie);C.exports.useState(null);const h=s=>{let f=[];return s.map(u=>{f[u.id]=u}),f},d=s=>{if(Object.values(o).find(f=>parseInt(s.id)===parseInt(f.id))){const f=Object.values(o).filter(b=>parseInt(b.id)!==parseInt(s.id)),u=h(f);c(u),g(u)}else{const f={...o,[s.id]:{quantity:1,id:s.id,optionCategoryId:s.option_category_id,price:s.price}};c(f),g(f)}},p=s=>{const f={...o,[s]:{quantity:o[s].quantity+1,id:s,price:o[s].price,optionCategoryId:o[s].optionCategoryId}};c(f),g(f)},_=s=>{if(o[s].quantity-1===0)return;const f={...o,[s]:{quantity:o[s].quantity-1,id:s,price:o[s].price,optionCategoryId:o[s].optionCategoryId}};if(c(f),g(f),o[s].quantity===0){const u=Object.values(o).filter(b=>b.id!==s);c(u)}},g=s=>{let f=0;Object.values(s).map(u=>{f+=u.price*u.quantity}),l(f+t.current.price),n(f+t.current.price)},y=s=>{if(o[s.id])return;const f=Object.values(o).filter(b=>parseInt(b.optionCategoryId)!==parseInt(s.option_category_id)),u=h(f);c({...u,[s.id]:{quantity:1,id:s.id,price:s.price,optionCategoryId:s.option_category_id}})};return(k=e==null?void 0:e.options)!=null&&k.length?a("div",{children:e.options.map((s,f)=>a("div",{className:m.optionContainer,children:v(ye,{children:[a(be,{className:m.optionTitle,id:"group_-"+f,children:s.categoryName}),a(xe,{name:"group_"+f,"aria-labelledby":"group_"+f,children:s.items.map((u,b)=>v("div",{className:m.property,children:[a(ke,{value:u.id,className:m.font,onChange:u.multiplier===1&&s.required===!0?()=>{}:d.bind(null,u),onClick:u.multiplier===1&&s.required===!0?y.bind(null,u):()=>{},control:u.multiplier===1&&s.required===!0?a(we,{}):a(pt,{}),label:v("span",{children:[u.name," ",v("span",{className:m.propertyPrice,children:["+",u.price,"\u0420"]})]})},u.id),o[u.id]&&u.multiplier>1&&a(Ke,{quantity:o[u.id].quantity,onDecrement:()=>_(u.id),onIncrement:()=>p(u.id)})]},u.id))})]})},f))}):null},Ie=Re.createContext({}),ln=({food:e})=>{const{name:t,description:r,img:i,properties:n=[],options:o=[]}=e,{openAlert:c}=ze(),l=Ve(De),[h]=Le(),[d,p]=C.exports.useState(!1),_=Ce("(max-width:768px)"),g=_?10:18,y=t,k=r,[s,f]=C.exports.useState([]),u=_e(),[b,z]=C.exports.useState(!1),[V,D]=C.exports.useState(n[0].id),N=C.exports.useRef(n[0]),S=()=>{if(!l){u(re(!0));return}z(!0)},M=()=>z(!1),[L,I]=C.exports.useState(N.current.price),$e=w=>{D(w),N.current=n.find(Oe=>Oe.id===w)},Ne={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:_?"100%":830,bgcolor:"#fff",boxShadow:24,p:4,borderRadius:"30px"},te=()=>v(ve,{children:[a(G,{className:m.title,id:"modal-modal-title",variant:"h6",component:"h2",children:t}),v("div",{className:m.container,children:[a("div",{children:a("div",{className:m.foodCard__image,children:a("img",{src:i,alt:"",loading:"lazy"})})}),a("div",{className:m.modalDescriptionContainer,children:a(G,{className:m.modalDescription,id:"modal-modal-description",sx:{mt:2},children:r||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})})]}),n.length>1&&a("div",{className:m.optionContainer,children:v(ye,{children:[a(be,{className:m.optionTitle,id:"demo-row-radio-buttons-group-label",children:"\u041F\u043E\u0440\u0446\u0438\u044F"}),a(xe,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:n.map(w=>a(ke,{onClick:()=>$e(w.id),checked:w.id===V,value:w.id,control:a(we,{}),label:w.name},w.id))})]})}),a(cn,{handleChangePrice:w=>I(w),food:e,selectedProperty:N}),a("br",{}),a(Qe,{variant:"middle"}),a("div",{className:m.buttonContainer,children:a(de,{price:L,onAdd:ne})})]}),ne=async()=>{if(!l){u(re(!0));return}await h({foodPropertyId:V,quantity:1,options:s}),u(await We()),c("\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443","success")};return v(Ie.Provider,{value:{selectedOptions:s,setSelectedOptions:f,price:L,setPrice:I},children:[v("div",{className:m.foodCard,children:[a("div",{className:m.foodCard__image,onClick:S,children:a("img",{loading:"lazy",src:i,alt:""})}),v("div",{className:m.foodCard__title,title:t,style:{cursor:"pointer"},onClick:()=>S(),children:[y," ",y.length===g?"...":""]}),v("div",{className:m.foodCard__description,children:[d?r||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442":k||"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442"," ",!d&&k.length===21?a("span",{className:m.span,onClick:()=>S(),children:"..."}):""]}),v("div",{className:m.foodCard__footer,children:[v("div",{children:[n.length>1?"\u041E\u0442":"",v("span",{className:m.foodCard__footer__price,children:["\xA0",n[0].price," \u0420"]})]}),a("div",{className:m.foodCard__footer_action,children:a(de,{onAdd:n.length>1||o.length?S:ne})})]})]}),_?a(Ze,{open:b,onClose:M,anchor:"bottom",classes:{paper:m.drawerPaper},children:a("div",{className:m.drawerContent,children:te()})}):a(qe,{open:b,onClose:M,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:a(He,{sx:Ne,children:te()})})]})},dn="_cards_1c9ez_1",un="_cardsList_1c9ez_5",pn="_categoryList_1c9ez_34",hn="_result_1c9ez_54",fn="_chefsSkeleton_1c9ez_61",mn="_items_1c9ez_66",P={cards:dn,cardsList:un,categoryList:pn,result:hn,chefsSkeleton:fn,items:mn},gn=({children:e,classes:t})=>a("div",{className:P.cards,children:a("div",{className:F({[P.categoryList]:(t==null?void 0:t.list)==="categoryList"},P.cardsList,t==null?void 0:t.list),children:e})}),ue=({children:e,classes:t,isLoading:r,isLoaded:i,itemsLength:n,skeletonWidth:o,skeletonCount:c=6})=>a(gn,{classes:t,children:e}),_n=()=>v("div",{className:m.skeletonCardItem,style:{width:272},children:[a($,{variant:"rect",width:272,height:200}),v("div",{className:"p-20",children:[a($,{width:"60%"}),a($,{width:"70%"}),a("div",{className:"d-flex align-items-center",children:a($,{width:"60px",height:35})}),a($,{width:"90%"}),v("div",{className:"d-flex align-items-center justify-content-between",style:{position:"relative",top:5},children:[a($,{width:"20%",height:35}),a($,{width:"40px",height:"65px",className:m.skeletonCardItemButton})]})]})]});function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},T.apply(this,arguments)}function vn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,q(e,t)}function q(e,t){return q=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},q(e,t)}function Cn(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,o;for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var U=new Map,W=new WeakMap,pe=0,yn=void 0;function bn(e){return e?(W.has(e)||(pe+=1,W.set(e,pe.toString())),W.get(e)):"0"}function xn(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?bn(e.root):e[t])}).toString()}function kn(e){var t=xn(e),r=U.get(t);if(!r){var i=new Map,n,o=new IntersectionObserver(function(c){c.forEach(function(l){var h,d=l.isIntersecting&&n.some(function(p){return l.intersectionRatio>=p});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=d),(h=i.get(l.target))==null||h.forEach(function(p){p(d,l)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},U.set(t,r)}return r}function wn(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=yn),typeof window.IntersectionObserver>"u"&&i!==void 0){var n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var o=kn(r),c=o.id,l=o.observer,h=o.elements,d=h.get(e)||[];return h.has(e)||h.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(h.delete(e),l.unobserve(e)),h.size===0&&(l.disconnect(),U.delete(c))}}var Sn=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function he(e){return typeof e.children!="function"}var In=function(e){vn(t,e);function t(i){var n;return n=e.call(this,i)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(o){n.node&&(n.unobserve(),!o&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=o||null,n.observeNode()},n.handleChange=function(o,c){o&&n.props.triggerOnce&&n.unobserve(),he(n.props)||n.setState({inView:o,entry:c}),n.props.onChange&&n.props.onChange(o,c)},n.state={inView:!!i.initialInView,entry:void 0},n}var r=t.prototype;return r.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,o=n.threshold,c=n.root,l=n.rootMargin,h=n.trackVisibility,d=n.delay,p=n.fallbackInView;this._unobserveCb=wn(this.node,this.handleChange,{threshold:o,root:c,rootMargin:l,trackVisibility:h,delay:d},p)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!he(this.props)){var n=this.state,o=n.inView,c=n.entry;return this.props.children({inView:o,entry:c,ref:this.handleNode})}var l=this.props,h=l.children,d=l.as,p=Cn(l,Sn);return C.exports.createElement(d||"div",T({ref:this.handleNode},p),h)},t}(C.exports.Component);const $n=({categories:e,isLoading:t})=>{const r=_e();if(t)return a("div",{children:a(ue,{children:Array.from({length:8},(n,o)=>a("div",{className:P.chefsSkeleton,children:a(_n,{},o)},o))})});const i=(n,o)=>{n&&r(Ee(o.target.id))};return a("div",{children:e.map(n=>v(In,{as:"div",className:P.items,id:n.id,onChange:i,rootMargin:"0% 0px",threshold:.5,children:[a(G,{variant:"h6",style:{fontSize:36},children:n.name}),a(ue,{children:n.foodProperties.map(o=>a(Nt,{item:!0,xs:4,children:a(ln,{food:o},o.id)},o.id))})]},n.id))})},Nn=()=>{const{data:e,isLoading:t}=Fe();return a(Me,{children:a($n,{isLoading:t,categories:e==null?void 0:e.data})})};function En(e){return v(ve,{children:[a(Ae,{title:"Ingvine Food - \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u043A\u0443\u0441\u043D\u043E\u0439 \u0435\u0434\u044B"}),a(Nn,{})]})}export{En as default};
