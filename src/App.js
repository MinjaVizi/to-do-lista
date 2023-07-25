import React from 'react';
import './App.css';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import Zadaci from './komponente/Zadaci';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>        </header>


        <body>
          <nav>
            <Navbar />
          </nav>

          <Routes>

            <Route exact path="/" component={Pocetna} />

            <Route path="/zadaci" component={Zadaci} />
            </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
