import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// Module css !
import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul className={styles.navList}>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
