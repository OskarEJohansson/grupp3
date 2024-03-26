import { useNavigate } from "react-router-dom";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageButton = (category: any) => {
  const { fetchAlcoholicDrinks, fetchNonAlcoholicDrinks } =
    BeverageGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (category.category === "alcoholic") {
      fetchAlcoholicDrinks();
    } else fetchNonAlcoholicDrinks();

    navigate("/drink");
  };

  return <button onClick={handleOnClick}>{category.category}</button>;
};

export default BeverageButton;
