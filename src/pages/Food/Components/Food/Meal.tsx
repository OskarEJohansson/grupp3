import Card from "./Card";
import { CardTypes } from "../../../../types";
import GlobalState from "../../../../assets/Utilities/GlobalState";

const Meal = () => {
  const { globalCategory, globalCategoryData } = GlobalState();

  return (
    <div>
      <div>
        <h1>See all meals in category: {globalCategory}</h1>
      </div>
      {globalCategoryData.map((article: CardTypes, index: number) => (
        <div key={index}>
          <Card article={article} />
        </div>
      ))}
    </div>
  );
};

export default Meal;
