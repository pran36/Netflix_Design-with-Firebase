import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar() {
  const {user, logout} = UserAuth()
  // console.log(user.email)
  const navigate = useNavigate()
  const handleLogout = async() => {
    try{
      await logout()
      navigate('/')
    }catch{
      console.log("a")
      console.log(error)
      
    }
  }

  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
          <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? (<div>
          <Link to="/account">
            <button className='pr-4'>Account</button>
          </Link>
            <button onClick={handleLogout}
            className='bg-red-900 px-6 py-2 rounded-md cursor-pointer'>Logout</button>
        </div>) : (<div>
          <Link to="/login">
            <button className='pr-4'>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className='bg-red-900 px-6 py-2 rounded-md cursor-pointer'>Sign Up</button>
            </Link>
        </div>)}  
        
    </div>
  )
}

export default Navbar