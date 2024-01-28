// Message.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Message.css';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const credentials = {
    username: 'nyx',
    password: 'nyx',
  };

  useEffect(() => {
    axios.get('https://vaika-safidy-nyx.up.railway.app/messages', { auth: credentials })
      .then(response => setMessages(response.data))
      .catch(error => console.error('Erreur lors de la récupération des messages', error));
  }, []);

  const handleSendMessage = () => {
    axios.post('https://vaika-safidy-nyx.up.railway.app/messages', { params: { newMessage: newMessage }, auth: credentials })
      .then(response => {
        setMessages([...messages, response.data]);
        setNewMessage('');
      })
      .catch(error => console.error('Erreur lors de l\'envoi du message', error));
  };

  return (
    <div className="message">
      <h2>Boîte de réception</h2>
      <div>
        {messages.map(message => (
          <div key={message.id} className="message-item">
            <strong>{message.sender}:</strong> {message.content}
          </div>
        ))}
      </div>
      <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};

export default Message;
