import React, { useState } from 'react'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import Container from '../container/Container'
import { useNavigate, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // ✅ for hamburger icons

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false) // ✅ mobile toggle

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
    { name: 'My Post', slug: '/add-post', active: authStatus },
  ]

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex items-center justify-between">
          {/* ✅ Logo */}
          <div className="flex items-center">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* ✅ Hamburger toggle for mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* ✅ Desktop Menu */}
          <ul className="hidden md:flex ml-auto space-x-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

        {/* ✅ Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="flex flex-col mt-3 space-y-2 md:hidden bg-gray-600 rounded-lg p-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setMenuOpen(false) // close after click
                    }}
                    className="block w-full text-left px-4 py-2 duration-200 hover:bg-blue-100 rounded-lg"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        )}
      </Container>
    </header>
  )
}

export default Header
