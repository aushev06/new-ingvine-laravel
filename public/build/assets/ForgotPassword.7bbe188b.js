import{a5 as d,j as t,a as e,H as u}from"./app.0a2e06d8.js";import{G as c,P as p}from"./PrimaryButton.b24a13a7.js";import{T as w,I as g}from"./TextInput.d83464df.js";import"./ApplicationLogo.f52f333f.js";function N({status:s}){const{data:o,setData:r,post:l,processing:m,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return t(c,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-500 leading-normal",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),l(route("password.email"))},children:[e(w,{type:"text",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(g,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:"ml-4",processing:m,children:"Email Password Reset Link"})})]})]})}export{N as default};
