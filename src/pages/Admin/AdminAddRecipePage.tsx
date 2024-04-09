import InputFormBase from "./components/AdminInputBasicInfo.tsx";
import InputInstructions from "./components/AdminInputInstructions.tsx";
import InputIngredients from "./components/AdminInputIngredients.tsx";
import SelectCategory from "./components/AdminSelectCategory.tsx";
import SubmitButton from "./components/AdminSubmitButton.tsx";
import PriceInput from "./components/AdminPriceInput.tsx";
import TimeInMinsInput from "./components/AdminTimeInMinsInput.tsx";
import DeleteAllRecipes from "./components/AdminDeleteAllRecipes.tsx";
import AdminGlobalState from "./utils/AdminGlobalState.ts";

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
      <SubmitButton resetFormData={AdminGlobalState().resetFormData} />
      </div>
      <div className="danger-zone">
        <DeleteAllRecipes />
      </div>
    </div>
  );
};

export default AddRecipePage;
