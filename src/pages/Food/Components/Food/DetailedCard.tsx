import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import AddToCartButton from "./AddToCartButton";

const DetailedCard = () => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state) => state);
  const globalStateArticle = GlobalState(
    (state) => state.globalArticle as CardTypes
  );

  return (
    <div>
      <h1>DETAILED CARD</h1>
      {globalStateArticle && (
        <div>
          Title: {globalStateArticle.title} <br />
          Category: {globalStateArticle.categories} <br />
          Description: {globalStateArticle.description} <br />
        </div>
      )}
      <AddToCartButton article={globalState.globalArticle} />
      <button onClick={() => navigate(`/${globalState.globalCategory}`)}>
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
