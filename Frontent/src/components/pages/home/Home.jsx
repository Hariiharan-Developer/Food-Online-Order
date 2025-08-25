import React, { useState } from 'react'
import './Home.css'
import Header from '../../header/Header'
import ExploreMenu from '../../exploreMenu/ExploreMenu'
import FoodDisplay from '../../foodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
const Home = () => {

  const [category,setCategory]=useState('All')
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      
    </div>
  )
}

export default Home
