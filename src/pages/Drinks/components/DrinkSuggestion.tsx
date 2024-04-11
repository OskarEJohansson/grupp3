import { useEffect, useState } from "react";
import DrinkGlobalState, { DrinkGlobalStateInterface } from "../utils/DrinkGlobalState";
import { useParams } from "react-router-dom";
import DrinkAddToCartButton from "./DrinkAddToCartButton";

const DrinkSuggestion = () => {
    const [suggestedDrink, setSuggestedDrink] = useState("Test");
    const [drinkImage, setDrinkImage] = useState("");

    const { fetchDrink } = DrinkGlobalState();
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            console.log("Category:", category);
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
        <div className="suggested-drink">
            <p>
                Recommended Drink: {suggestedDrink}
                {drinkImage && <img src={drinkImage} alt={suggestedDrink} />}
            </p>
            <DrinkAddToCartButton />
        </div>
    );
};

export default DrinkSuggestion;