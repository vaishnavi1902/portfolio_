import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h5 className='hello'>Hello I am </h5>
        <h1>Vaishnavi Kumbhakarna</h1>
        <h5 className="text-light">
          Software Engineer
        </h5>
        <CTA />
        <HeaderSocials />
        <div >
          <img src={ME} className="me" alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header