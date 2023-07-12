import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className='mainform' >
      <form className="form"  >
        <legend > Sign - Up </legend>
        <label > Username: </label>
        <input type="text" placeholder="username" required />
        <label> Name: </label>
        <input type="text" placeholder="yourname" required />
        <label > Age: </label>
        <input type="text" placeholder="age" />
        <label> Gender: </label>
        <input type="text" placeholder="gender" />
        <label > Location: </label>
        <input type="text" placeholder="location" required />
        <label > Date: </label>
        <input type="text" placeholder="date" required />
        <label > Bio: </label>
        <input type="text" placeholder="bio"  />
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