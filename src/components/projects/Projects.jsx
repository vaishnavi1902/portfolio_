import React from 'react'
import Project from './Project'
import './projects.css'
const Projects = () => {
  return (
    <section id='projects' className='container projects__container'>
      <h5>My recent</h5>
      <h2>Projects !</h2>
      <Project/>
    </section>
  )
}

export default Projects