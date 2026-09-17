import React from 'react'

function App() {
  return (
    <div className= "App">
      
    {/* <!-- HEADER --> */}
     <section>
        <header>
            <div className="nav-links-text"><a href="Home">Home</a></div>
            <div className="nav-links-text"><a href="contact us">Contact us</a></div>
            <div className="nav-links-text"><a href="About">About</a></div>
            <div className="nav-links-text"><a href="services">Services</a></div>
        </header>
     </section>
     {/* <!-- HERO SECTION --> */}
     <section className="hero">
        <div className="overlay">
            <div className="hero-content">
            <h1>welcome to my web page</h1>
            <p>we specialize on fullstack development, development, UI/UX, graphics design and thers</p>  
            <button>Get started</button> 
            </div>
        </div>
</section>
{/* <!-- ABOUT SECTION --> */}
 <section className="about">
    <div className="about-text">
        <h4>ABOUT US</h4>
    <h2>Building skills, <br />Building future</h2>
     <p>At morning className digital skill academy, we provide practical tarining that helps you create a future.</p>
     <ul>
        <li> &#10004; Practical Heads-on learning</li>
        <li> &#10004; Expert Instructors</li>
        <li> &#10004; Flexible Learing Schedule</li>
     </ul>
     <a href="#" className="btn">learn more</a>
    </div>
    <div className="about-image">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUNQ8uRSc8BJOXqnbAOYrMbj1ycqROHbGF6_2hpbusQ&s=10" alt="student learning"/>
    </div>
 </section>

 {/* <!-- TESTIMONY SECTION --> */}
  <section className="testimonials">
    <h4>TESTIMONIES</h4>
    <h2>Feedback From Our Students</h2>
    <div className="Testimonial-container">
    <div className="card">
        <img src="../../Downloads/className 1.jfif"/>
        <h3>Oluchi Iwueze</h3>
        <p>This Academy Complete Change my Career. so far i have gotten a great structure on it</p>
    </div>
        <div className="card">
        <img src="../../Downloads/className 2.jfif"/>
        <h3>Iwu Clement</h3>
        <p>The academy stands to be stepping stone towards my dream in the world of fullstack-development</p>
        </div>
        <div className="card">
        <img src="../../Downloads/className 3.jfif"/>
        <h3>Joseph Claret</h3>
        <p>This Academy Complete Change my Career. so far i have gotten a great structure on it</p></div>
   
    </div>
  </section>
   
  {/* <!-- CALL TO ACTION SECTION --> */}
<section className="cta">
    <div className="cta-content">
        <h2>Ready To Start Your Learning Journey?</h2>
        <p>Join Us Today And Start Learning Practical Digital Skills That Can Ttransform Your Future</p>
        <a href="#" className="cta-button">Get Started</a>
    </div>
</section>
{/* <!-- FOOTER --> */}
 <footer className="footer">
    <div className="footer-container">
        {/* <!-- ABOUT --> */}
         <div className="footer-box">
            <h2>Our Digital Academy</h2>
            <p>Empowering Students with Practical Digital Skills For a Better Future.</p>
         </div>
         {/* <!-- QUICK LINKS --> */}
          <div className="footer-box">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Courses</a>
            <a href="#">Contact</a>
          </div>
          {/* <!-- CONTACT --> */}
           <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Phone: =+234 800 000 0000</p>
            <p>Owerri, Imo State</p>
           </div>
    </div>
    {/* <!-- COPYRIGHT --> */}
     <div className="copyright">
        <p>&COPY; 2026 Our Digital Skills Academy. All Rights Reserved</p>
     </div>
 </footer>
    </div>
    
  )
}

export default App
