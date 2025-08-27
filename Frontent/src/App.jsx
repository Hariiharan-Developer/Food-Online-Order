import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/placeOrder/PlaceOrder'
import Footer from './components/footer/footer'
import LoginPopUp from './components/loginPopup/LoginPopUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/> 
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
