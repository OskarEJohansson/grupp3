import { useNavigate } from "react-router-dom";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const UpdateRecipeButton = ({ formData }: any) => {
  const { setData } = UpdateRecipeGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/category-page/update-food");
    setData(formData.article);
  };

  return (
    <div>
      <button
        onClick={handleOnClick}
        className="recipe-button bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none"
      >
        UPDATE RECIPE
      </button>
    </div>
  );
};

export default UpdateRecipeButton;
