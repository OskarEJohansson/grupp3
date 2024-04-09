import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import AddToCartButton from "../../Drinks/components/DrinkAddToCartButton";
import DrinkDetailedCard from "./DetailedDrinkCard";

const DrinkCardPage = () => {
  const { drinkList, fetchAlcoholicDrink, fetchNonAlcoholicDrink, setDrink } =
    DrinkGlobalState();
  const { category } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = (drink: any) => {
    setDrink(drink);
    setShowModal(true);
  };

  useEffect(() => {
    if (category === "Alcoholic") {
      fetchAlcoholicDrink();
    } else {
      fetchNonAlcoholicDrink();
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end font-serif flex flex-col items-center justify-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {drinkList.map((drink, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 cursor-pointer flex flex-col"
            onClick={() => handleOnClick(drink)}
          >
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="w-full"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">{drink.strDrink}</h2>
            </div>
            <div className="justify-end">
              <AddToCartButton article={drink} />
            </div>
          </div>
        ))}
      </div>
      {showModal && <DrinkDetailedCard onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DrinkCardPage;
