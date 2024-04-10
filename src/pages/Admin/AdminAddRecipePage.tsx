import AdminInputBasicInfo from "./components/AdminInputBasicInfo.tsx";
import AdminInputInstructions from "./components/AdminInputInstructions.tsx";
import AdminInputIngredients from "./components/AdminInputIngredients.tsx";
import AdminSelectCategory from "./components/AdminSelectCategory.tsx";
import AdminSubmitButton from "./components/AdminSubmitButton.tsx";
import AdminPriceInput from "./components/AdminPriceInput.tsx";
import AdminTimeInMinsInput from "./components/AdminTimeInMinsInput.tsx";
import AdminDeleteAllRecipesButton from "./components/AdminDeleteAllRecipesButton.tsx";
import AdminGlobalState from "./utils/AdminGlobalState.ts";
import UpdateRecipe from "../Update/component/UpdateRecipe.tsx";

const AdminAddRecipePage = () => {
  return (
    <div>
      <div className="container">
        <h1>Add Recipe</h1>
      </div>
      <div className="form-group">
        <AdminInputBasicInfo inputLabel="title" />
        <AdminInputBasicInfo inputLabel="description" />
        <AdminInputBasicInfo inputLabel="image" />
        <AdminInputInstructions />
        <AdminSelectCategory />
        <AdminInputIngredients />
        <AdminTimeInMinsInput />
        <AdminPriceInput />
        <AdminSubmitButton resetFormData={AdminGlobalState().resetFormData} />
      </div>
      <div className="danger-zone">
        <AdminDeleteAllRecipesButton />
      </div>
    </div>
  );
};

export default AdminAddRecipePage;
