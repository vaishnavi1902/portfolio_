import React from 'react'
import './experience.css'
import job from './webdevelopment.jpg'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience' className='container experience__container'>
        <h5>Till Now</h5>
        <h2>Experience !</h2>
        <div className="experience">
            <div className="role">
              <h3>Web Developer</h3>
              <img className='job' src={job} alt="" />
            </div>
            <div className="desc">
            <p className='text-light'><BsFillPatchCheckFill className='text-primary checkic'/>I worked as a web developer and having responsibilities like maintaining the existing
            website, converting old website into its newer version. Also redesigned websites to create a more visually appealing, user-friendly experience
            . Handled special projects designed by senior developers. Managed projects and web strategic planning for entire
            team. Writing a well scalable and understandable code resulting in increase of user satisfaction.</p>
           <p className='text-light'><BsFillPatchCheckFill className='text-primary checkic'/>  Configured the Apache http server for hosting website to improve website loading speed by 64 percent.</p>
           <p className='text-light'><BsFillPatchCheckFill className='text-primary checkic'/> Experienced the working 6 hours a day and approximately 36 hours a week.</p>
           <p className='text-primary technologies'><BsFillPatchCheckFill className='text-primary checkic'/> Technologies: HTML / HTML5 , CSS / CSS3 , Bootstrap 5 , JavaScript , PHP , SQL , MySQL , JSON , ReactJS</p>

            </div>
        </div>
    </section>


  )
}

export default Experience