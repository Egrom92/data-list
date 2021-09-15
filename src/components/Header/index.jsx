import React from 'react'
import {NavLink} from "react-router-dom";
import appLogo from '../../img/logo.svg'
import './Header.css'

export default function Header(props) {
  return (
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <NavLink className="logo" exact to="/">
              <img className='logo__img' src={appLogo} alt="app logo"/>
            </NavLink>
            <h1 className='header__title'>NIMEKIRI</h1>
          </div>
        </div>
      </header>
  )
}