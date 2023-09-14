import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className=''>
      <ul className='all_sections'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="socials">
        <a href="https://www.linkedin.com/in/vaishnavi-kumbhakarna-838a13221/" className='icons'><BsLinkedin /></a>
        <a href="http://github.com/vaishnavi1902" className='icons'><BsGithub /></a>
        <a href="mailto:kumbhakarna.vaishnavi01@gmail.com" className='icons'><AiOutlineMail /></a>
      </div>
    </footer>
  )
}

export default Footer