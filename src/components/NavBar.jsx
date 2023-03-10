import React, { useState } from 'react'
import { companyLogo } from '../assets'
import './NavBar.scss'

const NavBar = () => {
  const [toggleHamburger, setToggleHambuger] = useState(false)
  return (
    <nav>
      <img src={companyLogo} className="productLogo" />
      <ul>
        <li>
          <a className="active" href="#product">
            Home
          </a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}

export default NavBar
