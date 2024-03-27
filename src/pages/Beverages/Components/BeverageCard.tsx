import { useEffect } from "react";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageCard = () => {
  const { beverageList, fetchAlcoholicBeverage, fetchNonAlcoholicBeverage, category } = BeverageGlobalState();

  useEffect(() => {
    if (category === "Alcoholic") {
      fetchAlcoholicBeverage();
    } else {
      fetchNonAlcoholicBeverage();
    }
  }, [category, fetchAlcoholicBeverage, fetchNonAlcoholicBeverage]);

  return (
    <div>
      <h1>Beverage Card</h1>
      {beverageList.map((beverage, index) => (
        <div key={index}>
          <h2>{beverage.strDrink}</h2>
          <img src={beverage.strDrinkThumb} alt={beverage.strDrink} width={300} />
        </div>
      ))}
    </div>
  );
};

export default BeverageCard;
