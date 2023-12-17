import{j as c,F as _,a as t,T as B,d as v,aE as y,a7 as x,a8 as D,L as C,a6 as N,r as f,u as g,a4 as w}from"./app.b2b04ce0.js";import{B as P,L as b,I as T}from"./index.8351109f.js";import{I as R}from"./index.22780ab1.js";import{L as E,D as L,I as k}from"./index.a293da75.js";import{D as q}from"./Divider.dbb777ad.js";const A="/build/assets/empty-cart.a6b390b2.svg",H="_cartPaper_5id0x_1",S="_cartList_5id0x_7",j="_cartHeader_5id0x_15",F="_cartRemoveItem_5id0x_25",M="_cardRoot_5id0x_32",O="_cardDetails_5id0x_38",Q="_cartItemImage_5id0x_44",$="_cartItemInfo_5id0x_55",V="_cartItemInfoButtons_5id0x_59",z="_cartItemInfoPrice_5id0x_67",G="_cartItem_5id0x_44",J="_optionName_5id0x_81",K="_cartItemInfoName_5id0x_93",U="_button_5id0x_105",W="_buttonText_5id0x_138",X="_name_5id0x_159",Y="_cartProgressBar_5id0x_170",Z="_cartIsEmptyInfo_5id0x_170",tt="_cartBottom_5id0x_193",at="_cartBottomTotalCount_5id0x_201",et="_cartDivider_5id0x_205",nt="_item_5id0x_209",ot="_mainItemBoldText_5id0x_221",ct="_closeIcon_5id0x_226",a={cartPaper:H,cartList:S,cartHeader:j,cartRemoveItem:F,cardRoot:M,cardDetails:O,cartItemImage:Q,cartItemInfo:$,cartItemInfoButtons:V,cartItemInfoPrice:z,cartItem:G,optionName:J,cartItemInfoName:K,button:U,buttonText:W,name:X,cartProgressBar:Y,cartIsEmptyInfo:Z,cartBottom:tt,cartBottomTotalCount:at,cartDivider:et,item:nt,mainItemBoldText:ot,closeIcon:ct},rt=({classes:r,id:o,image:i,name:s,count:e,price:u,onPlus:n,onMinus:I,onRemove:p,description:d,options:l=[]})=>c(_,{children:[c(E,{className:a.cartItem,children:[t("div",{className:a.cartItemImage,children:t("img",{src:i})}),c("div",{className:a.cartItemInfoName,children:[t(B,{variant:"h6",className:a.name,children:s}),t("div",{children:l.map(m=>c("div",{className:a.optionName,children:[m.name," x ",m.quantity]},m.id))}),c("div",{children:[u," \u20BD"]})]}),t("div",{children:t(R,{quantity:e,onDecrement:I,onIncrement:n})})]},o),t(q,{className:a.cartDivider,variant:"inset",component:"li"})]}),st=({classes:r,id:o,name:i,image:s,price:e,product:u,options:n=[],type:I,handleClickRemove:p,quantity:d,sum:l})=>{const m=v(),[h]=y();return t(rt,{classes:r,id:o,count:d,name:i,image:s,price:l,onPlus:async()=>{await h([{id:o,quantity:d+1}]),m(await x())},onMinus:async()=>{await h([{id:o,quantity:d-1}]),m(await x())},onRemove:()=>p(o),description:"",options:n})},it=({onClose:r,items:o,opened:i=!1,totalPrice:s})=>{const e=async n=>{window.confirm("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C ? ")&&await N.destroyProperty(n)};let u=null;return o.length||(u=c("div",{className:a.cartIsEmptyInfo,children:[t("img",{src:A}),t(B,{children:"\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"}),t(P,{onClick:r,variant:"contained",color:"secondary",children:"\u041D\u0430\u0437\u0430\u0434"})]})),o.length&&(u=t(_,{children:t("div",{className:a.cardDetails,children:t(b,{classes:{root:a.cartList},children:o.map(n=>t(st,{id:n.id,name:n.name,image:n.img,quantity:n.quantity,price:n.price,options:n.options,handleClickRemove:e,sum:n.sum},n.id))})})})),t(L,{anchor:"right",classes:{paper:a.cartPaper},open:i,onClose:r,children:c("div",{className:a.cardRoot,children:[c("div",{className:a.cartHeader,children:[t("h1",{children:"\u0417\u0430\u043A\u0430\u0437"}),t(D,{"data-test-id":"cart-drawer-close-btn",className:a.closeButton,onClick:r,children:t(T,{type:"close"})})]}),u,o.length?t("div",{children:c(C,{onClick:()=>r(),href:"/pay",className:a.button,children:[t("span",{className:a.buttonText,children:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C"}),c("span",{children:[s," \u20BD"]})]})}):null]})})};function xt(){const r=window.location.pathname,[o]=f.exports.useState(0),[i,s]=f.exports.useState(r&&window.location.search.includes("token")),e=g(w);return c(_,{children:[t(k,{onClick:()=>s(!0),text:`${(e==null?void 0:e.total)||0} \u20BD`,iconType:"bottomCart"}),t(it,{totalCount:o,totalPrice:e==null?void 0:e.total,opened:i,onClose:()=>s(!1),items:(e==null?void 0:e.cartProperties)||[]})]})}export{xt as default};
