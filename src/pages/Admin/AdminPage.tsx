import InputFormBase from "./Components/InputFormBase.tsx";
import InputIngredients from "./Components/InputIngredients.tsx";
import SelectCategory from "./Components/SelectCategory.tsx";
import SubmitButton from "./Components/SubmitButton.tsx";

const AdminPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Add Recipe</h1>
        <h1>Add Recipe</h1>
      </div>
      <div className="form-group">
        <InputFormBase inputLabel="title" />
        <InputFormBase inputLabel="description" />
        <InputFormBase inputLabel="image" />
        <InputFormBase inputLabel="instructions" />
        <SelectCategory />
        <InputIngredients />
        <SubmitButton />
      </div>
    </div>
  );
};

export default AdminPage;

