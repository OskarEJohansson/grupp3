import CartGlobalState from "../../Cart/utils/CartGlobalState";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const PatchRecipeButton = () => {
  const { updateRecipe, addIngredients, formData, ingredients } =
    UpdateRecipeGlobalState();
  const { URL } = CartGlobalState();

  const handleOnClick = () => {
    updateRecipe(URL, formData._id, formData);
    addIngredients(ingredients);
  };

  return (
    <button
      onClick={handleOnClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Update Recipe
    </button>
  );
};

export default PatchRecipeButton;
