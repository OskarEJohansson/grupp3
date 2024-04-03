import UpdateFoodGlobalState from "../utils/UpdateFoodGlobalState";

const UpdateFood = ({ article }: any) => {
  const { formData, setChangedData } = UpdateFoodGlobalState();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setChangedData(name, value);
    console.log(formData);
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input
          name="title"
          placeholder={article.article.title}
          onChange={handleOnChange}
        />
        <br />
        <label>Description</label>
        <input
          name="description"
          placeholder={article.article.description}
          value={formData.description}
          onChange={handleOnChange}
        />
        <br />
        <label>imageUrl</label>
        <input
          name="imageUrl"
          onChange={handleOnChange}
          placeholder={article.article.imageUrl}
          value={formData.imageUrl}
        />
        <br />
        <label>Categories</label>
        <input
          name="categories"
          onChange={handleOnChange}
          placeholder={article.article.categories}
          value={formData.categories}
        />
        <br />
        <label>Instructions</label>
        <input
          name="instructions"
          onChange={handleOnChange}
          placeholder={article.article.instructions}
          value={formData.instructions}
        />
      </form>
    </div>
  );
};

export default UpdateFood;
