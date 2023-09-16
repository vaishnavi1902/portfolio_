import './index.css'
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiance/Experience'
import Education from './components/education/Education.jsx'
import Services from './components/services/Services'
import ProjectsAll from './components/myprojects/ProjectsAll'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
   <>
   <Header />
   <Nav />
   <About />
   <Education /> 
   <ProjectsAll />
   <Experience />
   <Services />
   <Contact />
   <Footer />
   </>
  )
}

export default App