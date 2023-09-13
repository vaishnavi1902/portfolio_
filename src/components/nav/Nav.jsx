import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /></a>
      <a href="#education" onClick={() => setActiveNav('#education')}  className={activeNav === '#education' ? 'active' : ''}><HiOutlineAcademicCap /></a> 
      <a href="#projects" onClick={() => setActiveNav('#projects')}  className={activeNav === '#projects' ? 'active' : ''}><AiFillProject /></a> 
      <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a> 
      <a href="#skills" onClick={() => setActiveNav('#skills')}  className={activeNav === '#skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav