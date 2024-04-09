import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeTypes } from "../../../types";

const AdminRecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        "https://sti-java-grupp3-mzba2l.reky.se/recipes"
      );
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
      await axios.delete(
        `https://sti-java-grupp3-mzba2l.reky.se/recipes/${recipeId}`
      );
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe._id !== recipeId)
      );
    } catch (error) {
      console.error("Error deleting recipe", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">All Recipes</h1>
      {recipes.map((recipe: RecipeTypes, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
          <p className="text-gray-700 mb-2">Description: {recipe.description}</p>
          <p className="text-gray-700 mb-2">Ratings: {recipe.ratings && recipe.ratings.join(", ")}</p>
          <p className="text-gray-700 mb-2">ImageUrl: {recipe.imageUrl}</p>
          <p className="text-gray-700 mb-2">Categories: {recipe.categories && recipe.categories.join(", ")}</p>
          <p className="text-gray-700 mb-2">Instructions: {recipe.instructions && recipe.instructions.join(", ")}</p>
          <p className="text-gray-700 mb-2">Ingredients:</p>
          <ul className="list-disc pl-4">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="text-gray-700">
                  {ingredient.name} - {ingredient.amount} {ingredient.unit}
                </li>
              ))}
          </ul>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out" onClick={() => handleDeleteRecipe(recipe._id)}>Delete Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default AdminRecipeList;
