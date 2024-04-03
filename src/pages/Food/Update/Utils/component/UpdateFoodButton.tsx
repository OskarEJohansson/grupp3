import { useNavigate } from "react-router-dom";
import UpdateFoodGlobalState from "../UpdateFoodGlobalState";

const UpdateFoodButton = (formData: any) => {
  const { setData } = UpdateFoodGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("FORMDATABUTTON", formData);
    setData(formData);
    navigate("/category-page/update-food");
  };

  return (
    <div>
      <button onClick={handleOnClick}>UPDATE RECIPIE</button>
    </div>
  );
};

export default UpdateFoodButton;
