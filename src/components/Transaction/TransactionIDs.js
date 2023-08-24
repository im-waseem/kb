import React, { useState } from 'react';
import './TransactionIDs.css';

const TransactionIDs = () => {
  const [searchInput, setSearchInput] = useState('');
  const [loanID, setLoanID] = useState('');
  const [copiedInput, setCopiedInput] = useState('');
  const [totalWordCount, setTotalWordCount] = useState('');

  const handleSearchChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
  };

  const handleLoanIDChange = (event) => {
    const input = event.target.value;
    setLoanID(input);
  };

  const handleLoanIDCopyClick = () => {
    const wordCount = countWords(searchInput);
    setTotalWordCount(wordCount);
    setCopiedInput(`${loanID}:${wordCount}:${addCharacterSymbols(searchInput)}`);
  };

  const handleTransactionCopyClick = () => {
    const wordCount = countWords(searchInput);
    setTotalWordCount(wordCount);
    setCopiedInput(`${wordCount}:${addCharacterSymbols(searchInput)}`);
  };

  const handleResetClick = () => {
    setSearchInput('');
    setLoanID('');
    setCopiedInput('');
    setTotalWordCount('');
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const addCharacterSymbols = (text) => {
    const words = text.trim().split(/\s+/);
    return words.join(',');
  };

  return (
    <div className="transaction-ids-container">
      <div>
        <label>
          Loan ID:
          <input type="text" value={loanID} onChange={handleLoanIDChange} />
        </label>
        <button className="copy-btn" onClick={handleLoanIDCopyClick} disabled={!searchInput}>
          Loan ID Copy
        </button>
        <button className="reset-btn" onClick={handleResetClick}>
          Reset
        </button>
      </div>

      <div>
        <label>
          Input Transaction ID's:
          <input type="text" value={searchInput} onChange={handleSearchChange} />
        </label>
      </div>

      <button className="copy-btn" onClick={handleTransactionCopyClick} disabled={!searchInput}>
        Transaction Copy
      </button>
      <button className="reset-btn" onClick={handleResetClick}>
          Reset
        </button>

      {copiedInput && (
        <div>
          <p>Count: {totalWordCount}</p>
          <p>Copied Input:</p>
          <input type="text" value={copiedInput} readOnly />
        </div>
      )}
    </div>
  );
};

export default TransactionIDs;
