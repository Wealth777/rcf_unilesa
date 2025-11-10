import React, { useState } from 'react'
import '../styles/componentsStyle/Navbar.css'
import navLogo from '../assets/20251028_154814-removebg-preview.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navCont">
        <div className="elements">
          <img src={navLogo} className="navbar-brand" alt="Logo" />

          <button
            className={`navbar-toggler ${menuOpen ? 'active' : ''}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/aboutus" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/events" className="nav-link" onClick={() => setMenuOpen(false)}>Programs</Link>
            {/* <Link to="/sermon" className="nav-link" onClick={() => setMenuOpen(false)}>Sermons</Link>
            <Link to="/testimonies&prayers" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonies</Link> */}
            <Link to="/news" className="nav-link" onClick={() => setMenuOpen(false)}>News</Link>
            {/* <Link to="/joinus" className="nav-link" onClick={() => setMenuOpen(false)}>Join Us</Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
