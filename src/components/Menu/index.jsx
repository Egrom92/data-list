import React from 'react'
import {NavLink} from 'react-router-dom';
import './Menu.css'

const Menu = (props) => {
  return (
      <ul className='menu'>
        <li className="menu__point">
          <NavLink className="menu__link" exact to="/list">
            NIMEKIRI
          </NavLink>
        </li>
        <li className="menu__point">
          <NavLink className="menu__link" exact to="/article">
            ARTIKKEL
          </NavLink>
        </li>
      </ul>
  )
}

export default Menu