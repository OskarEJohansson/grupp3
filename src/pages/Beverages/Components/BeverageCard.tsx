import { useNavigate } from "react-router-dom";
import { BeverageTypes } from "../../../types";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageCard = () => {
  const { beverageList, fetchBeverage } = BeverageGlobalState();
  const navigate = useNavigate();
  console.log("BeverageList", beverageList);

  const handleOnClick = (beverage: BeverageTypesType) => {
    console.log(beverage.idDrink);
    fetchBeverage(beverage.idDrink);

    navigate("/beverage-page/id");
  };

  return (
    <div>
      <h1>BEVERAGE CARD</h1>
      {beverageList.map((beverage: BeverageTypes, index: number) => (
        <div key={index}>
          <h1>Titel:{beverage.strDrink}</h1>
          Photo:
          <img
            src={beverage.strDrinkThumb}
            alt={beverage.strDrink}
            width={300}
            onClick={() => handleOnClick(beverage)}
          />
        </div>
      ))}
    </div>
  );
};

export default BeverageCard;
