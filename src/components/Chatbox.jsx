import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './chatbox.css';

function Chatbox({ socket, room, name }) {
  const [message, setMessage] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: name,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
      };
      await socket.emit('send_message', messageData);
      setMessage((list) => [...list, messageData]);
      setCurrentMessage('');
    } else {
      alert('Say something, please.');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessage((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className='chatbox'>
      <div className='chatbox-header'>
        <p>Let's Chat</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container1'>
          {message.map((messageContent, index) => (
            <div
              className='message'
              key={index}
              id={name === messageContent.author ? 'you' : 'other'}
            >
            <div className='message-content'>
                <p>{messageContent.message}</p>
              </div>
              <div className='message-meta'>
                <p id='time'>{messageContent.time}</p>
                <p id='author'>{messageContent.author}</p>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className='footer1'>
        <input
          type='text'
          placeholder='Say something...'
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chatbox;