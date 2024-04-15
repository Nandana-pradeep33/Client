import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Landingpage from './components/Landingpage';
import Profile from './components/Profile';
import Scribe from './components/Scribe';





const App = () => {
  return (
   <>
   <Router>
   <div>
    
    <Routes>
     
      <Route path='/' element={<Login/>} exact/>
      
      <Route path='/Signup' element={<SignUp/>} exact/>
      <Route path='/Main' element={<Landingpage/>} exact/>
      <Route path='/Profile' element={<Profile/>} exact/>
      <Route path='/Scribe' element={<Scribe/>} exact/>
    
    </Routes>
    </div>
   </Router>
   </>
  )
}

export default App
