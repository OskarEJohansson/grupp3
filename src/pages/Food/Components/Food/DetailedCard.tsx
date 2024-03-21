import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import AddToCartButton from "./AddToCartButton";
import "../../../../App.css"

const DetailedCard = () => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state) => state);
  const article = GlobalState((state) => state.globalArticle as CardTypes);

  return (
    <div className="detailed-card-container">
      <h1 className="detailed-card-title">DETAILED CARD</h1>
      <div className="detailed-card-info">
        Title: {article.title} <br />
        Category: {article.categories} <br />
        Description: {article.description} <br />
      </div>
      <AddToCartButton article={globalState.globalArticle} />
      <button className="back-button" onClick={() => navigate(`/${globalState.globalCategory}`)}>
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
