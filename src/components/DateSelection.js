// src/components/DateSelection.js
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

