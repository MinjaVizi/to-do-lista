import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#b2d8d8', // Svijetloplava boja (možete promijeniti vrijednost prema želji)
    height: '60px', // Visina navigacijske trake (prilagodite prema potrebi)
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Dodajte ostale stilove prema potrebi (npr. font-size, font-family, itd.)
  };

  return (
    <div style={navbarStyle}>
      {/* Dodajte sadržaj navigacijske trake ovdje */}
      <a href='/'className="navbar-brand">Pocetna</a>


      
    </div>
  );
}

export default Navbar;

