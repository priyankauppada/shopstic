import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter  } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'


import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from './components/ScrollToTop.jsx'
import { FilterProvider } from './context/FilterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <CartProvider>
    <FilterProvider>
   <HashRouter  >
   <ScrollToTop/>
    <App />
    </HashRouter >
    </FilterProvider>
   </CartProvider>
    
    
  </StrictMode>,
)
