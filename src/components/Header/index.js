import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import Hamburger from '../Hamburger'

const Header = () => {
  return (
    <nav className='navbar-container'>
      <span className='website-logo'>
        Madelyn Torff
      </span>
      <ul className='nav-items-container'>
        <li className='nav-item'>
          <NavLink to="/" className="link">
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/contact" className="link">
            Contacts
          </NavLink>
        </li>
      </ul>
      <Hamburger />
    </nav>
  )
}

export default Header