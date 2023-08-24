import React, { useState, useEffect } from 'react';
import '../Search/Search.css';

const ZaubaSearch = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cse.google.com/cse.js?cx=03c30e73c0d3441cd';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGoogleButtonClick = () => {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchURL, '_blank');
  };

  const handleZaubaButtonClick = () => {
    const zaubaSearchURL = `https://www.google.com/search?q=site%3Azauba.com+${encodeURIComponent(searchQuery)}`;
    window.open(zaubaSearchURL, '_blank');
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter your Company"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="button-container">
        <button className="google-button" onClick={handleGoogleButtonClick}>
          Google
        </button>
        <div className="zauba-button" onClick={handleZaubaButtonClick}>
          Zauba
        </div>
      </div>
      <section>
        <div className="zauba_container">
          <div className="header_h3">
            <h1>Only Zauba search</h1>
          </div>
          <div className="gcse-searchbox-only"></div>
        </div>
      </section>
    </div>
  );
};

export default ZaubaSearch;
