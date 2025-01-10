import{r as l,C as x,j as e,L as m,e as p,u as j}from"./index-Cf5QfYOP.js";import{P as u}from"./ProgressBar-BBsZzKbC.js";import{T as g}from"./Title-B9FLkuTP.js";const f=({item:s})=>{const{cartState:d,dispatch:r}=l.useContext(x),[o,a]=l.useState([d.items]),n=async c=>{try{await p.delete("https://dummyjson.com/carts/1"),r({type:"REMOVE_ITEM",payload:{id:c}});const t=o.filter(h=>h.id!==c);a(t),console.log("upadted cart:",t)}catch(t){console.error("Error removing item:",t)}},i=(c,t)=>{t>0&&r({type:"UPDATE_QUANTITY",payload:{id:c,quantity:t}})};return e.jsx("div",{children:e.jsxs("div",{className:"text-sm grid grid-cols-4 border-b-2 border-gray-300 shadow-lg py-2",children:[e.jsxs("div",{className:"flex col-span-3",children:[e.jsx(m,{to:`/product/${s.id}`,children:e.jsxs("div",{className:" w-28 h-28 mr-6 ",children:[e.jsx("img",{src:s.thumbnail,className:"h-full w-full object-cover"}),"  "]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold md:text-base text-gray-700",children:s.title}),e.jsx("button",{className:"px-2 py-1 rounded-l-lg",onClick:()=>i(s.id,s.quantity-1),children:"-"}),e.jsx("span",{className:"px-3 py-1",children:s.quantity}),e.jsx("button",{className:"px-2 py-1  rounded-r-lg",onClick:()=>i(s.id,s.quantity+1),children:"+"}),e.jsx("br",{}),e.jsx("button",{className:"px-3 py-1 text-white bg-red-700 mt-3 rounded-lg ",onClick:()=>n(s.id),children:" Remove Item"})]})]}),e.jsxs("div",{className:"ml-8 text-gray-700 font-medium",children:["Rs.",(s.price*s.quantity).toFixed()]})]})})},N=({total:s})=>{const d=j(),r=()=>{d("/address")};return e.jsxs("div",{className:"",children:[e.jsx("h3",{className:" text-xl font-semibold text-gray-800 mt-8 mb-4",children:"Cart Totals"}),e.jsxs("div",{className:"flex justify-between border-b  pb-3 mb-3",children:[e.jsx("span",{className:"text-gray-700",children:"Subtotal"}),e.jsxs("span",{className:"font-semibold",children:["Rs.",s.toFixed()]})]}),e.jsxs("div",{className:"flex justify-between border-b pb-3 mb-3",children:[e.jsx("span",{className:"text-gray-700",children:"Delivery Charges"}),e.jsx("span",{className:"font-semibold",children:"Free"})]}),e.jsxs("div",{className:"flex justify-between text-lg font-bold pb-4",children:[e.jsx("span",{className:"text-gray-900",children:"Total"}),e.jsxs("span",{children:["Rs.",s.toFixed()]})]}),e.jsx("button",{className:"w-full bg-[#35ac75] hover:bg-black text-white py-3 rounded-md font-semibold shadow-md transition",onClick:r,children:"PROCEED TO CHECKOUT"})]})},y="data:image/png;base64,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",T=()=>{const{cartState:s}=l.useContext(x),{items:d,total:r}=s,o=s.items.reduce((a,n)=>a+n.quantity,0);return e.jsx("div",{className:"container mx-auto",children:d.length>0?e.jsxs("div",{className:"md:container md:mx-auto p-4 flex flex-col",children:[e.jsx(u,{currentStep:0}),e.jsx(g,{text1:"Your Cart",text2:`(${o})`}),e.jsx("div",{className:"mt-3 space-y-4",children:s.items.map(a=>e.jsx("div",{className:"",children:e.jsx(f,{item:a})},a.id))}),e.jsx("div",{className:"px-4 md:self-end md:w-1/2 md:pr-24 ",children:e.jsx(N,{total:s.total})})]}):e.jsxs("div",{className:"flex flex-col justify-center items-center my-5",children:[e.jsx("img",{src:y,className:"h-64 w-auto"}),e.jsx("p",{className:"font-semibold text-3xl",children:" Your cart is empty"}),e.jsx("p",{className:" text-gray-700 my-5 text-center",children:"Loooks like you have not added any item to your cart. Go Ahead ahead & explore top categories "}),e.jsx(m,{className:"bg-[#319d6b]  text-white text-center pt-1 text-sm w-28 h-8 rounded-lg",to:"/",children:"Shop Now"})]})})};export{T as default};
