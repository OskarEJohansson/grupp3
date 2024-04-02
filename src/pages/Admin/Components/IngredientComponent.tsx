import FormGlobalState from "../Utils/FormGlobalState";
import { useState } from 'react'

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export const IngredientComponent = ({index, onUpdateComponent}) => {
    
    const [formData, setFormData] = useState({
      name: "",
      amount: 0,
      unit: ""
    })
    
    const changeName = (e: any) => {
      const newFormData = {...formData, name: e.target.value};
      setFormData(newFormData)
      onUpdateComponent(index, newFormData)
    }
    
    const changeAmount = (e: any) => {
      const newFormData = {...formData, amount: e.target.value};
      setFormData(newFormData)
      onUpdateComponent(index, newFormData)
    }
    
    const changeUnit = (e: any) => {
      const newFormData = {...formData, unit: e.target.value};
      setFormData(newFormData)
      onUpdateComponent(index, newFormData)
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
