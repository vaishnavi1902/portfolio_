import React from 'react'
import data from './allprojects.json'

const Eachproject = function Each () {
    const ddata =  data.map(
    (item) => {
      return (
        <div className='eachproject'>
            <div>
                 <img className='project-image' src={item.image} alt="" />
            </div>
            <div>
                <h2 className='text-primary'>{item.name}</h2>
                <p className='description'>{item.desciption}</p>
                <p className='text-primary'>Technologies used : {item.Technologies}</p>
                <a className='btn getcode' href={item.github} rel='noreferrer' target='_blank'>Github</a>
            </div>
        </div>
      )
    }
  )
  return ddata;
}


export default Eachproject