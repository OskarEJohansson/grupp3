import IngredientComponent from "./IngredientComponent";
import FormGlobalState from "../utils/FormGlobalState";

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

  const handleUpdateCompononent = (
    index: number,
    newIngredient: Ingredient
  ) => {
    const ingredients = formData.ingredients;
    ingredients[index] = newIngredient;
    updateIngredients(ingredients);
  };

  return (
    <div className="container">
      <div className="form-group">
        {formData.ingredients.map((_, index: number) => (
          <div key={index}>
            <IngredientComponent
              index={index}
              onUpdateComponent={handleUpdateCompononent}
            />
          </div>
        ))}
        <button onClick={handleOnClick}>Add Ingredient</button>
      </div>
    </div>
  );
};

export default InputIngredients;
