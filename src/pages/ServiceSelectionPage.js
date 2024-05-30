// src/pages/ServiceSelectionPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceSelectionPage = () => {
  const { category } = useParams();

  // Aquí puedes utilizar 'category' para mostrar servicios relacionados
  // Por ejemplo, cargar datos de servicios basados en la categoría seleccionada

  return (
    <div className="page-container">
      <h2>Seleccione un servicio para la categoría: {category}</h2>
      {/* Componente o lógica para mostrar y seleccionar servicios */}
    </div>
  );
};

export default ServiceSelectionPage;
