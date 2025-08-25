import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/placeOrder/PlaceOrder'
import Footer from './components/footer/footer'



const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
     
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
