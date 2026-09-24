import React from 'react'
import LandingPageScreen from './Screen/LandingPageScreen'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import ContactUsPage from './Screen/ContactUsPage';
import AboutUsPage from './Screen/AboutUsPage';
import ServicesUsPage from './Screen/ServicesUsPage';



function App() {
  return (
    <div className= "App">
      <Header/>
     <Routes>
      <Route path="/" element={<LandingPageScreen/>}/>
      <Route path="/ContactUsPage" element={<ContactUsPage/>}/>
      <Route path="/AboutUsPage" element={<AboutUsPage/>}/>
      <Route path="/ServicesUsPage" element={<ServicesUsPage/>} />        
     </Routes>
      
  

    </div>
    
  )
}

export default App
