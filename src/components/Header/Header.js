import React from 'react'
import './Header.scss'
import logo from '../../assets/Logo/InStock-Logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header className='header'>
      <NavLink className='header__logo' to='/'>
        <img className='header__logo-img' src={logo} alt="Instock logo" />
      </NavLink>
      <nav className='nav-bar'>
        <ul className='nav-bar__link-list'>
          <NavLink
            to="/warehouse"
            className={({ isActive, isPending }) => {
              if (location.pathname === "/") {
                return 'nav-bar__link nav-bar__link--active';
              }
              return isPending ? "nav-bar__link" : isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link";
            }
            }>
            <li className='nav-bar__link--warehouses'>Warehouses</li>
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive, isPending }) => {
              return isPending ? "nav-bar__link" : isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link"
            }
            }>
            <li className='nav-bar__link--inventory'>Inventory</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header