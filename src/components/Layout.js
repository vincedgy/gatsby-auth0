import React from "react"
import layoutStyles from "./layout.module.scss"
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
