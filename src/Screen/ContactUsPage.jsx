import React from 'react'
import "../Screen/ContactUsPage.css"

const ContactUsPage = () => {
  return (
    <div>
    <div class="login-container">
        <form class="login-form">
            <h2>Welcome Back</h2>
            <p>Please enter your details to sign in.</p>

            {/* <!-- Email Input --> */}
            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
            </div>

            {/* <!-- Password Input --> */}
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required/>
            </div>

            {/* <!--Options: Forgot Password  --> */}
            <div class="form-options">
                <label class="remember-me">
                    <input type="checkbox"/> Remember me
                </label>
                <a href="#" class="forgot-link">Forgot password?</a>
            </div>

            {/* <!-- Submit Button --> */}
            <button type="submit" class="login-btn">Log In</button>

            {/* <!-- Extra Links --> */}
            <p class="signup-redirect">
                Don't have an account? <a href="#">Sign up</a>
            </p>
        </form>
    </div>

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

export default ContactUsPage
