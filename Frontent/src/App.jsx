import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/placeOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/loginPopup/LoginPopUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './components/pages/Verify/Verify'
import MyOrder from './components/pages/MyOrders/MyOrder'




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
        <Route path='/verify' element ={<Verify/>}/>
        <Route path='/myorders' element ={<MyOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    <ToastContainer position='top-right' autoClose={3000}/>
    </>
  )
}

export default App
