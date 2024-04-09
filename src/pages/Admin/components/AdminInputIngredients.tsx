import IngredientComponent from "./AdminIngredientComponent";
import AdminGlobalState from "../utils/AdminGlobalState";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export const AdminInputIngredients = () => {
  const { formData, addIngredients, updateIngredients } = AdminGlobalState();

  const handleOnClick = () => {
    addIngredients({ name: "", amount: 0, unit: "" });
  };

  const handleUpdateComponent = (index: number, newIngredient: Ingredient) => {
    const ingredients = formData.ingredients.map((ingredient, i) =>
      i === index ? newIngredient : ingredient
    );
    updateIngredients(ingredients);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="form-group">
        {formData.ingredients.map((_, index: number) => (
          <div key={index} className="mb-4">
            <IngredientComponent
              index={index}
              onUpdateComponent={handleUpdateComponent}
            />
          </div>
        ))}
        <button
          onClick={handleOnClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default AdminInputIngredients;
