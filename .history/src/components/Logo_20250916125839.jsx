import React from 'react'
import logo from '../assets/react.svg'
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} alt="" width="75px"/>
    </div>
  )
}

export default Logo