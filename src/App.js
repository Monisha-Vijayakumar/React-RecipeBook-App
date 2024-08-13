import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/recipes") // Simulating with json-server
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setSelectedRecipe(data[0]); // Set the first recipe as the default selected recipe
      });
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleAddRecipe = (newRecipe) => {
    fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes([...recipes, data]);
        setSelectedRecipe(data); // Set the newly added recipe as selected recipe.
        setShowAddForm(false);
      });
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Recipe Book</h1>
      </header>
      <div className="content">
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        <RecipeDetails recipe={selectedRecipe} />
      </div>
      <div className="add-recipe-container">
        <button className="add-recipe-button" onClick={toggleAddForm}>
          {showAddForm ? "Cancel" : "Add New Recipe"}
        </button>
        {showAddForm && <AddRecipe onAddRecipe={handleAddRecipe} />}
      </div>
      <footer className="footer">
        <p>&copy; 2024 My Recipe Book</p>
      </footer>
    </div>
  );
};

export default App;
