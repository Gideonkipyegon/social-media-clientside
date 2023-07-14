import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="login" >
      <form className='form3'  >
        <div className="login-item" >
          <h2 style={{ textDecoration: "underline",color:'green' }} > Login Page </h2>
          <label > UserName: </label>
          <input type="text" placeholder="username" required />
          <label> Password: </label>
          <input type="password" placeholder="Password" required />
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  )
}

export default Login