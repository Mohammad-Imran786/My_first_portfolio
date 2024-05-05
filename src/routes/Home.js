import React from 'react'
import Navbar from "../components/Navabar"

import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"

import Work from "../components/Work"
import AboutContent from '../components/AboutContent'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg/>
      <Work/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default Home