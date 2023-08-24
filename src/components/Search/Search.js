import React, { useState } from 'react';
import '../Search/Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGoogleButtonClick = () => {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="button-container">
        <button className="google-button" onClick={handleGoogleButtonClick}>
          Google
        </button>
        <div className="zauba-button" onClick={() => searchZauba(searchQuery)}>
          Zauba
        </div>
      </div>
    </div>
  );
}

function searchZauba(query) {
  const zaubaSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(zaubaSearchURL, '_blank');
}

export default Search;
