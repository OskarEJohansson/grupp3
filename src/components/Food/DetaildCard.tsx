import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../types";
import GlobalState from "../GlobalState";

interface DetailedCardInterface {
  article: CardTypes;
}

const DetailedCard = ({ article }: DetailedCardInterface) => {
  const navigate = useNavigate();
  const useGlobalState = GlobalState((state) => state);

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
      <button onClick={() => navigate(`/${useGlobalState.globalCategory}`)}>
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
