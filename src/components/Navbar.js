import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.scss"
import { logout, isAuthenticated } from "../utils/auth"

const Navbar = () => {
  return (
    <nav className={layoutStyles.container.content}>
    <div className={layoutStyles.content}>
        <nav>
          <Link to="/" activeClassName={layoutStyles.active}>
            Home
          </Link>{" "}

          <Link to="/app" activeClassName={layoutStyles.active}>
            App
          </Link>{" "}

          {isAuthenticated() ? (
            <Link to="/app/profile" activeClassName={layoutStyles.active}>
              Your profile
            </Link>
          ) : null}

          <a
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >Log Out</a>

        </nav>
      </div>
    </nav>
  )
}

export default Navbar
