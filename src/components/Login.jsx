import React from 'react'
import { Link } from 'react-router-dom';

import loginImg from '../assets/login.jpg'
import students from '../assets/students.png'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='hidden sm:block' style={{ position: 'relative' }}>

<img
className='w-full h-full object-cover'
src={students}
alt=""
style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
}}
/>
<div
style={{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(35deg , rgba(66, 66, 66, 1), rgba(66, 66, 66, 0))',
  zIndex: 0,
}}
></div>
</div>

 


        <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 py-12 px-8 transform transition-transform duration-300 hover:scale-105 '>
        <h2 className='text-3xl text-white font-bold text-center'>Sign In</h2>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
            <p>Forgot Password</p>
        </div>
        <Link to='/Main'>
  <button type="submit" className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
</Link>
        
        <p className='pt-4 text-center text-gray-400 mx-auto'>Don't have an account? <Link to='/Signup'><u>Sign Up</u></Link></p>
    </form>
        </div>
    </div>
  )
}
