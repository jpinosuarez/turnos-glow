// src/components/PaymentSummary.js
import React from 'react';

const PaymentSummary = ({ service, professional, date, time }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="payment-summary">
      <h3>Resumen del Turno</h3>
      <p>Servicio: {service}</p>
      <p>Profesional: {professional}</p>
      <p>Fecha: {formattedDate}</p>
      <p>Hora: {time}</p>
    </div>
  );
};

export default PaymentSummary;

