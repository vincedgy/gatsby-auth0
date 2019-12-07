import React from 'react'
import { Link } from 'gatsby'

const Default = ({user}) => {
  return (
    <div>
    <h2>Hi, {user.name ? user.name : "friend"}!</h2>
    <p>Go to your profile <Link to="app/profile">here</Link>.</p>
    </div>
  )
}

export default Default