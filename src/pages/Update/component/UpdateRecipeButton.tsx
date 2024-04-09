import { useNavigate } from "react-router-dom";
import UpdateRecipeGlobalState from "../utils/UpdateRecipeGlobalState";

const UpdateRecipeButton = ({ article }: { article: any }) => {
  const { setData } = UpdateRecipeGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/category-page/update-food");
    setData(article);
  };

  return (
    <div>
      <button onClick={handleOnClick}>UPDATE RECIPIE</button>
    </div>
  );
};

export default UpdateRecipeButton;
