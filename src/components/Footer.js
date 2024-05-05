import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div> 
                        <p>#15 cross Lakkasandra, Bengaluru, India. </p>
                    </div>
                </div>
                <div className="phone">
                    <p><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    +91 7492902575</p>
                </div>
                <div className="email">
                    <p><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    786.meimran@gmail.com</p>
                </div>
            </div>
            <div className="right">
                <h4 style={{color: "#fff"}}>About the Company</h4>
                <p>This is Md. Imran. CEO & Founder of Codepict. I enjoy discussing new projects and design and challenges.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer