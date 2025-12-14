import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {

  // state for handling active menu option
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      {/* navbar logo */}
      <img src={assets.logo} alt="logo" className='logo' />

      {/* navbar menu options (in the center) */}
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>

      {/* navbar right section - icons, button */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" className='navbar-right-icon' />
        <div className="navbar-cart-icon">
          <img src={assets.basket_icon} alt="cart" className='navbar-right-icon' />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar
