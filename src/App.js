
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Landingpage from './components/Landingpage';
import Profile from './components/Profile';
import Scribe from './components/Scribe';
import React, { useState } from 'react'

import { Redirect } from 'react-router-dom'; 


const App = () => {
  // In your App component
const [isAuthenticated, setIsAuthenticated] = useState(
  localStorage.getItem('isAuthenticated') === 'true'
);

  
  return (
   <>
   <Router>
   <div>
    
    <Routes>
    <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated} />} exact/>
      
      <Route path='/Signup' element={<SignUp/>} exact/>
      <Route path='/Main' element={<Landingpage/>} exact/>
      <Route path='/Profile' element={<Profile/>} exact/>
      
      <Route path="/Scribe" element={<Scribe/> }/>
        
    </Routes>
    </div>
   </Router>
   </>
  )
}

export default App
