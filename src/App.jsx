import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Notification from './pages/Notification'
import Post from './pages/Post'
import Signup from './pages/Signup'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Post' element={<Post />} /> 
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/Notification' element={<Notification />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App