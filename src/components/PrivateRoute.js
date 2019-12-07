// import ...
import React from "react"
import history from "../utils/history"
import { Auth0Provider } from "../services/react-auth0-spa"

const config = { domaine: "", client: "" }

const PrivateRoute = ({ component: Component, location, ...props }) => {
  // A function that routes the user to the right place
  // after login
  const onRedirectCallback = appState => {
    console.log("Back from login...")
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }

  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Component {...props} />
    </Auth0Provider>
  )
}

export default PrivateRoute
