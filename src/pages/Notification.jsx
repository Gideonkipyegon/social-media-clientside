import React, { useState } from 'react';
import './Notification.css'; // Replace with your CSS file path

const Notification = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [followers, setFollowers] = useState(0);

  // Function to increment the likes count and show notification
  const handleNewLike = () => {
    setLikes(likes + 1);
    showNotification('New Like!');
  };

  // Function to increment the comments count and show notification
  const handleNewComment = () => {
    setComments(comments + 1);
    showNotification('New Comment!');
  };

  // Function to increment the followers count and show notification
  const handleNewFollower = () => {
    setFollowers(followers + 1);
    showNotification('New Follower!');
  };

  // Function to display the notification
  const showNotification = (message) => {
   alert(message);
  };

  return (
    <div className="notification-container">
      <button className="notification-button" onClick={handleNewLike}>
        Like
      </button>
      <button className="notification-button" onClick={handleNewComment}>
        Comment
      </button>
      <button className="notification-button" onClick={handleNewFollower}>
        Follow
      </button>

      <div className="notification-count">Likes: {likes}</div>
      <div className="notification-count">Comments: {comments}</div>
      <div className="notification-count">Followers: {followers}</div>
    </div>
  );
};

export default Notification;
