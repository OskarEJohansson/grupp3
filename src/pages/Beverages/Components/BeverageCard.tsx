import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";
import AddToCartButton from "../../Food/Components/Food/AddToCartButton";
import DetailedBeverageCard from "./DetailedBeverageCard";

const BeverageCard = () => {

  const { beverageList, fetchAlcoholicBeverage, fetchNonAlcoholicBeverage, setBeverage } = BeverageGlobalState();
  const { category } = useParams(); 
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = (beverage: any) => {
    setBeverage(beverage);
    setShowModal(true); 
  };

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
          <img onClick={() => handleOnClick(beverage)}
          src={beverage.strDrinkThumb} 
          alt={beverage.strDrink}
          width={300} />
        </div>
      ))}
      <AddToCartButton />
      { showModal && <DetailedBeverageCard onClose={() => setShowModal(false)} />}
    </div>
  );
}; 

export default BeverageCard;


