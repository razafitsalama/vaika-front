// AnnoncesFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import '../css/AnnoncesFetcher.css';
import SearchBar from './SearchBar';

const AnnoncesFetcher = () => {
  const [annonces, setAnnonces] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  const fetchAnnonces = async () => {
    const credentials = {
      username: 'nyx',
      password: 'nyx',
    };

    try {
      const response = await axios.get('https://vaika-safidy-nyx.up.railway.app/annonces', {
        auth: credentials,
      });

      setAnnonces(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces', error);
    }
  };

  useEffect(() => {
    fetchAnnonces();
  }, []);

  return (
    <div className="annonces-fetcher">

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="liste-annonces">
        <h2>Liste des Annonces</h2>
        <h4>(si vous voulez connecter les propriétaires,  cliquez sur les boutons et un login s'affichera tout en bas de la page)</h4>
        <ul>
          {annonces.map((annonce) => (
            <li key={annonce.idAnnonce}>
              <strong><h3>{annonce.nom}</h3></strong>
              <br/>
              <img src={require(`../images/${annonce.images}`)} width="300px" height="200px"/>
              <br/>
              <strong>Marque : </strong>{annonce.marque.marque} - {' '}
              <br/>
              <strong>Descriptions : </strong>{annonce.descriptions} - {' '}
              <br/>
              <strong>Moteur : </strong>{annonce.moteur.moteur}L -
              <br/>
              <strong>Couleur : </strong>{annonce.couleur} - {' '}
              <br/>
              <strong>Energie : </strong>{annonce.energie.energie} - {' '}
              <br/>
              <strong>Boîte de vitesse : </strong>{annonce.boiteVitesse.vitesse} - {' '}
              <br/>
              <strong>Couleur : </strong>{annonce.couleur} - {' '}
              <br/>
              <strong>Prix : </strong>{annonce.prix} $- {' '}
              <br/>
              <strong>Propriétaire : </strong>{annonce.utilisateur.prenom} {' '} {annonce.utilisateur.nom} -
              <br/>
              <strong>Date de sortie : </strong>{annonce.anneeSortie} - {' '}
              <br/>
              <strong>Publier le : </strong>{annonce.datePublication} - {' '}
              <br/>

              <button onClick={() => setShowLogin(true)}>Contactez le propriétaire</button>

            </li>
          ))}
        </ul>
      </div>

      <div className="login-page">
        {showLogin && <Login />}
      </div>
      
    </div>
  );
};

export default AnnoncesFetcher;
