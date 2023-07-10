import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className='mainform' >
      <form className="form"  >
        <legend > Sign - Up </legend>
        <label > Full Name: </label>
        <input type="text" placeholder="fullName" required />
        <label > Email: </label>
        <input type="text" placeholder="email" />
        <label> Address: </label>
        <input type="text" placeholder="address" />
        <label > Phone Number: </label>
        <input type="text" placeholder="phonenumber" required />
        <label > Password: </label>
        <input type="password" placeholder="Password" required />
        <label > ConfirmPassword: </label>
        <input type="password" placeholder="ConfirmPassword" required />
        <input type="Submit" value="Submit" /> 
      </form >
    </div>
  )
}

export default Signup