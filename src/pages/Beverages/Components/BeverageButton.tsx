import { useNavigate } from "react-router-dom";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageButton = (category: any) => {
  const { fetchAlcoholicBeverage, fetchNonAlcoholicBeverage } =
    BeverageGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (category.category === "Alcoholic") {
      fetchAlcoholicBeverage();
    } else fetchNonAlcoholicBeverage();

    navigate("/beverage");
  };

  return <button onClick={handleOnClick}>{category.category}</button>;
};

export default BeverageButton;
