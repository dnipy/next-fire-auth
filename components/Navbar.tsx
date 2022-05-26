import React from 'react'
import { useAuth } from '../providers/AuthContext'

function Navbar() {
    const { user,logOut } = useAuth()

  return (
    <div className='Nav'>
      {user? <a onClick={()=>logOut()}>logout</a>  : <a href='/auth/login'>signin</a>}
        <a href='/auth/signup'>signup</a>
        <a href='/auth/dashbord'>dashbord</a>
        <a href='/'>home</a>
    </div >
  )
}

export default Navbar