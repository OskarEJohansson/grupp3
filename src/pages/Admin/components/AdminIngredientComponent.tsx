import { useState } from "react";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export const AdminIngredientComponent = ({ index, onUpdateComponent }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
    unit: "",
  });

  const changeName = (e: any) => {
    const newFormData = { ...formData, name: e.target.value };
    setFormData(newFormData);
    onUpdateComponent(index, newFormData);
  };

  const changeAmount = (e: any) => {
    const newFormData = { ...formData, amount: e.target.value };
    setFormData(newFormData);
    onUpdateComponent(index, newFormData);
  };

  const changeUnit = (e: any) => {
    const newFormData = { ...formData, unit: e.target.value };
    setFormData(newFormData);
    onUpdateComponent(index, newFormData);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <fieldset>
        <label className="block mb-2 text-gray-800">Ingredient</label>
        <input
          type="text"
          name="name"
          onChange={changeName}
          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-gray-500"
        />

        <label className="block mb-2 text-gray-800">Amount</label>
        <input
          type="number"
          name="amount"
          onChange={changeAmount}
          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-gray-500"
        />

        <label className="block mb-2 text-gray-800">Unit</label>
        <input
          type="text"
          name="unit"
          onChange={changeUnit}
          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-gray-500"
        />
      </fieldset>
    </div>
  );
};

export default AdminIngredientComponent;
