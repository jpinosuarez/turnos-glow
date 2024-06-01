/*
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/DateSelection.css';

const DateSelection = ({ onDateSelect }) => {
  const handleDateChange = (date) => {
    onDateSelect(date);
  };

  return (
    <div className="date-selection">
      <h3>Seleccione un día:</h3>
      <Calendar onChange={handleDateChange} />
    </div>
  );
};

export default DateSelection;
*/

// src/components/DateSelection.js

import React from 'react';
import Calendar from 'react-calendar'; // Asegúrate de haber instalado esta biblioteca
import 'react-calendar/dist/Calendar.css'; // Importa los estilos de la biblioteca
import '../styles/DateSelection.css'; // Importa los estilos locales

const DateSelection = ({ professionalId, onDateSelect }) => {
  const handleDateChange = (date) => {
    onDateSelect(date);
  };

  return (
    <div className="date-selection">
      <h3>Seleccione un día:</h3>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} />
      </div>
    </div>
  );
};

export default DateSelection;

