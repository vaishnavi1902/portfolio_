/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <>
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vaishnavi-kumbhakarna-838a13221/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vaishnavi1902" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="#"><BsGlobe/></a>
    </div>
     <div className='header__socials_sm'>
        <a href="https://www.linkedin.com/in/vaishnavi-kumbhakarna-838a13221/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vaishnavi1902" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="#"><BsGlobe/></a>
     </div>
 </>
  )
}

export default HeaderSocials