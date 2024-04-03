import InputFormBase from "./Components/InputFormBase";
import InputInstructions from "./Components/InputInstructions.tsx";
import InputIngredients from "./Components/InputIngredients.tsx";
import SelectCategory from "./Components/SelectCategory.tsx";
import SubmitButton from "./Components/SubmitButton.tsx";
import PriceInput from "./Components/PriceInput.tsx";
import TimeInMinsInput from "./Components/TimeInMinsInput.tsx";

const AdminPage = () => {
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
    </div>
  );
};

export default AdminPage;

