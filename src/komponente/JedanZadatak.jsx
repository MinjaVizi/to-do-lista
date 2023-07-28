import React from 'react';

const JedanZadatak = ({ task, handleToggleCompleted, showCompleted }) => {
  const { id, text, opis, rok, completed } = task;

  const handleToggle = () => {
    handleToggleCompleted(id);
  };

  return (
    <div
      className={`task-item ${completed ? 'completed' : ''}`}
      style={{
        borderRadius: '10px',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2em',
      }}
    >
      <h3 style={{ marginBottom: '0.5em', textDecoration: completed && showCompleted ? 'line-through' : 'none' }}>
        {text}
      </h3>
      <p style={{ textDecoration: completed && showCompleted ? 'line-through' : 'none' }}>{opis}</p>
      <p>Rok za obavljanje: {rok}</p>
      {showCompleted && ( // Show the button only when "Završeni zadaci" or "Svi zadaci" filter is selected
        <button onClick={handleToggle} className="task-button done">
          Završeno
        </button>
      )}
    </div>
  );
};

export default JedanZadatak;
