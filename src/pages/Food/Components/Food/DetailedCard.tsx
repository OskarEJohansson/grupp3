import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import AddToCartButton from "./AddToCartButton";

const DetailedCard = () => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state) => state);
  const article = GlobalState((state) => state.globalArticle as CardTypes);

  return (
    <div>
      <h1>DETAILED CARD</h1>
      <div>
        Title: {article.title} <br />
        Category: {article.categories} <br />
        Description: {article.description} <br />
      </div>
      <AddToCartButton article={globalState.globalArticle} />
      <button onClick={() => navigate(`/${globalState.globalCategory}`)}>
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
