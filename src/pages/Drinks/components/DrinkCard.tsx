import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import AddToCartButton from "../../Drinks/components/DrinkAddToCartButton";
import DrinkDetailedCard from "./DrinkDetailedCard";
import { DrinkTypes } from "../../../types";

const DrinkCardPage = () => {
  const { drinkList, fetchAlcoholicDrink, fetchNonAlcoholicDrink, fetchDrink } =
    DrinkGlobalState();
  const { category } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = (drink: DrinkTypes) => {
    fetchDrink(drink.idDrink);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4">
        {drinkList.map((drink, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border-double border-4 border-gray-300 cursor-pointer hover:shadow-lg transition duration-300 relative"
            onClick={() => handleOnClick(drink)}
          >
            <div className="relative">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-4 absolute bottom-0 left-0 w-full text-white">
              <h2 className="text-lg font-semibold mb-2">{drink.strDrink}</h2>
              <p className="text-gray-200 mb-5">{category}</p>
              <div>
                <AddToCartButton article={drink} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && <DrinkDetailedCard onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DrinkCardPage;
