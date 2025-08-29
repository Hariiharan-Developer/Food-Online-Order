import React from 'react'
import './Navbar.css'
import {assets}  from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
            <img className='logo' src={assets.swiggy_logo} alt="" />
            <div className="header"><h2>Admin panel</h2></div>
            <img className='profile' src={assets.profile_image} alt="" />
   
      
    </div>
  )
}

export default Navbar
