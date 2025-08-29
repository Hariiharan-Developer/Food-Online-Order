import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.swiggy_logo} className='footer-logo'/>
            <p>FoodieExpress is your one-stop destination for fresh, tasty, and hygienic food delivered right to your doorstep. From mouth-watering snacks to full meals, we make ordering simple, fast, and reliable. With a focus on quality ingredients and quick service, we ensure every bite is filled with flavor and happiness. Stay connected with us for exciting offers, exclusive deals, and a delightful food journey every day!</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon}/>
            <img src={assets.twitter_icon}/>
            <img src={assets.linkedin_icon}/>
            </div>
            </div>
            <div className="foooter-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                <li>📞+91 98765 43210</li>
                <li>support@foodapp.com</li>
                <li>Available: 9:00 AM – 11:00 PM</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className='footer-copyright'>Copyright © 2025 FoodApp. All Rights Reserved</p>
    </div>
  )
}

export default Footer
