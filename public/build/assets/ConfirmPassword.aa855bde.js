import{a5 as l,r as c,j as e,a as s,H as u}from"./app.0a2e06d8.js";import{G as p,P as f}from"./PrimaryButton.b24a13a7.js";import{T as w,I as h}from"./TextInput.d83464df.js";import{I as g}from"./InputLabel.feed60bb.js";import"./ApplicationLogo.f52f333f.js";function y(){const{data:r,setData:t,post:o,processing:n,errors:m,reset:i}=l({password:""});c.exports.useEffect(()=>()=>{i("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return e(p,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[e("div",{className:"mt-4",children:[s(g,{forInput:"password",value:"Password"}),s(w,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(h,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(f,{className:"ml-4",processing:n,children:"Confirm"})})]})]})}export{y as default};
