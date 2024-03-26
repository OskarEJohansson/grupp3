import { BeverageTypes } from "../../../types";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageCard = () => {
  const { beverageList } = BeverageGlobalState();

  return (
    <>
      <div>
        {beverageList.map((beverage: BeverageTypes, index: number) => (
          <div key={index}>
            <h1>Titel:{beverage.strDrink}</h1>
            Photo:
            <img src={beverage.strDrinkThumb} alt={beverage.strDrink} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BeverageCard;
