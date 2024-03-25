import Select from "react-select";

const SelectCategory = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default SelectCategory;
