// src/components/TimeSelection.js
import React from 'react';
import '../styles/TimeSelection.css';

const timeslots = [
  { id: 1, time: '09:00 AM' },
  { id: 2, time: '10:00 AM' },
  { id: 3, time: '11:00 AM' },
  { id: 4, time: '12:00 PM' },
  { id: 5, time: '01:00 PM' },
  { id: 6, time: '02:00 PM' },
];

const TimeSelection = ({ selectedDate, onTimeSelect }) => {
  return (
    <div className="time-selection">
      <h3>Seleccione un horario para el día {selectedDate.toDateString()}:</h3>
      <div className="timeslot-cards">
        {timeslots.map((timeslot) => (
          <div key={timeslot.id} className="timeslot-card" onClick={() => onTimeSelect(timeslot.time)}>
            <button>{timeslot.time}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;
