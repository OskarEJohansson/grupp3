import { DrinkDetails } from "../../../types";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageCard = () => {
  const clickedCard = BeverageGlobalState((state:any) => state);
  console.log("fetched drink", clickedCard.drink);
  return (
    <>
      <div>
        {clickedCard.map((drink, index: number) => (
          <div key={index}>
            <h1>Titel:{drink.strDrink}</h1>
            Photo:<img src={clickedCard.strDrinkThumb} alt={drink.strDrink} />
            Description: {clickedCard.strInstructions}
          </div>
        ))}
        <h1>Title: {clickedCard.strDrink}</h1>
        <div></div>
      </div>
    </>
  );
};

export default BeverageCard;
