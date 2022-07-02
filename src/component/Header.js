import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='d-flex flex-wrap justify-content-center px-3 py-3 mb-4 border-bottom'>
      <a
        href='/'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
      >
        <span className='fs-4'>React Custom Hook</span>
      </a>

      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <NavLink to='/' className='nav-link'>
            Users
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/gallery' className='nav-link'>
            Picture Gallery
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
