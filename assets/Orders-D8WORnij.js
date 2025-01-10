import{r,C as c,j as s,L as d}from"./index-Cf5QfYOP.js";import{e as i}from"./emptyorders1-DzLwAcxj.js";import{T as n}from"./Title-B9FLkuTP.js";const h=()=>{const{cartState:l}=r.useContext(c),{orders:a}=l;return s.jsxs("div",{className:" container mx-auto p-4",children:[a.length>0?s.jsx(n,{text1:"Your",text2:"Orders"}):"",a.length>0?[...a].reverse().map(t=>s.jsxs("div",{className:"border-2 p-4 rounded mb-4 shadow-lg space-y-2",children:[s.jsxs("h2",{className:"font-bold",children:["Order ID: ",t.id]}),s.jsxs("p",{className:"text-sm text-gray-500",children:["Date: ",t.date]}),s.jsxs("p",{className:"font-semibold pb-3",children:["Total Amount paid: Rs.",t.total.toFixed()]}),s.jsx("ul",{className:"px-4 py-2",children:t.items.map(e=>s.jsxs("li",{className:"grid md:grid-cols-4 border-2 p-2 mb-4 shadow-md",children:[s.jsxs("div",{className:"flex items-center col-span-2",children:[s.jsx(d,{to:`/product/${e.id}`,children:s.jsxs("div",{className:" w-28 h-28 mr-6 ",children:[s.jsx("img",{src:e.thumbnail,className:"h-full w-full object-cover"}),"  "]})}),s.jsxs("div",{children:[s.jsx("h2",{className:"font-semibold text-sm",children:e.title}),s.jsxs("div",{className:"text-gray-700 text-sm",children:["Rs.",e.price.toFixed(),"    Quantity: ",e.quantity," "]}),s.jsx("p",{className:"text-sm",children:"Payment: COD"})]})]}),s.jsxs("p",{className:"place-self-center text-sm",children:[s.jsx("span",{className:"inline-block mr-2 text-[9px]",children:"🟢"}),"Order Placed"]}),s.jsx("button",{className:"bg-[#319d6b] text-white text-sm w-28 h-8 rounded-lg place-self-center",children:"Track order"})]},e.id))})]},t.id)):s.jsxs("div",{className:"flex flex-col justify-center items-center",children:[s.jsx("img",{src:i,className:"h-44 md:h-64 w-auto mt-5"}),s.jsx("p",{className:"font-semibold text-2xl text-gray-700 mt-4 mb-2",children:" No orders Found."}),s.jsx("p",{children:" Looks like you haven't made your yet!"})]})]})};export{h as default};
