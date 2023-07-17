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
import Chat from './components/Chat'
import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Context } from './context/userContext/Context';

import './App.css'

function App() {
  const { user } = useContext(Context);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Post' element={user?<Post />:<Home/>} /> 
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/Login' element={user?<Login />:<Signup/>} />
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