import { useNavigate } from "react-router-dom";
import UpdateFoodGlobalState from "../utils/UpdateFoodGlobalState";

const UpdateFoodButton = (formData: any) => {
  const { setData } = UpdateFoodGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/category-page/update-food");
    setData(formData);
  };

  return (
    <div>
      <button onClick={handleOnClick}>UPDATE RECIPIE</button>
    </div>
  );
};

export default UpdateFoodButton;
