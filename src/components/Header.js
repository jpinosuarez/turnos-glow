// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Asegúrate de crear un archivo de estilos si es necesario

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Inicio</Link></li>
          <li className="nav-item"><Link to="/servicios">Servicios</Link></li>
          <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
