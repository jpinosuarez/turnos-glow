/*import React from 'react';
import { useParams } from 'react-router-dom';

const CategorySelectionPage = () => {
  const { categoryId } = useParams();

  // Aquí puedes utilizar categoryId en tu lógica
  // Por ejemplo, puedes usarlo para cargar datos relacionados con esa categoría

  return (
    <div className="page-container">
      <h2>Seleccione una categoría</h2>
      <p>Categoría seleccionada: {categoryId}</p>      
    </div>
  );
};

export default CategorySelectionPage;*/

// src/pages/CategorySelectionPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import CategorySelection from '../components/CategorySelection';

const CategorySelectionPage = () => {
  const { categoryId } = useParams();

  // Aquí puedes utilizar categoryId en tu lógica
  // Por ejemplo, puedes usarlo para cargar datos relacionados con esa categoría

  return (
    <div className="page-container">
      <h2>Seleccione una categoría</h2>
      <p>Categoría seleccionada (desde URL): {categoryId}</p>
      
      {/* Aquí se utiliza el componente CategorySelection */}
      <CategorySelection />
    </div>
  );
};

export default CategorySelectionPage;


