import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'
import './Header.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/technology', label: 'Technology' },
  { path: '/services', label: 'Services' },
  { path: '/research', label: 'Research' },
  { path: '/about', label: 'About' },
  { path: '/whitepaper', label: 'Whitepaper' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <img src="/logo.png" alt="Crispin Alessi Limited" />
        </Link>

        <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}>
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `header-link ${isActive ? 'header-link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => `header-link header-link--mobile-only ${isActive ? 'header-link--active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="header-cta">
            Contact Us <FiArrowRight />
          </Link>
          <button
            className="header-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && <div className="header-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
