import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const toggleSigninForm = () =>{
          setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Header />
        <div>
            <form className='absolute w-3/12 block bg-black text-white my-36 mx-auto right-0 left-0 p-12 max-w-96 rounded-lg bg-opacity-85'>
                <h1 className='text-3xl font-bold py-4' >{isSignIn ? "Sign In" : "Sign Up" }</h1>
                {
                  isSignIn ?
                  "" :
                  <input className='bg-gray-700 py-4 my-4 w-full' type='text' placeholder='Full Name' />
                }
                <input className='bg-gray-700 py-4 my-4 w-full' type='email' placeholder='Email Address' />
                <input className='bg-gray-700 py-4 my-4 w-full' type='password' placeholder='Password' />
                <button className='w-full bg-red-700 p-4 my-6 rounded-lg'>{isSignIn ? "Sign In" : "Sign Up" }</button>
                <p className='py-4 cursor-pointer' onClick={toggleSigninForm}>{
                  isSignIn ? "New to NETFLIX? Sign Up." : "Already Registered? Sign In Now."
                }</p>
                
            </form>
        </div>
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg' alt='netflix-bg' />
    </div>
  )
}

export default Login
