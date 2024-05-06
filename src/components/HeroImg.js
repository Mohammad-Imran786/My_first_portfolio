import "./HeroImgStyles.css";

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import React from 'react'

import IntroImg from "../assets/Intro-bg.jpg"

import { Link } from "react-router-dom"

const Heroimg = () => {

    const [text] = useTypewriter({
        words: ['Coder', 'Front End Developer', 'Blogger', 'Problem Solver', 'Cricketer'], 
        loop: {}, typeSpeed: 100, deleteSpeed: 100,

    })

  return (
    <div className="hero">
        <div className="mask">
        <img className="Intro-img" src= {IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p style={{color: "#fff"}}>Hey, There!</p>
                <h1>I'm a {' '}
                    <span style={{color: 'lightgreen'}}> 
                    {text} 
                    </span>
                    <span style={{color:'lightgreen'}}>
                        <Cursor/></span></h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg