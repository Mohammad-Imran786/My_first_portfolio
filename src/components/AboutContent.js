import "./AboutContentStyles.css"

import { Link } from "react-router-dom"
import React1 from "../assets/React1.png"
import React2 from "../assets/React2.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I'm a React Front-End Developer.
            I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className= "btn">Contact
                </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img src={React2} className="img" alt="react2Img"/>
                </div>
                <div className="img-stack bottom">
                <img src={React1} className="img" alt="react1Img"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AboutContent