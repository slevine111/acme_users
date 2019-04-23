import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ location: { pathname } }) => {
  console.log('in navabr remount')
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${pathname !== '/' ? 'active' : ''}`}
          to="/users"
        >
          Users
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
