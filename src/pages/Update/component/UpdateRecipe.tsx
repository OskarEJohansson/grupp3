import Select from "react-select";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";
import UpdateRecipeIngredientCard from "./UpdateRecipeIngredientCard";

const UpdateRecipe = () => {
  const { formData, setChangedData } = UpdateRecipeGlobalState();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setChangedData(name, value);
  };

  const handleOnChangeCategory = (selectedOption: any) => {
    setChangedData("categories", selectedOption.value);
  };

  const options = [
    { value: "meat", label: "Meat" },
    { value: "veg", label: "Vegetarian" },
    { value: "fish", label: "Fish" },
    { value: "hamburger", label: "Hamburger" },
  ];

  return (
    <div className="container mx-auto p-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          name="title"
          placeholder={formData.title}
          onChange={handleOnChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          name="description"
          placeholder={formData.description}
          value={formData.description}
          onChange={handleOnChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image URL
        </label>
        <input
          name="imageUrl"
          onChange={handleOnChange}
          placeholder={formData.imageUrl}
          value={formData.imageUrl}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <Select
          options={options}
          onChange={handleOnChangeCategory}
          className="w-full"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instructions
        </label>
        <input
          name="instructions"
          onChange={handleOnChange}
          placeholder={formData.instructions.toString()}
          value={formData.instructions}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price
        </label>
        <input
          name="price"
          onChange={handleOnChange}
          placeholder={formData.price.toLocaleString()}
          value={formData.price}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <h2 className="text-xl font-bold text-center my-4">Update ingredients</h2>
        <UpdateRecipeIngredientCard />
      </form>
      
    </div>
  );
};

export default UpdateRecipe;
