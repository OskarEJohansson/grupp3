import { IngredientsTypes } from "../../../types";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const UpdateRecipeIngredientCard = () => {
  const { formData, setIngredients } = UpdateRecipeGlobalState();

  const handleOnChange = (e: any, id: string) => {
    const { name, value } = e.target;
    setIngredients(id, name, value);
  };

  return (
    <div>
      {formData.ingredients.map((ingredient: IngredientsTypes) => (
        <div key={ingredient._id}>
          <fieldset>
            <input
              name="name"
              placeholder={ingredient.name}
              onChange={(e) => handleOnChange(e, ingredient._id)}
              type="text"
            />
            <input
              name="unit"
              placeholder={ingredient.unit}
              type="text"
              onChange={(e) => handleOnChange(e, ingredient._id)}
            />
            <input
              name="amount"
              placeholder={ingredient.amount.toString()}
              type="text"
              onChange={(e) => handleOnChange(e, ingredient._id)}
            />
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default UpdateRecipeIngredientCard;
