import React from 'react'
import'./education.css'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import education from './education.json'
const Each = function Each () {
  const ddata = education.map(
    (item) => {
      return (
        <div className='each'>
          <HiOutlineAcademicCap className='icon'/>
          <div className="flexdiv">
              <h4>{item.Degree}</h4>
              <h5>{item['passing-year']}</h5>
          </div>
          <div className="flexdiv">
            <div>
                <h5 className='uni'>{item.university}</h5>
                <h5 className='text-light'>{item.school}</h5>
            </div>
            <div>
                <h5 className='text-light'> CGPA :- {item.cgpa}</h5>
                <h5 className='text-light'> Grade :-  {item.Grade}</h5>
            </div>
          </div>
        </div>
      )
    }
  )
  return ddata;
}

export default Each