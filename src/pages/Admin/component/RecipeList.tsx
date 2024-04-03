import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://sti-java-grupp3-mzba2l.reky.se/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDeleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`https://sti-java-grupp3-mzba2l.reky.se/recipes/${recipeId}`);
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe._id !== recipeId));
    } catch (error) {
      console.error("Error deleting recipe", error);
    }
  };
  return (
    <div className="recipe-list">
      <h1>All Recipes</h1>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe">
          <h3>{recipe.title}</h3>
          <p>Description: {recipe.description}</p>
          <p>Ratings: {recipe.ratings && recipe.ratings.join(", ")}</p>
          <p>ImageUrl: {recipe.imageUrl}</p>
          <p>Categories: {recipe.categories && recipe.categories.join(", ")}</p>
          <p>Instructions: {recipe.instructions && recipe.instructions.join(", ")}</p>
          <p>Ingredients: </p>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
              </li>
            ))}
          </ul>
          <button onClick={() => handleDeleteRecipe(recipe._id)}>Delete Recipe</button>
        </div>
      ))}
    </div>
  );  
};

export default RecipeList;