const UpdateRecipeSelectCategory = () => {
  const handleOnChange = (selectedOption: any) => {
    setChangedData("categories", selectedOption.value);
  };

  const options = [
    { value: "meat", label: "Meat" },
    { value: "veg", label: "Vegitarian" },
    { value: "fish", label: "Fish" },
    { value: "hamburger", label: "Hamburger" },
  ];

  return (
    <div>
      <label>Categories</label>
      <Select></Select>
    </div>
  );
};

export default UpdateRecipeSelectCategory;
