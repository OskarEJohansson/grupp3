import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../components/GlobalState";
import { CardTypes } from "../../../../types";

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
