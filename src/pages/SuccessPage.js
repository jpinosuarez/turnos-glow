// src/pages/SuccessPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import PaymentSummary from '../components/PaymentSummary';

const SuccessPage = () => {
  const { serviceId, professionalId, date, time } = useParams();

  return (
    <>      
      <div className="page-container">
        <h2>¡Turno confirmado!</h2>
        <PaymentSummary 
          service={serviceId}
          professional={professionalId}
          date={date}
          time={time}
        />
      </div>      
    </>
  );
};

export default SuccessPage;
