import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Default from "../components/Default"
import PrivateRoute from "../components/PrivateRoute"

const App = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/account" component={Profile} />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App