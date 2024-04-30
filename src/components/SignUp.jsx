import React, { useState } from 'react'
import  loginImg from '../assets/students.png'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password, contact })
        .then(result => {
            console.log(result);
            // Navigate to the next page on successful registration
            navigate('/Profile');
        })
        .catch(err=> console.log(err));
    };
    
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        
         <div className='hidden sm:block' style={{ position: 'relative' }}>

<img
    className='w-full h-full object-cover'
    src={loginImg}
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
       background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
       zIndex: 0,
   }}
></div>
</div>

      

        <div className='bg-gray-800 flex flex-col justify-center' >
            
            <form onSubmit={handleSubmit} className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 py-12 px-8'>
                <h2 className='text-2xl text-white font-bold text-center pb-5'>Register Here</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label >Full Name:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500  ' type="text"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email ID:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label >Contact Number:</label>
                    <input className='border  bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="text"
                    onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label >Confirm Password:</label>
                    <input className='border bg-gray-700 border-black rounded-lg  mt-2 p-2 focus:border-blue-500' type="password" />
                </div>
               
               
               
  <button type="submit" className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>

                
                
                
            </form> 
        </div>
    </div>
    
  )
}

export default SignUp
