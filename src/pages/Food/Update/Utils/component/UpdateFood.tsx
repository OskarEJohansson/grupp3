import UpdateFoodGlobalState from "../UpdateFoodGlobalState";

const UpdateFood = () => {
  const { formData, setChangedData } = UpdateFoodGlobalState();

  console.log("FORMDATA IN UPDATEFOOD", formData);
  console.log("FORMDATA TITLE", formData.title);

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
          value={formData.title}
          onChange={handleOnChange}
        />{" "}
        <br />
        <label>Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleOnChange}
        />
        <br />
        <label>imageUrl</label>
        <input
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleOnChange}
        />
        <br />
        <label>Categories</label>
        <input
          name="categories"
          value={formData.categories}
          onChange={handleOnChange}
        />
        <br />
        <label>Instructions</label>
        <input
          name="instructions"
          value={formData.instructions}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default UpdateFood;
