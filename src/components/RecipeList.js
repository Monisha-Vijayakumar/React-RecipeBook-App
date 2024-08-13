import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} onClick={() => onRecipeClick(recipe)} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
