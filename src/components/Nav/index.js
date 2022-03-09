import logo from "./images/logo.svg"
import hamburger from "./images/hamburger-menu.svg"
import './style.css'
import { useState } from "react"

const Nav = () => {
  const [show, setShow] = useState(false)
  const showMenu = () => {
    setShow(!show)
  }
  return (
    <>
      <div className="nav__container">
        <img src={logo} alt="logo" className="logo" />
        <div onClick={showMenu} className="hamburger__container">
          <img src={hamburger} alt="menu" className="hamburger" />
        </div>
      </div>
      <div className={`nav__links ${show ? "nav__show" : null}`}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>

  )
}

export default Nav;