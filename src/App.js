import React, { useState } from 'react';
import './App.css';
import './light-mode.css'; // Import the light mode styles
import './dark-mode.css'; // Import the dark mode styles
import TransactionIDs from './components/Transaction/TransactionIDs';
import ZaubaSearch from './components/Search/ZaubaSearch';
import CopyButtons from './components/CopyButton/CopyButtons';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode'); // Remove dark mode class from body
    } else {
      document.body.classList.add('dark-mode'); // Add dark mode class to body
    }
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <TransactionIDs />
      <ZaubaSearch />
      <CopyButtons />
    </div>
  );
};

export default App;
