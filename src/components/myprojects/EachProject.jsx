import React from "react";
import './myprojects.css'
export default function Testproducts(props) {
  return (
    <div className='eachproject'>
        <div>
            <img className='project-image' src={props.image} alt="" />
        </div>
        <div>
            <h2 className='text-primary'>{props.name}</h2>
            <p className='description'>{props.desciption}</p>
            <p className='text-primary'>Technologies used : {props.Technologies}</p>
            <a className='btn getcode' href={props.github} rel="noreferrer" target='_blank'>Github</a>
        </div>
    </div>
  );
}