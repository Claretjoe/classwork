 import React from 'react'
 import './Hero.css'
import { Link } from 'react-router-dom'
 
 const Hero = () => {
   return (
     <div>
       {/* <!-- HERO SECTION --> */}
     <section className="hero">
        <div className="overlay">
            <div className="hero-content">
            <h1>welcome to my web page</h1>
            <p>we specialize on fullstack development, development, UI/UX, graphics design and thers</p>  
            
            <Link to="/SignUp"><button>Get started</button></Link>
            </div>
        </div>
</section>
     </div>
   )
 }
 
 export default Hero
 