import React from 'react'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import Container from '../container/Container'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
  const authStatus =  useSelector((state) => state.auth.sts)
  return (
    <div>
      Header
    </div>
  )
}

export default Header
