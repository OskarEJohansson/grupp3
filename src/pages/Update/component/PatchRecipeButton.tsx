import CartGlobalState from "../../Cart/utils/CartGlobalState";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const PatchRecipeButton = () => {
  const { updateRecipe, formData } = UpdateRecipeGlobalState();
  const { URL } = CartGlobalState();

  const handleOnClick = () => {
    updateRecipe(URL, formData._id, formData);
  };

  return <button onClick={handleOnClick}>Update Recipe</button>;
};

export default PatchRecipeButton;
