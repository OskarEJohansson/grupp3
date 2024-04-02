/* import { useState } from "react";
import IngredientComponent from "./IngredientComponent";
import FormGlobalState, { Ingredient } from "../Utils/FormGlobalState";

export const InputIngredients = () => {
  const [componentCount, setComponentCount] = useState(1);
  const { addIngredient } = FormGlobalState();

  const handleAddIngredient = () => {
    setComponentCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <div className="form-group">
        {[...Array(componentCount)].map((_, index: number) => (
          <div key={index}>
          <IngredientComponent index={index} />
          </div>
        ))}
      <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
    </div>
  );
};

export default InputIngredients;
 */

import { useState } from "react";
import IngredientComponent from "./IngredientComponent";
import FormGlobalState from "../Utils/FormGlobalState";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}


export const InputIngredients = () => {
  const { formData, addIngredients, updateIngredients } = FormGlobalState();

  const handleOnClick = () => {
    addIngredients({ name: "", amount: 0, unit: "" });
  };
  
  const handleUpdateCompononent = (index: number, newIngredient: Ingredient) => {
    const ingredients = formData.ingredients;
    ingredients[index] = newIngredient;
    updateIngredients( ingredients );
  };

  return (
    <div className="container">
      <div className="form-group">
        {formData.ingredients.map((_, index: number) => (
          <div key={index}>
          <IngredientComponent
           index={index}
           onUpdateCompononent={handleUpdateCompononent}
          />
          </div>
        ))}
      <button onClick={handleOnClick}>Add Ingredient</button>
      </div>
    </div>
  );
};

export default InputIngredients;