/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import ServiceSelectionPage from './pages/ServiceSelectionPage';
import ProfessionalSelectionPage from './pages/ProfessionalSelectionPage';
import DateTimeSelectionPage from './pages/DateTimeSelectionPage';
import PaymentConfirmationPage from './pages/PaymentConfirmationPage';
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categorias" element={<CategorySelectionPage />} />
            <Route path="/servicios/:categoryId" element={<ServiceSelectionPage />} />
            <Route path="/profesionales/:serviceId" element={<ProfessionalSelectionPage />} />
            <Route path="/fecha-hora/:professionalId" element={<DateTimeSelectionPage />} />
            <Route path="/pago-confirmacion/:service/:professional/:date/:time" element={<PaymentConfirmationPage />} />
            <Route path="/success/:service/:professional/:date/:time" element={<SuccessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;*/

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importa tu página de inicio
import CategorySelectionPage from './pages/CategorySelectionPage'; // Importa tu página de selección de categoría
import ServiceSelectionPage from './pages/ServiceSelectionPage'; // Importa tu página de selección de servicio
import ProfessionalSelectionPage from './pages/ProfessionalSelectionPage'; // Importa tu página de selección de profesional
import DateTimeSelectionPage from './pages/DateTimeSelectionPage'; // Importa tu página de selección de fecha y hora
import PaymentConfirmationPage from './pages/PaymentConfirmationPage'; // Importa tu página de confirmación de pago
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategorySelectionPage />} />
        <Route path="/servicios/:serviceId" element={<ServiceSelectionPage />} />
        <Route path="/profesionales/:professionalId" element={<ProfessionalSelectionPage />} />
        <Route path="/fecha-hora/:serviceId/:professionalId" element={<DateTimeSelectionPage />} />
        <Route path="/confirmacion/:serviceId/:professionalId/:date/:time" element={<PaymentConfirmationPage />} />
        <Route path="/success/:serviceId/:professionalId/:date/:time" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
