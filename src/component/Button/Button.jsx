import React from 'react'
import './button.css'
const Button = (prop) => {
  return (
    <button className='button'>
        {prop.value}
    </button>
  )
}

export default Button