import React from 'react'
import './Testimony.css'
import person from '../../assets/class 1.jpg'
import personimage from '../../assets/class 2.jpg'
import own from '../../assets/class 3.jpg'

const Testimony = () => {
  return (
    <div>
      {/* <!-- TESTIMONY SECTION --> */}
  <section className="testimonials">
    <h4>TESTIMONIES</h4>
    <h2>Feedback From Our Students</h2>
    <div className="Testimonial-container">
    <div className="card">
        <img src={person}/>
        <h3>Oluchi Iwueze</h3>
        <p>This Academy Complete Change my Career. so far i have gotten a great structure on it</p>
    </div>
        <div className="card">
        <img src={personimage}/>
        <h3>Iwu Clement</h3>
        <p>The academy stands to be stepping stone towards my dream in the world of fullstack-development</p>
        </div>
        <div className="card">
    <img src={own}/>
        <h3>Joseph Claret</h3>
        <p>This Academy Complete Change my Career. so far i have gotten a great structure on it</p></div>
   
    </div>
  </section>
   
    </div>
  )
}

export default Testimony
