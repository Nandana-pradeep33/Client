import React from 'react'
import { Link } from 'react-router-dom';
import loginImg from '../assets/login.jpg'

const SignUp = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center' >
            
            <form className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 py-12 px-8'>
                <h2 className='text-2xl text-white font-bold text-center pb-5'>Register Here</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label >Full Name:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500  ' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email ID:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label >Contact Number:</label>
                    <input className='border  bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label >Confirm Password:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="password" />
                </div>
               
                
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>REGISTER</button>
                
            </form> 
        </div>
    </div>
    
  )
}

export default SignUp
