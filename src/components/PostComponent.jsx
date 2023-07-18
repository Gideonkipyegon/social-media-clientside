import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
// import './addtodo.css';
import { apidomain } from '../utils/domain';
import { useContext } from "react";
import { Context } from "../context/userContext/Context";
import './postcomponent.css'
const PostComponent = () => {
  const { user } = useContext(Context)
    const schema = yup.object().shape({
        Content: yup.string().required("Content is required"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        Axios.post(`${apidomain}/Post`, data,
            { headers: { "Authorization": `${user.token}` } })
            .then((response) => {
                response.data.message && alert(response.data.message)
                reset();
            })
            .catch(({ response }) => {
                alert(response.data.error)
            });
    };
  // const [postText, setPostText] = useState('');
  // const [likes, setLikes] = useState(0);
  // const [isShared, setIsShared] = useState(false);
 

  // const handlePostChange = (event) => {
  //   setPostText(event.target.value);
  // };

  // const handleLikeClick = () => {
  //   setLikes(likes + 1);
  // };

  // const handleShareClick = () => {
  //   setIsShared(true);
  // };
 

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <h1 style={{border:'1px black solid',width:'90%'}}>What's on your mind????</h1>
      <textarea {...register("Content")} name="Content" id="Content" />
      <br />
      <p>{errors.Content?.message}</p>
      <input className="submitBtn" type="submit" value="Post" />
      {/* <div className='btn'>
      <button onClick={handleLikeClick}>Like ({likes})</button>
      <button onClick={handleShareClick}>Share</button>
      </div> */}
      {/* <button>Post</button> */}
      
      {/* <br />
      {isShared && <p>Post Shared!</p>} */}
      </form>
    </div>
  );
};

export default PostComponent;
