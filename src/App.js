/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySelectionPage from './pages/CategorySelectionPage';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<CategorySelectionPage />} />            
            {/* Agrega más rutas según sea necesario }
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;*/

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySelectionPage from './pages/CategorySelectionPage';
import ServiceSelectionPage from './pages/ServiceSelectionPage';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<CategorySelectionPage />} />
            <Route path="/servicios/:category" element={<ServiceSelectionPage />} />            
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;

