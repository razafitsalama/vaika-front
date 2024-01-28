
import React, { useState } from 'react';
import '../css/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Rechercher des annonces..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
