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

  return <button onClick={handleOnClick}>Update Recipe</button>;
};

export default PatchRecipeButton;
