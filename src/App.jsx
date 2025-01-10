import React, {Suspense}from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

/* import DetailedProduct from './pages/DetailedProduct'
import Home from './pages/Home'
import Login from './pages/Login'
import CategoryWiseProducts from './pages/ProductsDisplay'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import Search from './pages/Search'
import Footer from './components/Footer'
import Address from './components/address/Address'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Summary from './pages/Summary'
import Orders from './pages/Orders' */

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const CategoryWiseProducts = React.lazy(() => import('./pages/ProductsDisplay'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const DetailedProduct = React.lazy(() => import('./pages/DetailedProduct'));
const Search = React.lazy(() => import('./pages/Search'));
const Footer = React.lazy(() => import('./components/Footer'));
const Summary = React.lazy(() => import('./pages/Summary'));
const Address = React.lazy(() => import('./components/address/Address'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Payment = React.lazy(() => import('./pages/Payment'));
const Orders = React.lazy(() => import('./pages/Orders'));


function App() {
  let userData=JSON.parse(localStorage.getItem("userData"))
  const userId = 1;

  return (
    <Suspense fallback={<div>Loading Page...</div>}>
    <div className=''>
     <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/product-search' element={<Search/>} />
        <Route path='/product/:id' element={<DetailedProduct/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/orders" element={<Orders/>}/>
       
        <Route path='/category/:categoryname' element={<CategoryWiseProducts/>} />
       
      </Routes>
      
      <Footer/> 
      
    </div>
    </Suspense>
  )
}

export default App
