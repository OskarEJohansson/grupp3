import { useEffect, useState } from "react";
import DrinkGlobalState, { DrinkGlobalStateInterface } from "../utils/DrinkGlobalState";
import { useParams } from "react-router-dom";
import { DrinkDetails } from "../../../types";
import AddToCartButton from "./DrinkAddToCartButton";

const DrinkSuggestion = () => {
    const drink = DrinkGlobalState((state) => state.drink as DrinkDetails);
    const [suggestedDrink, setSuggestedDrink] = useState("Test");
    const [drinkImage, setDrinkImage] = useState("");

    const { fetchDrink } = DrinkGlobalState();
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            switch (category) {
                case "Meat":
                case "Veg":
                case "Fish":
                case "Hamburger":
                    await fetchAndSetDrink(getDrinkIdForCategory(category));
                    break;
                default:
                    setSuggestedDrink("No suggested drink available");
                    break;
            }
        };

        fetchData();
    }, [category, fetchDrink]);

    const getDrinkIdForCategory = (category) => {
        switch (category) {
            case "Meat":
                return "13581";
            case "Veg":
                return "16108";
            case "Fish":
                return "12560";
            case "Hamburger":
                return "17831";
            default:
                return null;
        }
    };

    const fetchAndSetDrink = async (drinkId) => {
        await fetchDrink(drinkId);
        const { drink } = DrinkGlobalState.getState() as DrinkGlobalStateInterface;
        if (drink && Object.keys(drink).length > 0) {
            const drinkName = drink.strDrink;
            const imageUrl = drink.strDrinkThumb;
            setSuggestedDrink(drinkName);
            setDrinkImage(imageUrl);
        } else {
            setSuggestedDrink("No suggested drink available");
        }
    };

    return (
        <div>
            <p className="text-gray-600 font-semibold mb-2">Recommended Drink</p>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                    <div>
                        {drinkImage && <img className="w-16 h-16 mr-4 rounded-full" src={drinkImage} alt={suggestedDrink} />}
                    </div>
                    <div>
                        <p className="text-gray-800 font-bold">{suggestedDrink}</p>
                    </div>
                </div>
                <div>
                    <AddToCartButton article={{ ...drink }} />
                </div>
            </div>
        </div>
    );
};

export default DrinkSuggestion;
