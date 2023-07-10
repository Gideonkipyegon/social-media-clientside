import React, { useState } from 'react';

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

  return (
    <div>
      <textarea value={postText} onChange={handlePostChange} />
      <br />
      <button onClick={handleLikeClick}>Like ({likes})</button>
      <button onClick={handleShareClick}>Share</button>
      <br />
      {isShared && <p>Post Shared!</p>}
    </div>
  );
};

export default PostComponent;
