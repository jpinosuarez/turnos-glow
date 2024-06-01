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

// src/components/CategorySelection.js

// src/components/CategorySelection.js

// src/components/CategorySelection.js

// src/components/CategorySelection.js

// src/components/CategorySelection.js
import React from 'react';
import '../styles/CategorySelection.css';
import nailsImage from '../assets/images/nails.jpg';
import eyesImage from '../assets/images/eyes.jpg';
import hairImage from '../assets/images/hair.jpg';

const categories = [
  { id: 'unas', name: 'Uñas', image: nailsImage, description: 'Servicios de manicura y pedicura' },
  { id: 'miradas', name: 'Miradas', image: eyesImage, description: 'Servicios de cejas y pestañas' },
  { id: 'peluqueria', name: 'Peluquería', image: hairImage, description: 'Servicios de corte y peinado' },
];

const CategorySelection = ({ onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="category-selection">
      <h3>Seleccione una categoría:</h3>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h4>{category.name}</h4>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;

