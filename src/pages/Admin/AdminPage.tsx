import InputFormBase from "./Components/InputFormBase";
import SubmitButton from "../Admin/Components/SubmitButton";
import SelectCategory from "./Components/SelectCategory";

const AdminPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Add Recipe</h1>
      </div>
      <div className="form-group">
        <InputFormBase setFunction="setTitle" lable="Title" />
        <InputFormBase setFunction="setDescription" lable="Description" />
        <InputFormBase setFunction="setImageUrl" lable="Image" />
        <InputFormBase setFunction="setInstructions" lable="Instructions" />
        <SelectCategory />
        <SubmitButton />
      </div>
    </div>
  );
};

export default AdminPage;
