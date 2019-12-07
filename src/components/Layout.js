import React from "react"
import {Link} from 'gatsby'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <nav>
          <Link to="/" activeClassName={layoutStyles.active}>Home</Link>{' '}
          <Link to="/app" activeClassName={layoutStyles.active}>Go to application</Link>{' '}
          <Link to="/app/profile" activeClassName={layoutStyles.active}>Profile</Link>
        </nav>
      </div>
      {children}
    </div>
  )
}

export default Layout
