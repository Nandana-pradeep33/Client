import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} exact/>
      <Route path='/Signup' element={<SignUp/>} exact/>
    </Routes>
   </Router>
   </>
  )
}

export default App
