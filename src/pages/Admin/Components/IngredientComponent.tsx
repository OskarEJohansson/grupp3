/* import { useEffect } from "react";
import FormGlobalState, { Ingredient } from "../Utils/FormGlobalState";

interface IngredientComponentProps {
  index: number;
}

export const IngredientComponent = ({ index }: IngredientComponentProps ) => {
  const { formData, addIngredient } = FormGlobalState();
  const ingredient: Ingredient | undefined = formData.ingredients[index];

  const handleIngredientChange = (field: keyof Ingredient, value: string | number) => {
    const updatedIngredients = [...formData.ingredients];
    if (!updatedIngredients[index]) {
      updatedIngredients[index] = {name: "", amount: 0, unit: ""};
    }
    updatedIngredients[index][field] = value;
    addIngredient(updatedIngredients[index]);
  };

  useEffect(() => {
    handleIngredientChange("name", "");
    handleIngredientChange("amount", 0);
    handleIngredientChange("unit", "");
  }, []);

  if (!ingredient) {
    return null;
  }

  return (
    <div>
      <fieldset>
        <label>Ingredient</label>
        <input
          type="text"
          name="name"
          value={ingredient.name}
          onChange={(e) => {
            handleIngredientChange("name", e.target.value);
          }}
        />

        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={ingredient.amount}
          onChange={(e) => handleIngredientChange("amount", parseInt(e.target.value))}
        />

        <label>Unit</label>
        <input
          type="text"
          name="unit"
          value={ingredient.unit}
          onChange={(e) => handleIngredientChange("unit", e.target.value)}
        />
      </fieldset>
    </div>
  );
};

export default IngredientComponent; */

import FormGlobalState from "../Utils/FormGlobalState";
import { useState } from 'react'

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export const IngredientComponent = ({index, onUpdateCompononent}) => {
    
    const [formData, setFormData] = useState({
      name: "",
      amount: 0,
      unit: ""
    })
    
    const changeName = (e) => {
      const newFormData = {...formData, name: e.target.value};
      setFormData(newFormData)
      onUpdateCompononent(index, newFormData)
    }
    
    const changeAmount = (e) => {
      const newFormData = {...formData, amount: e.target.value};
      setFormData(newFormData)
      onUpdateCompononent(index, newFormData)
    }
    
    const changeUnit = (e) => {
      const newFormData = {...formData, unit: e.target.value};
      setFormData(newFormData)
      onUpdateCompononent(index, newFormData)
    }

  return (
    <div>
      <fieldset>
        <label>Ingredient</label>
        <input
          type="text"
          name="name"
          onChange={changeName}
        />

        <label>Amount</label>
        <input
          type="number"
          name="amount"
          onChange={changeAmount}
        />

        <label>Unit</label>
        <input
          type="text"
          name="unit"
          onChange={changeUnit}
        />
      </fieldset>
    </div>
  );
};

export default IngredientComponent;
