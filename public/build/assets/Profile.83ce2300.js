import{A as z,z as E,Z as x,q as i,r as p,E as M,ak as Me,a0 as He,p as H,N as ke,D as Se,a as n,f as k,I as S,a2 as ae,Y as P,al as Ne,Q,am as _e,an as de,ao as pe,k as ue,j as T,F as ge,H as De,P as Ae,ab as Pe}from"./app.0a2e06d8.js";import{M as Ue}from"./MainLayout.142a1d20.js";import{B as Be}from"./index.51f7c417.js";import"./index.43746b15.js";import"./dividerClasses.96580c5e.js";import"./NavLink.4f2f6b20.js";function je(e){return z("MuiCollapse",e)}E("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ie=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Le=e=>{const{orientation:t,classes:o}=e,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return S(a,je,o)},Oe=x("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.state==="entered"&&t.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>i({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&i({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),We=x("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>i({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Fe=x("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>i({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),he=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiCollapse"}),{addEndListener:c,children:s,className:d,collapsedSize:l="0px",component:g,easing:b,in:h,onEnter:C,onEntered:N,onEntering:m,onExit:$,onExited:O,onExiting:w,orientation:_="vertical",style:D,timeout:v=Me.standard,TransitionComponent:Y=He}=a,W=H(a,Ie),F=i({},a,{orientation:_,collapsedSize:l}),U=Le(F),te=ke(),oe=p.exports.useRef(),R=p.exports.useRef(null),Z=p.exports.useRef(),q=typeof l=="number"?`${l}px`:l,B=_==="horizontal",j=B?"width":"height";p.exports.useEffect(()=>()=>{clearTimeout(oe.current)},[]);const K=p.exports.useRef(null),Ce=Se(o,K),A=r=>f=>{if(r){const y=K.current;f===void 0?r(y):r(y,f)}},G=()=>R.current?R.current[B?"clientWidth":"clientHeight"]:0,Te=A((r,f)=>{R.current&&B&&(R.current.style.position="absolute"),r.style[j]=q,C&&C(r,f)}),$e=A((r,f)=>{const y=G();R.current&&B&&(R.current.style.position="");const{duration:I,easing:J}=ae({style:D,timeout:v,easing:b},{mode:"enter"});if(v==="auto"){const ne=te.transitions.getAutoHeightDuration(y);r.style.transitionDuration=`${ne}ms`,Z.current=ne}else r.style.transitionDuration=typeof I=="string"?I:`${I}ms`;r.style[j]=`${y}px`,r.style.transitionTimingFunction=J,m&&m(r,f)}),we=A((r,f)=>{r.style[j]="auto",N&&N(r,f)}),Re=A(r=>{r.style[j]=`${G()}px`,$&&$(r)}),ze=A(O),Ee=A(r=>{const f=G(),{duration:y,easing:I}=ae({style:D,timeout:v,easing:b},{mode:"exit"});if(v==="auto"){const J=te.transitions.getAutoHeightDuration(f);r.style.transitionDuration=`${J}ms`,Z.current=J}else r.style.transitionDuration=typeof y=="string"?y:`${y}ms`;r.style[j]=q,r.style.transitionTimingFunction=I,w&&w(r)});return n(Y,i({in:h,onEnter:Te,onEntered:we,onEntering:$e,onExit:Re,onExited:ze,onExiting:Ee,addEndListener:r=>{v==="auto"&&(oe.current=setTimeout(r,Z.current||0)),c&&c(K.current,r)},nodeRef:K,timeout:v==="auto"?null:v},W,{children:(r,f)=>n(Oe,i({as:g,className:k(U.root,d,{entered:U.entered,exited:!h&&q==="0px"&&U.hidden}[r]),style:i({[B?"minWidth":"minHeight"]:q},D),ownerState:i({},F,{state:r}),ref:Ce},f,{children:n(We,{ownerState:i({},F,{state:r}),className:U.wrapper,ref:R,children:n(Fe,{ownerState:i({},F,{state:r}),className:U.wrapperInner,children:s})})}))}))});he.muiSupportAuto=!0;const qe=he,Ke=p.exports.createContext(),fe=Ke;function Je(e){return z("MuiTable",e)}E("MuiTable",["root","stickyHeader"]);const Qe=["className","component","padding","size","stickyHeader"],Xe=e=>{const{classes:t,stickyHeader:o}=e;return S({root:["root",o&&"stickyHeader"]},Je,t)},Ye=x("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>i({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":i({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),re="table",Ze=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiTable"}),{className:c,component:s=re,padding:d="normal",size:l="medium",stickyHeader:g=!1}=a,b=H(a,Qe),h=i({},a,{component:s,padding:d,size:l,stickyHeader:g}),C=Xe(h),N=p.exports.useMemo(()=>({padding:d,size:l,stickyHeader:g}),[d,l,g]);return n(fe.Provider,{value:N,children:n(Ye,i({as:s,role:s===re?null:"table",ref:o,className:k(C.root,c),ownerState:h},b))})}),be=Ze,Ge=p.exports.createContext(),X=Ge;function Ve(e){return z("MuiTableBody",e)}E("MuiTableBody",["root"]);const et=["className","component"],tt=e=>{const{classes:t}=e;return S({root:["root"]},Ve,t)},ot=x("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),nt={variant:"body"},se="tbody",at=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableBody"}),{className:c,component:s=se}=a,d=H(a,et),l=i({},a,{component:s}),g=tt(l);return n(X.Provider,{value:nt,children:n(ot,i({className:k(g.root,c),as:s,ref:o,role:s===se?null:"rowgroup",ownerState:l},d))})}),me=at;function rt(e){return z("MuiTableCell",e)}const st=E("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),it=st,lt=["align","className","component","padding","scope","size","sortDirection","variant"],ct=e=>{const{classes:t,variant:o,align:a,padding:c,size:s,stickyHeader:d}=e,l={root:["root",o,d&&"stickyHeader",a!=="inherit"&&`align${P(a)}`,c!=="normal"&&`padding${P(c)}`,`size${P(s)}`]};return S(l,rt,t)},dt=x("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${P(o.size)}`],o.padding!=="normal"&&t[`padding${P(o.padding)}`],o.align!=="inherit"&&t[`align${P(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>i({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Ne(Q(e.palette.divider,1),.88):_e(Q(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${it.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),pt=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableCell"}),{align:c="inherit",className:s,component:d,padding:l,scope:g,size:b,sortDirection:h,variant:C}=a,N=H(a,lt),m=p.exports.useContext(fe),$=p.exports.useContext(X),O=$&&$.variant==="head";let w;d?w=d:w=O?"th":"td";let _=g;!_&&O&&(_="col");const D=C||$&&$.variant,v=i({},a,{align:c,component:w,padding:l||(m&&m.padding?m.padding:"normal"),size:b||(m&&m.size?m.size:"medium"),sortDirection:h,stickyHeader:D==="head"&&m&&m.stickyHeader,variant:D}),Y=ct(v);let W=null;return h&&(W=h==="asc"?"ascending":"descending"),n(dt,i({as:w,ref:o,className:k(Y.root,s),"aria-sort":W,scope:_,ownerState:v},N))}),u=pt;function ut(e){return z("MuiTableContainer",e)}E("MuiTableContainer",["root"]);const gt=["className","component"],ht=e=>{const{classes:t}=e;return S({root:["root"]},ut,t)},ft=x("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),bt=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableContainer"}),{className:c,component:s="div"}=a,d=H(a,gt),l=i({},a,{component:s}),g=ht(l);return n(ft,i({ref:o,as:s,className:k(g.root,c),ownerState:l},d))}),mt=bt;function vt(e){return z("MuiTableHead",e)}E("MuiTableHead",["root"]);const yt=["className","component"],xt=e=>{const{classes:t}=e;return S({root:["root"]},vt,t)},Ct=x("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Tt={variant:"head"},ie="thead",$t=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableHead"}),{className:c,component:s=ie}=a,d=H(a,yt),l=i({},a,{component:s}),g=xt(l);return n(X.Provider,{value:Tt,children:n(Ct,i({as:s,className:k(g.root,c),ref:o,role:s===ie?null:"rowgroup",ownerState:l},d))})}),ve=$t;function wt(e){return z("MuiTableRow",e)}const Rt=E("MuiTableRow",["root","selected","hover","head","footer"]),le=Rt,zt=["className","component","hover","selected"],Et=e=>{const{classes:t,selected:o,hover:a,head:c,footer:s}=e;return S({root:["root",o&&"selected",a&&"hover",c&&"head",s&&"footer"]},wt,t)},Mt=x("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${le.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${le.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),ce="tr",Ht=p.exports.forwardRef(function(t,o){const a=M({props:t,name:"MuiTableRow"}),{className:c,component:s=ce,hover:d=!1,selected:l=!1}=a,g=H(a,zt),b=p.exports.useContext(X),h=i({},a,{component:s,hover:d,selected:l,head:b&&b.variant==="head",footer:b&&b.variant==="footer"}),C=Et(h);return n(Mt,i({as:s,ref:o,className:k(C.root,c),role:s===ce?null:"row",ownerState:h},g))}),L=Ht;var V={},kt=pe.exports;Object.defineProperty(V,"__esModule",{value:!0});var ye=V.default=void 0,St=kt(de()),Nt=ue,_t=(0,St.default)((0,Nt.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");ye=V.default=_t;var ee={},Dt=pe.exports;Object.defineProperty(ee,"__esModule",{value:!0});var xe=ee.default=void 0,At=Dt(de()),Pt=ue,Ut=(0,At.default)((0,Pt.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");xe=ee.default=Ut;function Bt({row:e}){const[t,o]=p.exports.useState(!1);return T(ge,{children:[T(L,{sx:{"& > *":{borderBottom:"unset"}},children:[n(u,{children:n(Pe,{"aria-label":"expand row",size:"small",onClick:()=>o(!t),children:t?n(xe,{}):n(ye,{})})}),n(u,{component:"th",scope:"row",children:e.date_delivery}),n(u,{align:"right",children:e.total}),n(u,{align:"right",children:e.delivery_type})]}),n(L,{children:n(u,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:n(qe,{in:t,timeout:"auto",unmountOnExit:!0,children:n(Be,{sx:{margin:1},children:T(be,{size:"small","aria-label":"purchases",children:[n(ve,{children:T(L,{children:[n(u,{children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"}),n(u,{children:"\u041A\u043E\u043B-\u0432\u043E"}),n(u,{align:"right",children:"\u0426\u0435\u043D\u0430"}),n(u,{align:"right",children:"\u0421\u0443\u043C\u043C\u0430"})]})}),n(me,{children:e.foodProperties.map(a=>T(L,{children:[n(u,{component:"th",scope:"row",children:a.name}),n(u,{children:a.quantity}),n(u,{align:"right",children:a.price}),n(u,{align:"right",children:a.sum})]},a.id))})]})})})})})]})}function Kt({orders:e}){return console.log({orders:e}),T(ge,{children:[n(De,{title:"\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"}),n(Ue,{disableCategories:!0,children:n(mt,{component:Ae,children:T(be,{"aria-label":"collapsible table",children:[n(ve,{children:T(L,{children:[n(u,{}),n(u,{children:"\u0414\u0430\u0442\u0430"}),n(u,{align:"right",children:"\u0421\u0443\u043C\u043C\u0430"}),n(u,{align:"right",children:"\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"})]})}),n(me,{children:e.map(t=>n(Bt,{row:t},t.name))})]})})})]})}export{Kt as default};
