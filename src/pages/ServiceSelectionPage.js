// src/pages/ServiceSelectionPage.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ServiceSelection from '../components/ServiceSelection';

const ServiceSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {};

  useEffect(() => {
    if (!category) {
      console.error('Error: Categoría no encontrada');
      navigate('/categorias');
    }
  }, [category, navigate]);

  const handleServiceSelect = (service) => {
    navigate(`/profesionales/${service.id}`, { state: { category, service } });
  };

  const handleGoBack = () => {
    navigate(-1); // Navegar hacia atrás en el historial del navegador
  };

  return (
    <div className="page-container">
      <ServiceSelection category={category} onServiceSelect={handleServiceSelect} />
      <button onClick={handleGoBack}>Volver</button>
    </div>
  );
};

export default ServiceSelectionPage;


