import React from 'react'
import data from './skills.json'
const Skill = function Each () {
    const ddata = data.map(
      (item) => {
        return (
        <div className='skill'>
            <img className='skill-img' src={ item.image } alt="" />
            <h5>{item.name}</h5>
        </div>
        )
      }
    )
    return ddata;
  }
export default Skill