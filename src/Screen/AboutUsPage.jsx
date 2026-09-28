import React from 'react'
import "../Screen/AboutUsPage.css"

const AboutUsPage = () => {
  return (
    <div>
      {/* Header and Hero */}
    <section className='Hero'>
        <h1>Welcome to Academic Excellence</h1>
        <p>Empowering minds,advancing research, am building a community committed to global impact.</p>
    </section>

    <hr/>
    {/* Mission and Overview */}
    <section className="mission">
      <h2>About <br/>Our Institution</h2>
      <p>Founded on the principles of critical inquiry, inegrity, and innovation, our institution provies an inclusive environment <br/>where students and researchers collaborate to solve complex real-world challenges.</p>
      <p>We blend traditional academic rigor with modern, multidisciplinary perspectives, <br/>enabling our community to push the boundaring of knowledge across humanities, sciences, and technology.</p>
    </section>

    {/* Key Statistics Section */}
    <section className="statistics">
      <h2>By<br/> The Numbers</h2>
      <ul>
        <li><strong>15,000+</strong>Graduate Alumini</li>
        <li><strong>1200+</strong>Acadmic Progress</li>
        <li><strong>45</strong>Research Labs & Camp; Centers</li>
        <li><strong>85%5</strong>Global Placement Rate</li>
      </ul>
    </section>
    <hr/>

    {/* Academic Pillars Section */}
    <section className="pillars">
      <h2>Our Core Academic Pillars</h2>

      <article>
        <h3>1. Rigorous Innvation</h3>
        <p>Fostering cutting-edge resarch and encouraging original thinking to adress modern societal challenges</p>
      </article>

      <article>
        <h3>2. Global Community</h3>
        <p>Cultivating a diverse, inclusive environment that welcomes perspectives from every corner of the world.</p>
      </article>

      <article>
        <h3>3. Ethical Leadership</h3>
        <p>Instilling strong moral principles into our students,preparing them to guuide with integrity.</p>
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
        <p>&copy; 2026 Our Digital Skills Academy. All Rights Reserved</p>
     </div>
     </footer>
    </div>
  )
}

export default AboutUsPage
