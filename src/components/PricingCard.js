import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- B -</h3>
                <span className="bar"></span>
                <p className="btc">₹ 999</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Desing -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW 
                </Link>
            </div>
            <div className="card">
                <h3>- PREMIUM -</h3>
                <span className="bar"></span>
                <p className="btc">₹ 1999</p>
                <p>- 3 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Desing -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW 
                </Link>
            </div>
            <div className="card">
                <h3>- BUSINESS -</h3>
                <span className="bar"></span>
                <p className="btc">₹ 2999</p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Desing -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard