// src/components/ServiceSelection.js
import React from 'react';
import '../styles/ServiceSelection.css';

const services = [
  { id: 1, name: 'Servicio 1', description: 'Descripción del servicio 1', price: '$50' },
  { id: 2, name: 'Servicio 2', description: 'Descripción del servicio 2', price: '$60' },
  { id: 3, name: 'Servicio 3', description: 'Descripción del servicio 3', price: '$70' },
  { id: 4, name: 'Servicio 4', description: 'Descripción del servicio 4', price: '$80' },
  { id: 5, name: 'Servicio 5', description: 'Descripción del servicio 5', price: '$90' },
  { id: 6, name: 'Servicio 6', description: 'Descripción del servicio 6', price: '$100' },
];

const ServiceSelection = ({ category, onServiceSelect }) => {
  const handleServiceClick = (service) => {
    onServiceSelect(service);
  };

  return (
    <div className="service-selection">
      <h3>Seleccione un servicio:</h3>
      <div className="service-cards">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <p>Precio: {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;

