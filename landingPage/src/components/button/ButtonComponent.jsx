import React from 'react'
import './ButtonComponent.css'

function ButtonComponent({customStyle, name}) {
  return (
    <div>
        <button customStyle={customStyle} className='customButton'>{name}</button>
    </div>
  )
}

export default ButtonComponent