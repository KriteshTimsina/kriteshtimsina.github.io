import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <button className='button'>
        <p>{props.value} &nbsp;</p>
        <img className="icon" src={props.icon} alt="icon" />
    </button>
  )
}

export default Button