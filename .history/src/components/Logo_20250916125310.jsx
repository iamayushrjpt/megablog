import React from 'react'
import react from '../assets/react.svg'
function Logo({width = '100px'}) {
  return (
    <div>Logo
      <img src={react} alt="" />
    </div>
  )
}

export default Logo