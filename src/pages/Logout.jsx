import React from 'react'
import { Link } from 'react-router-dom'
function Logout() {
  return (
    <div className='logout'>
      <h1>Logout</h1>
      <Link to='/'>Logout</Link>
      
  </div>
  )
}

export default Logout