import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Header.css'
import { assets } from '../../assets/assets'   // make sure path is correct

const Header = () => {
  const settings = {
    dots: true,            // small navigation dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,   // 4s per slide
    speed: 1000,           // 1s transition
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false          // hide arrows
  }

  return (
    <div className='header'>
      <Slider {...settings} className="header-slider">

        {/* Slide 1 with overlay text */}
        <div className="slide">
          <img src={assets.baner4} alt="1" />
          <div className="header-content">
         
          </div>
        </div>

        {/* Other slides just images */}
        
        <div className="slide"><img src={assets.baner7} alt="7" /></div>
        <div className="slide"><img src={assets.baner8} alt="8" /></div>
        <div className="slide"><img src={assets.baner9} alt="9" /></div>
        <div className="slide"><img src={assets.baner10} alt="10" /></div>
        <div className="slide"><img src={assets.baner11} alt="11" /></div>
        <div className="slide"><img src={assets.baner12} alt="12" /></div>
      
        
      </Slider>
    </div>
  )
}

export default Header
