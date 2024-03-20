import Card from "./Card";
import { CardTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";

const Meal = () => {
  const globalState = GlobalState<GlobalStateInterface>((state) => state);

  return (
    <div>
      <div className="movie-list">
        <h1>See all meals in category: {globalState.globalCategory}</h1>
      </div>
      {globalState.globalCategoryData.map(
        (article: CardTypes, index: number) => (
          <div key={index}>
            <Card article={article} />
          </div>
        )
      )}
    </div>
  );
};

export default Meal;
