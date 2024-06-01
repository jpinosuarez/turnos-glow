/*import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, service, professional, date, time } = location.state || {};

  useEffect(() => {
    if (!category || !service || !professional || !date || !time) {
      console.error('Error: Datos del turno no encontrados');
      navigate('/'); // Redirige a la página de inicio si faltan datos
    }
  }, [navigate, category, service, professional, date, time]);

  return (
    <div className="page-container">
      <h2>Confirmación del Pago</h2>
    </div>
  );
};

export default PaymentConfirmationPage;*/

// src/pages/PaymentConfirmationPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSummary from '../components/PaymentSummary';

const PaymentConfirmationPage = () => {
  const { serviceId, professionalId, date, time } = useParams();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate(`/success/${serviceId}/${professionalId}/${date}/${time}`);
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <h2>Confirmación de Pago</h2>
        <PaymentSummary 
          service={serviceId}
          professional={professionalId}
          date={date}
          time={time}
        />
        <button onClick={handlePayment}>Pagar Seña</button>
      </div>
      <Footer />
    </>
  );
};

export default PaymentConfirmationPage;

