import React from 'react'
import './projects.css'
import data from './projects.json'
const Project = function Project () {
  const ddata = data.map(
    (item) => {
      return (
        <div>
            <h4>{item.name}</h4>
            <h5>{item.github}</h5>
        </div>
      )
    }
  )
  return ddata;
}
export default Project