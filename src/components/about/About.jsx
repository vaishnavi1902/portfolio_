import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'
import {GiSkills} from 'react-icons/gi'
import ME from '../../assets/me2.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me !</h2>
      <div className='container about__container'>
        <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years experiance in SD</small>
            </article>
            <article className="about__card">
              <GiSkills className='about__icon' />
              <h5>Skills</h5>
              <small>Skilled in Technical Practices</small>
            </article>
            <article className="about__card">
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>

          <p>
          Hello World ! I am a professional Software Engineer and 
          having 1+ years of experience in Website development. I am familiar with 
          Java and a good intermediate level of Data Structures and Algorithms . 
          Also having a 6 months+ experience in ReactJS and React Native development .
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About