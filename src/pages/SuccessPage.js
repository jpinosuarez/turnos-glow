// src/pages/SuccessPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentSummary from '../components/PaymentSummary';

const SuccessPage = () => {
  const { serviceId, professionalId, date, time } = useParams();

  return (
    <>
      <Header />
      <div className="page-container">
        <h2>¡Turno confirmado!</h2>
        <PaymentSummary 
          service={serviceId}
          professional={professionalId}
          date={date}
          time={time}
        />
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
