import { useState } from "react";
import IngredientComponent from "./IngredientComponent";
import FormGlobalState from "../Utils/FormGlobalState";

export const InputIngredients = () => {
  const [componentCount, setComponentList] = useState(1);
  const { formDataIngredients, setFormDataIngredients } = FormGlobalState();

  const handleOnClick = () => {
    setComponentList(componentCount + 1);
    setFormDataIngredients(formDataIngredients);
  };

  return (
    <div>
      {[...Array(componentCount)].map((number, index: number) => (
        <div key={index}>
          <IngredientComponent />
        </div>
      ))}
      <button onClick={handleOnClick}>Add Ingredient</button>
    </div>
  );
};

export default InputIngredients;
