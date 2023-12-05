import React from 'react'

function Navbar() {
  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='pr-4'>Sign In</button>
            <button className='bg-red-900 px-6 py-2 rounded-md cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar