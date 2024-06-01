// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Importa los estilos locales
import logo from '../assets/images/logo.png'; // Importa tu logo desde assets

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/servicios">Servicios</Link></li>
          <li className="nav-item"><Link to="/productos">Productos</Link></li>
          <li className="nav-item"><Link to="/mi-cuenta">Mi Cuenta</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
