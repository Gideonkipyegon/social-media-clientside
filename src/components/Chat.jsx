import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chatbox from './Chatbox';
import './chat.css';

const socket = io('http://localhost:5173/'); // Replace with your server URL

const Chat = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //Listen for chat messages from the server
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const joinRoom = () => {
    if (name !== '' && roomId !== '') {
      socket.emit('join_room', roomId); // Join the room
      setShowChat(true); // Show the chat
      
    }else{
      alert("please enter name and room ID")
    }
    // Emit a "join room" event to the server
    // socket.emit('join room', roomId);
  };

  const sendMessage = () => {
    // Send the message to the server
    socket.emit('chat message', { roomId, message });

    //Clear the input field
    setMessage('');
  };

  return (
    <div className="chat-container">
      {!showChat ? (
      <div className="chat-input-group">
      <h1 className="chat-header">Join Live Chat</h1>
      <input
          type="text"
          // value={roomId}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
        />
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room ID"
        />
        <button onClick={joinRoom}>JoinRoom</button>
      </div>):(<Chatbox socket={socket} name={name}roomId={roomId} />
      )}
      {/* <ul className="chat-messages">
        {messages.map((msg, index) => (
          <li key={index} className="chat-message">{msg}</li>
        ))}
      </ul> */}
      {/* <div className="chat-input-group">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div> */}
    </div>
  );
};

export default Chat;
