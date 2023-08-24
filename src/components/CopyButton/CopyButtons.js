import React, { useState } from 'react';
import './CopyButton.css'; // Import your CSS file for styling

const CopyButton = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  };

  return (
   <div className='container'> 
    <h1>copy-comments</h1>
      <div className="button-row">
        
      <button className="button" onClick={() => handleCopy('QID75-Latest 3-months statement not available, Need Recent 3/6 Months Bank Acc statement Hence Given Preset.')}> QID-75 </button>
      <button className="button" onClick={() => handleCopy('Need valid id card or pay slips to confirm salary')}> Docs-reupload</button>
      <button className="button" onClick={() => handleCopy('salary not found -- ')}> not salary</button>
      <button className="button" onClick={() => handleCopy('Need to confirm salary -- ')}> salary-hold</button>
      <button className="button" onClick={() => handleCopy('Need till date bank statement -- Hence given p-reset ')}> 1m p-reset </button>


      {/* Other buttons... */}
    </div>
   </div>
  );
};

export default CopyButton;
