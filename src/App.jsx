import './index.css'
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiance/Experience'
import Education from './components/education/Education.jsx'
import Services from './components/services/Services'
import Testmycode from './components/myprojects/Testmycode'
// import Projects from './components/projects/Projects'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Testmycode from './components/Testmycode.jsx'
const App = () => {
  return (
   <>
   <Header />
   <Nav />
   <About />
   <Education /> 
   <Testmycode />
   <Experience />
   <Services />
   {/* <Testimonials /> */}
   <Contact />
   <Footer />
   {/* <Testmycode /> */}
   </>
  )
}

export default App