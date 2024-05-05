import React from 'react'
import Navbar from "../components/Navabar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import AboutContent from "../components/AboutContent"

const About = () => {
  return (
    <div>
      <Navbar>
      </Navbar>
      <HeroImg2 heading="ABOUT" text="I'm a Full Stack Web Developer!."></HeroImg2>
      <AboutContent/>
      <Footer/>
      </div>
  )
}

export default About