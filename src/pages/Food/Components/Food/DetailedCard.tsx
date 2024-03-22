import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import AddToCartButton from "./AddToCartButton";
import "../../../../App.css";

const DetailedCard = () => {
  const navigate = useNavigate();
  const globalArticle = GlobalState(
    (state) => state.globalArticle as CardTypes
  );
  const { globalCategory } = GlobalState();

  return (
    <div className="detailed-card-container">
      <h1 className="detailed-card-title">DETAILED CARD</h1>
      <div className="detailed-card-info">
        Title: {globalArticle.title} <br />
        Category: {globalArticle.categories} <br />
        Description: {globalArticle.description} <br />
      </div>
      <AddToCartButton article={globalArticle} />
      <button
        className="back-button"
        onClick={() => navigate(`/${globalCategory}`)}
      >
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
