// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';
import '../css/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      username: 'nyx',
      password: 'nyx',
    };

    axios.get(`https://vaika-safidy-nyx.up.railway.app/auth/login`, { params: { email: email, password: password }, auth: credentials })
      .then(response => {
        if (response.data) {
          console.log('Authentification réussie', response.data);
          onLogin(); // Appeler la fonction de connexion
        } else {
          console.error('Réponse du serveur sans champ "data"', response);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la connexion', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className="login">
      <h2>Connexion</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" onClick={() => setShowMessage(true)}>Se connecter</button>
      </form>
      {showMessage && <Message />}
    </div>
  );
};

export default Login;
