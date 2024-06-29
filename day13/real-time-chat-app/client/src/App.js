
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:8080'; // Update with your server endpoint

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    socket.emit('message', inputMessage);
    setInputMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={(event) => setInputMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;

