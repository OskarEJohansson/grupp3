import Card from "./Card";
import { CardTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";

const Category = () => {
  const globalState = GlobalState<GlobalStateInterface>((state) => state);

  return (
    <div>
      <div>
        <h1>See all meals in category: {globalState.globalCategory}</h1>
      </div>
      {globalState.globalCategoryData.map(
        (article: CardTypes, index: number) => (
          console.log(article),
          (
            <div key={index}>
              <Card article={article} />
            </div>
          )
        )
      )}
    </div>
  );
};

export default Category;
