import Select from "react-select";
import FormGlobalState from "../Utils/FormGlobalState";

const SelectCategory = () => {
  const { setCategories, formData } = FormGlobalState();
  const options = [
    { value: "meat", label: "Meat" },
    { value: "veg", label: "Vegitarian" },
    { value: "fish", label: "Fish" },
    { value: "hamburger", label: "Hamburger" },
  ];

  const handleOnChange = (selectedOption: any) => {
    setCategories(selectedOption.value);
    console.log(formData.categories);
  };

  return (
    <div className="container">
      <div className="form-group">
      <h3>Category</h3>
      <Select options={options} onChange={handleOnChange} className="select-option"
         />
      </div>
    </div>
  );
};

export default SelectCategory;
