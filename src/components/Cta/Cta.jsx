import React from 'react'
import './Cta.css'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div>
      {/* <!-- CALL TO ACTION SECTION --> */}
<section className="cta">
    <div className="cta-content">
        <h2>Ready To Start Your Learning Journey?</h2>
        <p>Join Us Today And Start Learning Practical Digital Skills That Can Ttransform Your Future</p>
        <Link to="/SignUp" className="cta-button">Get Started</Link>
    </div>
</section>
    </div>
  )
}

export default Cta
