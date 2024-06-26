import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/f6ef8ce4-b925-46b0-8146-4e8847e389b5/NP-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50 '>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-md'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                         className='p-3 my-2 bg-gray-600 rounded-md' type="email" placeholder="Email" autoComplete='email'/>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                         className='p-3 my-2 bg-gray-600 rounded-md' type="password" placeholder="Password" autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p className='mr-2'><input type="checkbox"/>Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-4'><span className='text-gray-600'>Already Subscribed to Netflix?</span>{" "}<Link to='/login'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp