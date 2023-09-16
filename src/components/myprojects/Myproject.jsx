import React from 'react'
import Eachproject from './Eachproject'
import './myprojects.css'
const Myproject = () => {
  return (
    <section id='myprojects' className='container myproject__container'>
        <h5>All my recent</h5>
        <h2>Projects !</h2>
        <Eachproject/>
    </section>
  )
}

export default Myproject