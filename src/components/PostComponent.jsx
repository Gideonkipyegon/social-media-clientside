import React, { useState } from 'react';
import './postcomponent.css'
const PostComponent = () => {
  const [postText, setPostText] = useState('');
  const [likes, setLikes] = useState(0);
  const [isShared, setIsShared] = useState(false);

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleShareClick = () => {
    setIsShared(true);
  };
  const handlePostClick = () => {
    setIsShared(true);
  };

  return (
    <div className="PostComponent">
      <textarea value={postText} onChange={handlePostChange} />
      <br />
      <div className='btn'>
      <button onClick={handleLikeClick}>Like ({likes})</button>
      <button onClick={handleShareClick}>Share</button>
      <button onClick={handlePostClick}>Post</button>
      </div>
      <br />
      {isShared && <p>Post Shared!</p>}
    </div>
  );
};

export default PostComponent;
