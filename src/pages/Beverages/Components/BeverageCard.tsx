import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageCard = () => {
  const { drinkList } = BeverageGlobalState();
  return (
    <>
      <div>
        {clickedCard.drink.map((drink, index) => (
          <div key={index}>
            <h1>Titel:{drink.strDrink}</h1>
            Photo:
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            Description: {drink.strInstructions}
          </div>
        ))}
      </div>
    </>
  );
};

export default BeverageCard;
