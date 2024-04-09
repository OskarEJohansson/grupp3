import Select from "react-select";
import FormGlobalState from "../utils/FormGlobalState";

const SelectCategory = () => {
  const { setCategories, formData } = FormGlobalState();

  const options = [
    { value: "meat", label: "Meat" },
    { value: "veg", label: "Vegetarian" },
    { value: "fish", label: "Fish" },
    { value: "hamburger", label: "Hamburger" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #6366F1" : "1px solid #D1D5DB",
      borderRadius: "0.375rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#6366F1",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#4B5563",
    }),
  };

  const handleOnChange = (selectedOption) => {
    setCategories(selectedOption.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="form-group">
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <Select
          options={options}
          onChange={handleOnChange}
          styles={customStyles}
          classNamePrefix="react-select"
          defaultValue={options.find(option => option.value === formData.categories)}
        />
      </div>
    </div>
  );
};

export default SelectCategory;
