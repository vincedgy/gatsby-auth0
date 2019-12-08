import React from "react"

const Profile = ({user}) => {



  
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.picture} width="64em" alt={user.name}/>

      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  )
}

export default Profile
