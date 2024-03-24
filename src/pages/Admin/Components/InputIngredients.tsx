import { useState } from "react";

export const ingredientsComponent = () => {
  const [ingredients, setIngredient] = useState({
    name: "",
    amount: 0,
    unit: "",
  });

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setIngredient({ ...ingredients, [name]: value });
  };

  return (
    <div>
      <fieldset>
        <label>Ingredient</label>
        <input
          type="text"
          name="name"
          value={ingredients.name}
          onChange={handleOnChange}
        />

        <label>Amount</label>
        <input
          type="text"
          name="amount"
          value={ingredients.amount}
          onChange={handleOnChange}
        />

        <label>Unit</label>
        <input
          type="text"
          name="unit"
          value={ingredients.unit}
          onChange={handleOnChange}
        />
      </fieldset>
    </div>
  );
};

const InputIngredients = () => {
  const [componentList, setComponentList] = useState([ingredientsComponent()]);

  const handleOnClick = () => {
    setComponentList([...componentList, ingredientsComponent()]);
  };

  return (
    <div>
      {componentList.map((component, index: number) => (
        <div key={index}>{component}</div>
      ))}
      <button onClick={handleOnClick}>Add Ingredient</button>
    </div>
  );
};

export default InputIngredients;
