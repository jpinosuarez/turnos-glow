// src/components/ProfessionalSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfessionalSelection.css';
import professional1Image from '../assets/images/professional-example.jpg';
import professional2Image from '../assets/images/professional-example.jpg';
import professional3Image from '../assets/images/professional-example.jpg';
import professional4Image from '../assets/images/professional-example.jpg';
import professional5Image from '../assets/images/professional-example.jpg';
import professional6Image from '../assets/images/professional-example.jpg';

const professionals = [
  { id: 1, name: 'Profesional 1', image: professional1Image },
  { id: 2, name: 'Profesional 2', image: professional2Image },
  { id: 3, name: 'Profesional 3', image: professional3Image },
  { id: 4, name: 'Profesional 4', image: professional4Image },
  { id: 5, name: 'Profesional 5', image: professional5Image },
  { id: 6, name: 'Profesional 6', image: professional6Image },
];

const ProfessionalSelection = ({ serviceId }) => {
  const navigate = useNavigate();

  const handleProfessionalSelect = (professional) => {
    // Redirigir a la página de selección de fecha y hora con los parámetros necesarios
    navigate(`/fecha-hora/${serviceId}/${professional.id}`);
  };

  return (
    <div className="professional-selection">
      <h3>Seleccione un profesional:</h3>
      <div className="professional-cards">
        {professionals.map((professional, index) => (
          <div key={index} className="professional-card" onClick={() => handleProfessionalSelect(professional)}>
            <img src={professional.image} alt={professional.name} className="professional-image" />
            <div className="professional-info">
              <h4>{professional.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSelection;
