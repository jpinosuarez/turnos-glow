/*import React from 'react';

const CategorySelection = () => {
  // Aquí podrías definir el estado para almacenar las categorías seleccionadas
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // Función para manejar la selección de categoría
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Lista de categorías (ejemplo)
  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  return (
    <div>
      <h3>Seleccione una categoría:</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategorySelect(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <p>Categoría seleccionada: {selectedCategory}</p>
      )}
    </div>
  );
};

export default CategorySelection;*/

// src/components/CategorySelection.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Redirigir a la página de selección de servicios
    navigate(`/servicios/${category}`);
  };

  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  return (
    <div>
      <h3>Seleccione una categoría:</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategorySelect(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <p>Categoría seleccionada: {selectedCategory}</p>
      )}
    </div>
  );
};

export default CategorySelection;
