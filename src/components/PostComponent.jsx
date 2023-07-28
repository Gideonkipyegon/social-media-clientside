// export default PostComponent;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { apidomain } from '../utils/domain';
import { useContext } from 'react';
import { Context } from '../context/userContext/Context';
import './postcomponent.css';

const schema = yup.object().shape({
  Content: yup.string().required('Content is required'),
});

const PostComponent = () => {
  const { user } = useContext(Context);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [shareCount, setShareCount] = useState(0);

  // New state for file (photo or video) upload
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('Content', data.Content);
    formData.append('file', file); // Append the selected file to the formData
    formData.append('name', user.name); // Add the user's name to the formData
    formData.append('profilePicture', user.profilePicture); // Add the user's profile picture URL to the formData

    Axios.post(`${apidomain}/Post`, formData, { headers: { 'Authorization': `${user.token}` } })
      .then((response) => {
        response.data.message && alert(response.data.message);
        reset();
        setFile(null); // Clear the file state after submission
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleShareClick = () => {
    setShareCount(shareCount + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentText = e.target.elements.comment.value;
    setComments([...comments, commentText]);
    e.target.elements.comment.value = '';
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <h1>What's on your mind????</h1>
        <textarea {...register('Content')} name="Content" id="Content" />
        {errors.Content && <p>{errors.Content.message}</p>}
        {/* New input for file (photo or video) upload */}
        <input type="file" onChange={handleFileChange} />

        <input className="submitBtn" type="submit" value="Post" />
      </form>

      {/* Display the post */}
      {/* <div className="post1"> */}
        <p>{/* Display the post content here */}</p>
        {/* <p style={{display:'flex',justifyContent:'center',alignContent:'end',alignItems:'end',margintop:'20px'}}> {user.name}</p> {/* Display the user's name */}
        {/* <img src={user.profilePicture} alt="Profile"  style={{display:'flex',justifyContent:'center',alignContent:'end',alignItems:'end',margintop:'20px'}}/> {/* Display the user's profile picture */}
        {/* <button onClick={handleLikeClick}>Like ({likes})</button>

        <div className='comments'>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>  */}
          {/* <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              placeholder="Add a comment..."
              name="comment"
            style={{display:'flex',justifyContent:'center',alignContent:'start',alignItems:'start'}}/>
            <button type="submit">Submit Comment</button>
          </form> */}
        {/* </div> */}

        {/* <button onClick={handleShareClick}>Share</button>
        <span  style={{display:'flex',marginleft:'70px'}}>{shareCount} Shares</span>
      </div> */}
    </div>
  );
};

export default PostComponent;
