import React from 'react'
import {  FiShoppingCart } from "react-icons/fi"
import Logo from "../../assets/logo.png"

const Nav = () => {
  return (
    <div>
        <img src={Logo} alt="main-logo" />
        <nav>
            <span>
                <form>
                    <input type="text" defaultValue="Location" />
                    <input type="text" defaultValue="Event Date" />
                    <input type="text" defaultValue="Guest" />
                    <button>Search</button>
                </form>
            </span>
            <span>
              <FiShoppingCart />
              <a>Login</a>
              
            </span>
        </nav>
    </div>
  )
}

export default Nav