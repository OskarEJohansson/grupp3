import React from "react";
import Select from "react-select";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const UpdateRecipeIngredientCard = () => {
  const { formData, setIngredients } = UpdateRecipeGlobalState();

  const handleOnChange = (e: any, id: string) => {
    const { name, value } = e.target;
    setIngredients(id, name, value);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {formData.ingredients.map((ingredient: IngredientsTypes) => (
        <div key={ingredient._id} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            name="name"
            placeholder={ingredient.name}
            onChange={(e) => handleOnChange(e, ingredient._id)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            Unit
          </label>
          <input
            name="unit"
            placeholder={ingredient.unit}
            type="text"
            onChange={(e) => handleOnChange(e, ingredient._id)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            Amount
          </label>
          <input
            name="amount"
            placeholder={ingredient.amount.toString()}
            type="text"
            onChange={(e) => handleOnChange(e, ingredient._id)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
    </div>
  );
};

export default UpdateRecipeIngredientCard;
