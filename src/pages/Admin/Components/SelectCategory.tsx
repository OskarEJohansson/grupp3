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

  const handleOnChange = (selectedOption: string) => {
    console.log(selectedOption.valueOf());
    setCategories(selectedOption.valueOf());
    console.log(formData.categories);
  };

  return (
    <div className="container">
      <Select options={options} onChange={() => handleOnChange} className="select-option"
         />
    </div>
  );
};

export default SelectCategory;
