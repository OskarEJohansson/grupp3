import InputFormBase from "./components/InputBasicInfo.tsx";
import InputInstructions from "./components/InputInstructions.tsx";
import InputIngredients from "./components/InputIngredients.tsx";
import SelectCategory from "./components/SelectCategory.tsx";
import SubmitButton from "./components/SubmitButton.tsx";
import PriceInput from "./components/PriceInput.tsx";
import TimeInMinsInput from "./components/TimeInMinsInput.tsx";
import DeleteAllRecipes from "./components/DeleteAllRecipes.tsx";

const AddRecipePage = () => {

  return (
    <div>
      <div className="container">
        <h1>Add Recipe</h1>
      </div>
      <div className="form-group">
      <InputFormBase inputLabel="title" />
      <InputFormBase inputLabel="description" />
      <InputFormBase inputLabel="image" />
      <InputInstructions />
      <SelectCategory />
      <InputIngredients />
      <TimeInMinsInput />
      <PriceInput />
      <SubmitButton />
      </div>
      <div className="danger-zone">
        <DeleteAllRecipes />
      </div>
    </div>
  );
};

export default AddRecipePage;

