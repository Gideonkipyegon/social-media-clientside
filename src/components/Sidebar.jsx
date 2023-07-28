import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    // You would typically make an API call here to update the follow status on the server
    // For simplicity, we'll just toggle the state locally.
    setIsFollowed(!isFollowed);
  };

  return (
    <div className="user-profile">
      <h2>{user.Username}</h2>
      <p>name: {user.name}</p>
      {/* <p>Email: {user.email}</p> */}
      <p>Location: {user.location}</p>
      <button onClick={handleFollow}>
        {isFollowed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserProfile;
