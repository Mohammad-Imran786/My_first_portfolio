import React from 'react'

import Navbar from "../components/Navabar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div><Navbar>
      </Navbar>
      <br/>
      <HeroImg2 heading="CONTACT" text="Feel free to contact with me..."></HeroImg2>
      <br/>
      <Form/>
      <br/>
      <Footer></Footer></div>
  )
}

export default Contact