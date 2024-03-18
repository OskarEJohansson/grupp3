import GlobalState, { GlobalStateInterface } from "../GlobalState";
import { CardTypes } from "../../types";
import Card from "./Card";

const Category = () => {
  const useGlobalState = GlobalState<GlobalStateInterface>((state) => state);

  return (
    <div>
      <div>
        <h1>See all meals in category: {useGlobalState.globalCategory}</h1>
      </div>
      {useGlobalState.globalCategoryData.map(
        (article: CardTypes, index: number) => (
          <div key={index}>
            <Card article={article} />
          </div>
        )
      )}
    </div>
  );
};

export default Category;
