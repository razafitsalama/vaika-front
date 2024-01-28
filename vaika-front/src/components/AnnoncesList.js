import React, { useEffect, useState } from 'react';

const AnnoncesList = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    // Effectuer une requête GET pour obtenir la liste des annonces
    fetch("http://localhost:8080/annonces", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('La réponse réseau n\'était pas correcte');
        }
        return response.json();
      })
      .then(data => {
        setAnnonces(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des annonces', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des annonces</h1>
      {annonces && annonces.length > 0 ? (
        <ul>
          {annonces.map(annonce => (
            <li key={annonce.idAnnonces}>
              <p>Nom: {annonce.nom}</p>
              <p>Description: {annonce.descriptions}</p>
              {/* Ajoutez d'autres propriétés ici selon votre structure JSON */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune annonce disponible</p>
      )}
    </div>
  );
};

export default AnnoncesList;
