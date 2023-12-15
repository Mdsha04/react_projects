import React from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
    const { user } = React.useContext(UserContext)
  if(!user) return <div>Please Login</div>
  return <div> Welcome {user.username} 
  <div>
    Your Password is {user.password}
    </div></div>
}

export default Profile
