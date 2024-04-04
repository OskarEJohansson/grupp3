import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import AddToCartButton from "../../Food/components/RecipeAddToCartButton";
import DetailedDrinkCard from "./DetailedDrinkCard";

const DrinkCard = () => {
  const { drinkList, fetchAlcoholicDrink, fetchNonAlcoholicDrink, setDrink } =
    DrinkGlobalState();
  const { category } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = (drink: any) => {
    setDrink(drink);
    setShowModal(true);
  };

  useEffect(() => {
    console.log("USE EFFECT", category);
    if (category === "Alcoholic") {
      fetchAlcoholicDrink();
    } else {
      fetchNonAlcoholicDrink();
    }
  }, [category]);

  return (
    <div>
      <h1>Drink Card</h1>
      {drinkList.map((drink, index) => (
        <div key={index}>
          <img
            onClick={() => handleOnClick(drink)}
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={300}
          />
          <h2>{drink.strDrink}</h2>
        </div>
      ))}
      <AddToCartButton />
      {showModal && <DetailedDrinkCard onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DrinkCard;
