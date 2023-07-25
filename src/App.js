import React, { useState } from 'react';
import './App.css';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import Zadaci from './komponente/Zadaci';
import KreirajZadatak from './komponente/KreirajZadatak'; // Dodajemo KreirajZadatak komponentu
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="App">
        <header>        
        </header>

        <body>
          <nav>
            <Navbar />
          </nav>

          <Routes>
            <Route exact path="/" element={<Pocetna />} />
            <Route path="/to-do-lista" element={<Zadaci tasks={tasks} />} />
            <Route path="/kreiraj-zadatak" element={<KreirajZadatak addTask={addTask} />} />
          </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
