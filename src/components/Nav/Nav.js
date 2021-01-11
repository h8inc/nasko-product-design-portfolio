import React from "react"
import "./nav.css"
import "../../css/normalize.css"
import "../../css/global.css"
import { Link } from "gatsby"
import logo from "../../images/mylogo-black.svg"

const Nav = () => {
  return (
    <div className="header__wrapper">
      <nav>
        <Link to="/">
          <img src={logo} className="img-logo" alt="logo"></img>
        </Link>
        <section className="header__txt">
          <Link to="/about" className="navlink">
            Nasko Terziev Jr.
          </Link>
        </section>
      </nav>
    </div>
  )
}

export default Nav
