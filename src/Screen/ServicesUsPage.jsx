import React from 'react'
import "../Screen/ServiceUsPage.css"
const ServicesUsPage = () => {
  return (
<div>
     {/* Academic Services & Resources Section */}
    
      <section className='Resources'>
      <h3>Academic Services &amp; Campus Resources</h3>
      <p>Supporing academic excellence, groundbreaking research, and student sucess across every discipline</p>
      </section>

      <section className='services'>
      <article className='service-card'>
        <h3>Research &amp; grant support</h3>
        <p>comprehensive assistance  for faculty and graduate reserchers, including grant writing, ethics compliance, and funding acquisition.</p>
      </article>

      <article className='service-card 2'>
        <h3>Academic Adivising &amp, Mentorship</h3>
        <p>Personalised degre plannning, course selection, and career pathway guide by experienced faculty advisors.</p>
      </article>

      <article className='service-card'>
        <h3>Global Learning &amp; Exchange</h3>
        <p>Study abroad programs, international research partnerships, and multicultural academic exchange initiatives</p>
      </article>

      <article className='service-card 2'>
        <h3>Digital Learning &amp, Tech Labs</h3>
        <p>State-of-the-art computational facilities, online learning platforms, and specialized hardware labs for all faculties</p>
      </article>
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

export default ServicesUsPage
