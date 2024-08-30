import React, { useState } from 'react';
import './App.css';
import IlanList from './components/IlanList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTriggered(true);
  };

  return (
    <div className="App">
      <h1>İş İlan Portalı</h1>
      <div className="header">
        <div className='arama_kutusu'>
          <input 
            type='text' 
            placeholder='İş İlanı Arayın' 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <button id='arama_butonu' onClick={handleSearchClick}>Ara</button>
        </div>
      </div>
      <IlanList searchTerm={searchTerm} searchTriggered={searchTriggered} />
    </div>
  );
}

export default App;
