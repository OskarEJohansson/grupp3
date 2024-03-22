import React, { useState } from "react";
import { CardTypes } from "../types";
import "../App.css";
import axios from "axios";



const AddFoodItem = () => {
    const [foodData, setFoodData] = useState<CardTypes>({
      title: "",
      description: "",
      ratings: [],
      imageUrl: ""
        
      categories: [],
      instructions: [],
      ingredients: [{ name: "", amount: 0, unit: "" }],
    });
  
    const [submittedRecipe, setSubmittedRecipe] = useState(null);

    const [categoryFields, setCategoryFields] = useState<string[]>([""]);
  
    const [instructionFields, setInstructionFields] = useState<string[]>([""]);
  
    const [ingredientFields, setIngredientFields] = useState<string[]>([""]);
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFoodData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleCategoriesChange = (
      index: number, 
      value: string
      ) => {
      const updatedCategories = [...foodData.categories];
      updatedCategories[index] = value;
      setFoodData((prevState) => ({
        ...prevState,
        categories: updatedCategories,
      }));
    };
  
    const handleInstructionsChange = (
      index: number,
      value: string
      ) => {
      const updatedInstructions = [...foodData.instructions];
      updatedInstructions[index] = value;
      setFoodData((prevState) => ({
        ...prevState,
        instructions: updatedInstructions,
      }));
    };
  
    const handleIngredientsChange = (
      index: number,
      field: string,
      value: string
    ) => {
      const updatedIngredients = [...foodData.ingredients];
      updatedIngredients[index][field] = value;
      setFoodData((prevData) => ({
        ...prevData,
        ingredients: updatedIngredients,
      }));
    };
  
    const handleAddCategoryField = () => {
      setCategoryFields([...categoryFields, ""]);
    };
  
    const handleAddInstructionField = () => {
      setInstructionFields([...instructionFields, ""]);
    };
  
    const handleAddIngredientField = () => {
      setFoodData((prevData) => ({
          ...prevData,
          ingredients: [
              ...prevData.ingredients,
              { name: "", amount: 0, unit: "" }
          ]
      }));
  };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post("https://sti-java-grupp3-mzba2l.reky.se/recipes", foodData);
          console.log(response.data);
          setSubmittedRecipe(response.data);
      } catch (error) {
          console.error("Error", error);
      }
  };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="food-form">
          <div className="form-group">
            <label htmlFor="title">Food Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={foodData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={foodData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={foodData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories</label>
            {categoryFields.map((_,index) => (
              <div key={index}>
                  <input 
                  type="text" 
                  value={foodData.categories[index] || ""}
                  onChange={(e) => handleCategoriesChange(index, e.target.value)}
                  />
              </div>
            ))}
            <button type="button" onClick={handleAddCategoryField}>
              Add another category
            </button>
            </div>
            <div className="form-group">
            <label htmlFor="instruction">Instructions</label>
            {instructionFields.map((_,index) => (
              <div key={index}>
                  <label htmlFor={`step${index + 1}`}>{`Step ${index + 1}:`}</label>
                  <textarea
                  id={`step${index + 1}`}
                  value={foodData.instructions[index] || ""}
                  onChange={(e) => handleInstructionsChange(index, e.target.value)}
                  >
                  </textarea>
              </div>
            ))}
            <button type="button" onClick={handleAddInstructionField}>
              Add another step
            </button>
            </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            {foodData.ingredients.map((ingredient, index) => (
              <div key={index}>
                  <br />
                  <label htmlFor={`ingredient${index}`}>
                      Ingredient {index +1}
                  </label>
                <input
                  type="text"
                  id={`ingredient${index}`}
                  value={String(ingredient.name)}
                  onChange={(e) =>
                    handleIngredientsChange(index, "name", e.target.value)
                  }
                />
                <label htmlFor={`amount${index}`}>Amount</label>
                <br />
                <input
                  type="number"
                  id={`amount${index}`}
                  value={ingredient.amount}
                  onChange={(e) =>
                    handleIngredientsChange(index, "amount", e.target.value)
                  }
                />
                <br />
                <label htmlFor={`unit${index}`}>Unit</label>
                <input
                  type="text"
                  id={`unit${index}`}
                  value={ingredient.unit}
                  onChange={(e) =>
                    handleIngredientsChange(index, "unit", e.target.value)
                  }
                />
              </div>
            ))}
            <button type="button" onClick={handleAddIngredientField}>
              Add another ingredient
            </button>
          </div>
          <button type="submit">Add Food Item</button>
        </form>
        
        {submittedRecipe && (
          <div className="form-group">
            
            <h2>Added Food</h2>
            <p>Title: {submittedRecipe.title}</p>
            <p>Description: {submittedRecipe.description}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default AddFoodItem;