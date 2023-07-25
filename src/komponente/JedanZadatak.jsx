import React from 'react';

const JedanZadatak = ({ task, handleDelete }) => {
  const { id, text, opis, rok, completed } = task;

  return (
    <div
      style={{
        backgroundColor: completed ? '#e5e5e5' : '#f2f2f2',
        borderRadius: '4px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '2em',
      }}
    >
      <div style={{ flexGrow: 1, marginRight: '1em' }}>
        <h3 style={{ marginBottom: '0.5em' }}>{text}</h3>
        <p>{opis}</p>
      </div>
      <div style={{ flexGrow: 1, marginRight: '1em' }}>
        <p>Rok za obavljanje: {rok}</p>
        <button
          onClick={() => handleDelete(id)}
          style={{
            padding: '0.5em 1em',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#FF0000',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default JedanZadatak;
