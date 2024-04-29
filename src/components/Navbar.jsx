import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
          <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        
        <div>
          <Link to="/login">
            <button className='pr-4'>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className='bg-red-900 px-6 py-2 rounded-md cursor-pointer'>Sign Up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar