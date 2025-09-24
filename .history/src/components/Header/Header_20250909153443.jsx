import React from 'react'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import Container from '../container/Container'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
  const authStatus =  useSelector((state) => state.auth.status);
  const navigate =  useNavigate();

  const navItems = [
    {
      name: 'home',
      slug: '/',
      active: tr
    }
  ]
  return (
    <div>
      Header
    </div>
  )
}

export default Header
