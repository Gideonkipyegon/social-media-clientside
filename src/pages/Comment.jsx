import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './Comment.css'; // Import the CSS file for styling

const Comment = () => {
  const [comment, setComment] = useState('');

  // Replace this with your Firebase configuration
  const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    // Add more config properties as needed
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a reference to the "comments" collection in Firestore
    const db = firebase.firestore();
    db.collection('comments')
      .add({
        text: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('Comment added to database!');
        setComment(''); // Clear the input field after successful submission
      })
      .catch((error) => {
        console.error('Error adding comment to database:', error);
      });
  };

  return (
    <div className="comment-container">
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          value={comment}
          onChange={handleInputChange}
          placeholder="Write your comment here..."
        />
        <button type="submit" className="comment-submit-button">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
