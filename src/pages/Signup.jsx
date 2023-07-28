import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
 import { yupResolver } from '@hookform/resolvers/yup';
 import { apidomain } from '../utils/domain';
import Axios from 'axios'
import './Signup.css'
function Signup() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
      Username: yup.string().required("username is required"),
      Name: yup.string().required("name is required"),
      Age: yup.string().required("Age is required"),
      Gender: yup.string().required("gender is required"),
      Location: yup.string().required("location is required"),
      Date: yup.string().required("date is required"),
      Bio: yup.string().required("bio is required"),
      Password: yup.string().required("password is required").min(4, "password is too short"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      // console.log('hello world')
      Axios.post(`${apidomain}/auth/register`, data)
          .then((response) => {
              console.log(response);
              response.data.message && alert (response.data.message);
              console.log('success', response.data.message);
              navigate("/Login");
          })
          .catch((response) => {
              console.log(response)
              // console.log(response.data.response);
              alert("failed",response.data.response)
              
          });
  }
  return (
    <div className='mainform4' >
      <form className="form4" onSubmit = { handleSubmit(onSubmit) } >
        <div className='formitems4'>
        <h2 style={{ textDecoration: "underline",color:'black' }}> Sign - Up </h2>
        <label > Username: </label>
        <input type="text" {...register("Username")} placeholder="username" required />
        <p>{errors.Username?.message}</p>
        <label> Name: </label>
        <input type="text" {...register("Name")} placeholder="yourname" required />
        <p>{errors.Name?.message}</p>
        <label > Age: </label>
        <input type="text" {...register("Age")} placeholder="age" />
        <p>{errors.Age?.message}</p>
        <label> Gender: </label>
        <input type="text" {...register("Gender")} placeholder="gender" />
        <p>{errors.Gender?.message}</p>
        <label > Location: </label>
        <input type="text" {...register("Location")} placeholder="location" required />
        <p>{errors.Location?.message}</p>
        <label > Date: </label>
        <input type="date" {...register("Date")} placeholder="date" required />
        <p>{errors.Date?.message}</p>
        <label > Bio: </label>
        <input type="text" {...register("Bio")} placeholder="bio"  />
        <p>{errors.Bio?.message}</p>
        <label > Password: </label>
        <input type="password" {...register("Password")} placeholder="Password" required />
        <p>{errors.Password?.message}</p>
        <label > ConfirmPassword: </label>
        <input type="password" {...register("confirmPassword")} placeholder="ConfirmPassword" required />
        <p>{errors.ConfirmPassword?.message}</p>
        <input type="Submit" value="Register" className='button2' /> 
        </div>
      </form >
    </div>
  )
}

export default Signup