import{I as z,B as V}from"./index.8351109f.js";import{R as J,j as c,f as k,a as e,aw as w,r as K,u as T,a3 as O,a5 as W,aF as X,d as Y,F as A,aG as C,L as Z,aH as v,M as ee,T as oe}from"./app.b2b04ce0.js";import{b as B,g as re,c as se,a as P,u as te,o as ue,F as ae}from"./object.f5ba04bc.js";import{F as j}from"./FormLabel.81834709.js";import{u as ne,P as ie,e as R,a as le,M as $,B as ce}from"./index.fe9d4fb3.js";import"./TextField.fec63066.js";const de="_root_8b25f_1",me="_title_8b25f_5",fe="_container_8b25f_13",pe="_button_8b25f_22",_e="_btnText_8b25f_34",he="_textContainer_8b25f_38",ge="_item_8b25f_65",l={root:de,title:me,container:fe,button:pe,btnText:_e,textContainer:he,item:ge},xe="_formControl_m7qws_1",Fe="_input_m7qws_5",b={formControl:xe,input:Fe},Ce="_formField_79zhx_1",be="_formPhoneField_79zhx_32",we="_suffix_79zhx_37",ye="_suffixDisabled_79zhx_47",Ee="_selectField_79zhx_51",Ne="_field_79zhx_71",ve="_formFieldError_79zhx_86",Be="_prefix_79zhx_94",g={formField:Ce,formPhoneField:be,suffix:we,suffixDisabled:ye,selectField:Ee,field:Ne,formFieldError:ve,prefix:Be},m=J.forwardRef(function({label:r,name:s,placeholder:d,error:u,type:i="text",readOnly:t,register:a,className:f,textarea:p=!1,onChange:_,onKeyUp:h,onBlur:y,onFocus:n,autocomplete:x,defaultValue:F,testId:D,formFieldsRef:I,max:U,min:G,suffix:M,disabled:E,prefix:L,showError:H=!0},Q){const N=B(),S=re(N==null?void 0:N.errors,`${s}.message`);return c("div",{ref:Q,className:k(g.formField,f),children:[r&&e("b",{children:r}),c("div",{className:g.field,children:[L&&e("div",{className:g.prefix,children:L}),p?e("textarea",{onBlur:y,onChange:_,onFocus:n,onKeyUp:h,placeholder:d,name:s,ref:I?a&&a():a,defaultValue:F,"data-test-id":D,disabled:E,autoComplete:"off",id:s}):e("input",{...a(s),placeholder:d,type:i,name:s,readOnly:t,defaultValue:F,"data-test-id":D,max:U,min:G,disabled:E,autoComplete:s,id:s}),M&&e("div",{className:k(g.suffix,{[g.suffixDisabled]:E}),children:M})]}),H&&(u||S)&&e("p",{className:g.formFieldError,"data-test-id":`${s}-error-message`,children:u||S})]})}),De=()=>{var u,i,t,a;const{control:o,register:r,formState:s,getValues:d}=B();return e("div",{className:b.formControl,children:c(j,{className:b.formControl,children:[e(m,{showError:!0,error:(i=(u=s.errors)==null?void 0:u.email)==null?void 0:i.message,autocomplete:!1,register:r,placeholder:"+7 ___ ___ __ __",name:"phone"}),e(m,{error:(a=(t=s.errors)==null?void 0:t.password)==null?void 0:a.message,register:r,placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",type:"password"})]})})},Me=()=>{var s,d,u,i,t,a,f,p,_,h;const{register:o,formState:r}=B();return e("div",{className:b.formControl,children:c(j,{className:b.formControl,children:[e(m,{error:(d=(s=r.errors)==null?void 0:s.name)==null?void 0:d.message,autocomplete:!1,register:o,placeholder:"\u0418\u043C\u044F",name:"name"}),e(m,{error:(i=(u=r.errors)==null?void 0:u.phone)==null?void 0:i.message,register:o,placeholder:"+7 ___ ___ __ __",name:"phone"}),e(m,{error:(a=(t=r.errors)==null?void 0:t.password)==null?void 0:a.message,register:o,placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",type:"password"}),e(m,{error:(p=(f=r.errors)==null?void 0:f.password_confirmation)==null?void 0:p.message,register:o,placeholder:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",name:"password_confirmation",type:"password"}),e(m,{error:(h=(_=r.errors)==null?void 0:_.birthday)==null?void 0:h.message,register:o,type:"date",placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",name:"birthday"})]})})},Le=se().shape({phone:P().required("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"),password:P().required("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C")}),Se=async o=>{const{data:r}=await w.post("/login",o);return r},q=async()=>{const{data:o}=await w.get("/user");return o},ze=async()=>{await w.post("/logout")},ke=async o=>{const{data:r}=await w.post("/register",o);return r};function je(){ne("(max-width:768px)");const[o,r]=K.exports.useState("login"),s=T(O),{openAlert:d}=W(),u=te({mode:"onBlur",resolver:ue(Le),defaultValues:{phone:"",password:""}}),i=T(X),t=Y(),a={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:440,bgcolor:"#fff",boxShadow:24,p:4,borderRadius:"30px"},f=async n=>{try{await Se({...n,remember:!0}),t(v(await q())),t(C(!1))}catch(x){console.log(x),d("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0439\u0442\u0438","error")}},p=async n=>{try{await ke({...n,remember:!0}),t(v(await q())),t(C(!1))}catch(x){for(const F in x.response.data.errors)u.setError(F,{message:x.response.data.errors[F][0]})}},_=async()=>{await ze()},h={login:"\u0412\u0445\u043E\u0434 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",registration:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"},y=()=>c(ae,{...u,children:[e(oe,{className:l.title,id:"modal-modal-title",variant:"h6",component:"h2",children:h[o]}),e("div",{className:l.container,children:o==="login"?e(De,{}):e(Me,{})}),e(V,{onClick:u.handleSubmit(o==="login"?f:p),className:l.button,children:e("span",{className:l.btnText,children:o==="login"?"\u0412\u043E\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"})}),o==="login"?c("div",{className:l.textContainer,children:[e("span",{children:"\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?"}),e("span",{onClick:()=>r("registration"),children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"})]}):e("div",{className:l.textContainer,children:e("span",{onClick:()=>r("login"),children:"\u0412\u043E\u0439\u0442\u0438"})})]});return c(A,{children:[s?e(ie,{variant:"popover",popupId:"demo-popup-menu",children:n=>c(A,{children:[e("i",{...R.bindTrigger(n),className:l.root,children:e(z,{type:"profile"})}),c(le,{...R.bindMenu(n),children:[e($,{onClick:n.close,children:e(Z,{href:"/profile",children:"\u0417\u0430\u043A\u0430\u0437\u044B"})}),e($,{className:l.item,onClick:()=>{_(),t(v(null)),n.close()},children:"\u0412\u044B\u0439\u0442\u0438"})]})]})}):e("i",{onClick:()=>t(C(!0)),className:l.root,children:e(z,{type:"profile"})}),e(ee,{open:i,onClose:()=>t(C(!1)),children:e(ce,{sx:a,children:y()})})]})}export{je as default};
