import CartGlobalState from "../../../../Cart/utils/CartGlobalState";
import UpdateFoodGlobalState from "../UpdateFoodGlobalState";

const PatchFoodButton = () => {
  const { updateRecipe } = UpdateFoodGlobalState();
  const { URL } = CartGlobalState();
  const id = UpdateFoodGlobalState((state) => state.formData.id) as number;
  console.log("PATCH FOOD BUTTON", id);

  const handleOnClick = () => {
    updateRecipe(URL, id);
  };

  return <button onClick={handleOnClick}>Update Recipe</button>;
};

export default PatchFoodButton;
