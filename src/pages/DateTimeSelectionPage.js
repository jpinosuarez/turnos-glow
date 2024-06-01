/*import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DateSelection from '../components/DateSelection';
import TimeSelection from '../components/TimeSelection';

const DateTimeSelectionPage = () => {
  const { professionalId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    // Verifica que haya una fecha seleccionada antes de navegar
    if (selectedDate) {
      // Navega a la página de confirmación de pago con los datos del turno
      navigate(`/confirmacion/${professionalId}/pago`, {
        state: {
          service: 'Nombre del Servicio', // Reemplaza con el nombre del servicio seleccionado
          professional: 'Nombre del Profesional', // Reemplaza con el nombre del profesional seleccionado
          date: selectedDate.toDateString(),
          time: time,
        },
      });
    } else {
      console.error('Error: No se ha seleccionado una fecha válida.');
    }
  };

  return (
    <div className="page-container">
      <h2>Seleccionar Fecha y Hora</h2>
      <DateSelection professionalId={professionalId} onDateSelect={handleDateSelect} />
      {selectedDate && (
        <TimeSelection professionalId={professionalId} selectedDate={selectedDate} onTimeSelect={handleTimeSelect} />
      )}
    </div>
  );
};

export default DateTimeSelectionPage;*/

// src/pages/DateTimeSelectionPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DateSelection from '../components/DateSelection';
import TimeSelection from '../components/TimeSelection';

const DateTimeSelectionPage = () => {
  const { serviceId, professionalId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    navigate(`/confirmacion/${serviceId}/${professionalId}/${selectedDate}/${time}`);
  };

  return (
    <>      
      <div className="page-container">
        <h2>Selección de Fecha y Hora</h2>
        {!selectedDate ? (
          <DateSelection onDateSelect={handleDateSelect} />
        ) : (
          <TimeSelection selectedDate={selectedDate} onTimeSelect={handleTimeSelect} />
        )}
      </div>      
    </>
  );
};

export default DateTimeSelectionPage;
