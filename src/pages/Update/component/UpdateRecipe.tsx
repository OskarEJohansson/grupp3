import Select from "react-select/base";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const UpdateRecipe = () => {
  const { formData, setChangedData } = UpdateRecipeGlobalState();
  console.log("UPDATE RECIPE FORM DATA", formData);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setChangedData(name, value);
  };

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
      </form>
    </div>
  );
};

export default UpdateRecipe;
