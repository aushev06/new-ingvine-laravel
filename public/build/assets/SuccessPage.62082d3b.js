import{f as e,j as a,a as u,T as s,d as g,r as h,a7 as x,F as y,H as C}from"./app.b2b04ce0.js";import{s as N}from"./Result.module.4f04610d.js";import{I as F}from"./index.8351109f.js";import{M as j}from"./MainLayout.9cb24537.js";import"./index.a293da75.js";import"./index.fe9d4fb3.js";import"./NavLink.fba40214.js";const D=({subTitle:o,title:r,style:m,children:n,status:c="empty",classes:t})=>{const p=e("d-flex flex-column align-items-center",t==null?void 0:t.root),d=e(N.title,t==null?void 0:t.title),l=e(t==null?void 0:t.subtitle),f=e(t==null?void 0:t.content),i=e("d-flex align-items-center justify-content-center",t==null?void 0:t.icon);return a("div",{className:p,style:m,children:[c&&u("span",{className:i,children:u(F,{type:"success",className:i})}),u(s,{className:d,children:r}),o&&u("div",{className:l,children:o}),n&&u("div",{className:f,children:n})]})};function H(o){const r=g();return h.exports.useEffect(()=>{localStorage.setItem("token",new Date().getTime().toString()),r(x())},[]),a(y,{children:[u(C,{title:"\u041E\u043F\u043B\u0430\u0442\u0430"}),u(j,{disableCategories:!0,children:u(D,{title:"\u0417\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442",status:"success",subTitle:"\u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0437\u0432\u043E\u043D\u043A\u0430",classes:{root:"resultRoot"}})})]})}export{H as default};
