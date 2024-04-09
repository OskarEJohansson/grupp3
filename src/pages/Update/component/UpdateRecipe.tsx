import Select from "react-select";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";
import UpdateRecipeIngredientCard from "./UpdateRecipeIngredientCard";

const UpdateRecipe = () => {
  const { formData, setChangedData } = UpdateRecipeGlobalState();
  console.log("UPDATE RECIPE FORM DATA", formData);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setChangedData(name, value);
  };

  const handleOnChangeCategory = (selectedOption: any) => {
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
      <form>
        <label>Title</label>
        <input
          name="title"
          placeholder={formData.title}
          onChange={handleOnChange}
        />
        <br />
        <label>Description</label>
        <input
          name="description"
          placeholder={formData.description}
          value={formData.description}
          onChange={handleOnChange}
        />
        <br />
        <label>imageUrl</label>
        <input
          name="imageUrl"
          onChange={handleOnChange}
          placeholder={formData.imageUrl}
          value={formData.imageUrl}
        />
        <br />
        <Select options={options} onChange={handleOnChangeCategory} />
        <label>Instructions</label>
        <input
          name="instructions"
          onChange={handleOnChange}
          placeholder={formData.instructions.toString()}
          value={formData.instructions}
        />
        <br />
        <label>Price</label>
        <input
          name="price"
          onChange={handleOnChange}
          placeholder={formData.price.toLocaleString()}
          value={formData.price}
        />
      </form>
      <UpdateRecipeIngredientCard />
    </div>
  );
};

export default UpdateRecipe;
