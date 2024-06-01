// src/pages/ProfessionalSelectionPage.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfessionalSelection from '../components/ProfessionalSelection';

const ProfessionalSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, service } = location.state || {};

  useEffect(() => {
    if (!category || !service) {
      console.error('Error: Categoría o Servicio no encontrados');
      navigate('/categorias');
    }
  }, [category, service, navigate]);

  const handleProfessionalSelect = (professional) => {
    navigate(`/fecha-hora/${service.id}/${professional.id}`, { state: { category, service, professional } });
  };

  return (
    <div className="page-container">
      <ProfessionalSelection serviceId={service.id} onProfessionalSelect={handleProfessionalSelect} />
    </div>
  );
};

export default ProfessionalSelectionPage;


