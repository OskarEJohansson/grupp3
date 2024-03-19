import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import GlobalState, { GlobalStateInterface } from "../../../../assets/Utilities/GlobalState";

interface DetailedCardInterface {
  article: CardTypes;
}

const DetailedCard = ({ article }: DetailedCardInterface) => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state) => state);

  return (
    <div>
      <h1>DETAILED CARD</h1>
      {article && (
        <div>
          Title: {article.title} <br />
          Category: {article.categories} <br />
          Description: {article.description} <br />
        </div>
      )}
      <button onClick={() => navigate(`/${globalState.globalCategory}`)}>
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
