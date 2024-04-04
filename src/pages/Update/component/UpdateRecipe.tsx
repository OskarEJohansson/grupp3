import Select from "react-select";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";
import { IngredientsTypes } from "../../../types";

const UpdateRecipe = () => {
  const { formData, setChangedData, setIngredients } =
    UpdateRecipeGlobalState();
  console.log("UPDATE RECIPE FORM DATA", formData);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setChangedData(name, value);
  };

  const handleOnChangeCategory = (selectedOption: any) => {
    setChangedData("categories", selectedOption.value);
  };

  const handleOnChangeIngredients = (e: any) => {
    const { name, value } = e.target;
    setIngredients(name, value);
    console.log("FORMDATA E", name, value);
    console.log("FORMDATA INGREDIENTS", formData.ingredients);
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
          placeholder={formData.price}
          value={formData.price}
        />
        <label>Price</label>
        {formData.ingredients.map((ingredient: IngredientsTypes) => (
          <div key={ingredient._id}>
            <label>Name</label>
            <input
              placeholder={ingredient.name}
              name="name"
              onChange={handleOnChangeIngredients}
            />
            <label>Amount</label>
            <input
              name="amount"
              placeholder={ingredient.amount.toString()}
              onChange={handleOnChangeIngredients}
            />
            <label>Unit</label>
            <input
              name="unit"
              placeholder={ingredient.unit}
              onChange={handleOnChangeIngredients}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default UpdateRecipe;
