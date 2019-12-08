import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout"
import Profile from "../../components/Profile"
import Default from "../../components/Default"
import { login, isAuthenticated, getProfile } from "../../utils/auth"

export default () => {

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  } else {
    const user = getProfile()
    return (
      <Layout>
        <Router>
          <Profile path="/app/profile" user={user}/>
          <Default path="/app" user={user} />
        </Router>
      </Layout>
    )
  }


}
