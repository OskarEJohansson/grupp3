import React, { useState } from "react";
import { CardTypes } from "../types";
import "../App.css";

const AddFoodItemPage = () => {
    const [foodData, setFoodData] = useState<CardTypes>({
        title: "",
        description: "",
        ratings: [],
        imageUrl: "",
        categories: [],
        instructions: [],
        ingredients: [{ name: "", amount: 0, unit: 0 }],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFoodData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleIngredientsChange = (index: number, field: string, value: number): void => {
        setFoodData((prevData) => ({
            ...prevData,
            ingredients: prevData.ingredients.map((ingredient, i) =>
            i === index ? { ...ingredient, [field]: value } : ingredient
            ),
        }));
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(foodData);
    };

    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="food-form">
        <div className="form-group">
        <label htmlFor="title">Food Title</label>
        <input type="text" id="title" value={foodData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" value={foodData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" value={foodData.imageUrl} onChange={handleChange} />
        </div>
        <div className="form-group">
        <label htmlFor="categories">Categories</label>
        <input type="text" id="categories" value={foodData.categories.join(', ')} onChange={handleChange} />
        </div>
        <div className="form-group">
        <label htmlFor="instructions">Instruction</label>
        <textarea id="instructions" value={foodData.instructions.join('\n')} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="ratings">Ratings</label>
        <input
        type="text"
        id="ratings"
        value={foodData.ratings.join(', ')}
        onChange={(e) => setFoodData({ ...foodData, ratings: e.target.value.split(',').map(Number) })}
        />
        </div>
        <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            {foodData.ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input
                    type="text"
                    value={String(ingredient.name)}
                    onChange={(e) => handleIngredientsChange(index, 'name', e.target.value)}
                    />
                    <input
                    type="number"
                    value={ingredient.amount}
                    onChange={(e) => handleIngredientsChange(index, 'amount', e.target.value)}
                    />
                    <input
                    type="unit"
                    value={ingredient.number}
                    onChange={(e) => handleIngredientsChange(index, 'unit', e.target.value)}
                    />
                    </div>
            ))}
        </div>
        <button type="submit">Add Food Item</button>
        </form>
        </div>
    );
            };

export default AddFoodItemPage

/* export interface CardTypes {
    title: string;
    description: string;
    ratings: number[];
    imageUrl: string;
    categories: string[];
    instructions: string[];
    ingredients: [name: string, amount: number, unit: number];
  } */

  /* const AddFoodItemPage = () => {
    const [foodData, setFoodData] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFoodData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(foodData);
    };

    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="food-form">
        <div className="form-group">
        <label htmlFor="title">Food Title</label>
        <input type="text" id="title" value={foodData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" value={foodData.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Add Food Item</button>
        </form>
        </div>
    );
}

export default AddFoodItemPage */