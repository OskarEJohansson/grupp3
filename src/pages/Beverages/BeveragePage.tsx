import { useEffect, useState } from "react";
import "../../App.css";
import {DrinkDetails, DrinkTypes, ApiResponse } from "../../types";
import BeverageGlobalState from "./Utilities/BeveragesGlobalState";
import { useNavigate } from "react-router-dom";

const BeveragePage = () => {
  const [selectedType, setSelectedType] = useState("mixed");
  const [drinks, setDrinks] = useState<DrinkTypes[]>([]);
  const navigate = useNavigate();
  const useGlobalState = BeverageGlobalState((state) => state);
  //useEffect fetches drinks data when selectedType changes.
  useEffect(() => {
    //A function to fetch drinks based on selectedType.
    const fetchDrinks = async (type: string) => {
      //Using -let- allows me to set the url trough an if()sats on selectedType.
      let url;
      if (type === "alcoholic") {
        url =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
      } else if (type === "nonAlcoholic") {
        url =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
      } else if (type === "mixed") {
        url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      }
      if (url) {
        try {
          //fetch the selected data from the API.
          const response = await fetch(url);
          //parse the data(json)
          const data: ApiResponse = await response.json();
          //Update the drinks state with the fetched data
          setDrinks(data.drinks);
        } catch (error) {
          console.error("Error fetching drinks:", error);
        }
      } else {
        console.error("Invalid URL:", url);
      }
    };
    fetchDrinks(selectedType);
  }, [selectedType]);

  const handleOnClick = (drink: DrinkTypes) => {
    navigate("/drink");
    useGlobalState.fetchDrink(drink.idDrink);
  };

  return (
    <div>
      <h1>Beverages</h1>
      <div className="alcoholicChoiceBtns">
        <button onClick={() => setSelectedType("mixed")}>Mixed</button>
        <button onClick={() => setSelectedType("alcoholic")}>Alcoholic</button>
        <button onClick={() => setSelectedType("nonAlcoholic")}>Non alcoholic</button>
      </div>
      <div className="imageContainer">
        {drinks.map((drink, index) => (
          <div key={index}>
            <button onClick={() => handleOnClick(drink)}>
              <h2>{drink.strDrink}</h2>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeveragePage;