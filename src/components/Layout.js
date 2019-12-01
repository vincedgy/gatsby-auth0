import React from "react"
import {Link} from 'gatsby'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="app/account">Account</Link>
        </nav>
      </div>
      {children}
    </div>
  )
}

export default Layout
