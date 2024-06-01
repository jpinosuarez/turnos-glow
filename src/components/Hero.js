// src/components/Hero.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero.jpg'; // Importación de la imagen

const Hero = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/categorias');
  };

  return (
    <div className="hero">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>Glow Studio</h1>
        <button onClick={handleReservationClick} className="cta-button">
          Reservar un Turno
        </button>
      </div>
    </div>
  );
};

export default Hero;
