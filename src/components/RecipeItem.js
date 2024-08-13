import React from 'react';

const RecipeItem = ({ recipe, onClick }) => {
  return (
    <li onClick={onClick} style={{ cursor: 'pointer', margin: '10px 0' }}>
      {recipe.name}
    </li>
  );
};

export default RecipeItem;
