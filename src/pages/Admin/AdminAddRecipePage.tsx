import AdminInputBasicInfo from "./components/AdminInputBasicInfo.tsx";
import AdminInputInstructions from "./components/AdminInputInstructions.tsx";
import AdminInputIngredients from "./components/AdminInputIngredients.tsx";
import AdminSelectCategory from "./components/AdminSelectCategory.tsx";
import AdminSubmitButton from "./components/AdminSubmitButton.tsx";
import AdminPriceInput from "./components/AdminPriceInput.tsx";
import AdminTimeInMinsInput from "./components/AdminTimeInMinsInput.tsx";
import AdminGlobalState from "./utils/AdminGlobalState.ts";

const AdminAddRecipePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Add Recipe</h1>
      <div className="grid gap-6">
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <div className="space-y-6">
            <AdminInputBasicInfo inputLabel="title" />
            <AdminInputBasicInfo inputLabel="description" />
            <AdminInputBasicInfo inputLabel="image" />
            <AdminInputInstructions />
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <div className="space-y-6">
            <AdminSelectCategory />
            <AdminInputIngredients />
            <AdminTimeInMinsInput />
            <AdminPriceInput />
            <AdminSubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddRecipePage;
