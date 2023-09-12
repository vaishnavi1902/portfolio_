import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <>
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vaishnavi-kumbhakarna-838a13221/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/vaishnavi1902" target='_blank'><BsGithub/></a>
        <a href="#"><BsGlobe/></a>
    </div>
     <div className='header__socials_sm'>
        <a href="https://www.linkedin.com/in/vaishnavi-kumbhakarna-838a13221/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/vaishnavi1902" target='_blank'><BsGithub/></a>
        <a href="#"><BsGlobe/></a>
     </div>
 </>
  )
}

export default HeaderSocials