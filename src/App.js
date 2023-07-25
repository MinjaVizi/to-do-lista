import React from 'react';
import './App.css';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';

function App() {
  return (
    <div className="App">
      <header>
        {/* Sadržaj za header ako je potrebno */}
      </header>

      <body>
        <nav>
          <Navbar ></Navbar>
            <Pocetna /> {/* Ovdje se ubacuje komponenta Pocetna unutar Navbar */}
          
        </nav>
      </body>
    </div>
  );
}

export default App;


