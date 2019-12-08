import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.scss"
import { logout, isAuthenticated } from "../utils/auth"
import NavBar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
