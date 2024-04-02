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
    /* console.log(selectedOption.value); category should be placed in array correctly now */
    setCategories(selectedOption.value);
    console.log(formData.categories);
  };

  return (
    <div className="container">
      <Select options={options} onChange={handleOnChange} className="select-option"
         />
    </div>
  );
};

export default SelectCategory;
