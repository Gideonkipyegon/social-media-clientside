
import React, { useContext } from 'react';
import { Context } from '../context/userContext/Context';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apidomain } from '../utils/domain';
import './Login.css';

function Login() {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Username: yup.string().required('Username is required'),
    Password: yup.string().required('Password is required').min(4, 'Password is too short'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => { 
    Axios.post(`${apidomain}/auth/login`, data)
   .then(({data}) => {
    if(data.token){
        dispatch({type:'LOGIN_SUCCESS', payload:data})
        alert("login successfull")
        navigate("/Post");
    }
   
})
.catch((response) => {
    console.log(response)
    alert("wrong credentials")
    
});}
  

  return (
    <div className="login">
      <form className="form3" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-item">
          <h2 style={{ textDecoration: 'underline', color: 'black' }}>Login Page</h2>
          <label>UserName:</label>
          <input type="text" {...register('Username')} placeholder="Username" required />
          <p>{errors.Username?.message}</p>
          <label>Password:</label>
          <input type="password" {...register('Password')} placeholder="Password" required />
          <p>{errors.Password?.message}</p>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
