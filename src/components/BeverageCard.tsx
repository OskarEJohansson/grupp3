import { DrinkDetails, DrinkTypes } from "../types";
import GlobalState,{GlobalStateInterface} from "./GlobalState";

interface DrinkCardInterface{
    clickedCard:DrinkDetails;
}

const BeverageCard = ({ clickedCard }: DrinkCardInterface) => {
  const useGlobalState = GlobalState<GlobalStateInterface>((state: any) => state);

  const handleOnClick = () => {
    useGlobalState.setDrinkId(clickedCard.idDrink)
    console.log("working")
  };
    return (
      <><div onClick={handleOnClick}>
        <h1>Title: {clickedCard.strDrink}</h1>
        <div>
            Photo: {clickedCard.strDrinkThumb}    
            Description: {clickedCard.strInstructions}
        </div>
        </div>
      </>
    );
  };



export default BeverageCard;