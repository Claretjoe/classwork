import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      {/* <!-- HEADER --> */}
     <section>
        <header>
            <div className="nav-links-text"><Link to="/">Home</Link></div>
            <div className="nav-links-text"><Link to="/ContactUsPage">Contact us</Link></div>
            <div className="nav-links-text"><Link to="/AboutUsPage">About</Link></div>
            <div className="nav-links-text"><Link to="/ServicesUsPage">Services</Link></div>
        </header>
     </section>
    </div>
  )
}

export default Header
