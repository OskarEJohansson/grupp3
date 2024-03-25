import InputFormBase from "./Components/InputFormBase";
import InputIngredients from "./Components/InputIngredients.tsx";
import SelectCategory from "./Components/SelectCategory.tsx";
import SubmitButton from "./Components/SubmitButton.tsx";

const AdminPage = () => {
  return (
    <div>
      <h1>INPUT FORM</h1>
      <InputFormBase inputLabel="title" />
      <InputFormBase inputLabel="description" />
      <InputFormBase inputLabel="image" />
      <InputFormBase inputLabel="instructions" />
      <SelectCategory />
      <InputIngredients />
      <SubmitButton />
    </div>
  );
};

export default AdminPage;
