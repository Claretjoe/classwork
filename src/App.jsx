import React from 'react'
import person from "./assets/class 1.jpg"
import personimg from "./assets/class 2.jpg"
import own from "./assets/class 3.jpg"
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Testimony from './components/Testimony/Testimony'
import Cta from './components/Cta/Cta'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className= "App">
     <Header/>
     <Hero/>
     <About/>
     <Testimony/>
     <Cta/>
     <Footer/>
      
  

    </div>
    
  )
}

export default App
