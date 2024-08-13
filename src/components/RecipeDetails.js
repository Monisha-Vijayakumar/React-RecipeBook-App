import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div style={{ width: '80%' }}>Select a recipe to see the details</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <h4>Author: {recipe.author}</h4>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: 'auto' }} />
      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
