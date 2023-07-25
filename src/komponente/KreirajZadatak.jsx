import React, { useState } from 'react';

const KreirajZadatak = () => {
  const [naslov, setNaslov] = useState('');
  const [opis, setOpis] = useState('');
  const [rok, setRok] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete implementirati logiku za slanje zadatka na to-do listu
  };

  const handleCancel = () => {
    // Ovdje možete implementirati logiku za otkazivanje kreiranja zadatka i preusmjeravanje na drugu stranicu
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f2f2f2', /* Light gray background color */
    }}>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b2d8d8', /* Svijetloplava boja (možete promijeniti vrijednost prema želji) */
        padding: '1em',
        borderRadius: '8px',
      }}>
        <form style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} onSubmit={handleSubmit}>
          <div style={{ margin: '0.5em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="naslov">Naslov zadatka:</label>
            <input
              type="text"
              id="naslov"
              value={naslov}
              onChange={(e) => setNaslov(e.target.value)}
              style={{ 
                width: '300px',
                padding: '0.5em',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        
          <div style={{ margin: '0.5em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="opis">Opis zadatka:</label>
            <textarea
              id="opis"
              value={opis}
              onChange={(e) => setOpis(e.target.value)}
              style={{ 
                width: '300px',
                padding: '0.5em',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ margin: '0.5em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="rok">Rok za obavljanje:</label>
            <input
              type="date"
              id="rok"
              value={rok}
              onChange={(e) => setRok(e.target.value)}
              style={{ 
                width: '300px',
                padding: '0.5em',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ margin: '0.5em', marginTop: '2em', display: 'flex', gap: '2em' }}>
            <button 
              type="submit" 
              style={{ 
                padding: '0.5em 1em',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#007BFF',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Dodaj na to-do listu
            </button>
            <button 
              type="button" 
              onClick={handleCancel} 
              style={{ 
                padding: '0.5em 1em',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#007BFF',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Otkaži
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KreirajZadatak;

