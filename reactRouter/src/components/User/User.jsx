import React from 'react'
import {  useParams } from 'react-router-dom'
const User = () => {

    const {userid} = useParams()
  return (
    <div className='text-black bg-orange-500 p-4 text-2xl text-center'>
      User: {userid}
    </div>
  )
}

export default User
