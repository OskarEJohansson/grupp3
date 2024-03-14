import { DrinkDetails } from "../types";

interface DrinkCardInterface{
    CardProps:DrinkDetails;
}

const BeverageCard = ({ CardProps }: DrinkCardInterface) => {
    return (
      <>
        <h1>Title: {CardProps.strDrink}</h1>
        <div>
            Photo: {CardProps.strDrinkThumb}    
            
        </div>
      </>
    );
  };

export default BeverageCard;