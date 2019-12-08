import React from "react"
import SEO from "./seo"

const Profile = ({user}) => {
  return (
    <div>
      <SEO title="Profile"/>
      <h1>{user.name}</h1>
      <img src={user.picture} width="64em" alt={user.name}/>

      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  )
}

export default Profile
