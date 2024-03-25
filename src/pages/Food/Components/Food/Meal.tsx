import Card from "./Card";
import { CardTypes } from "../../../../types";
import FoodGlobalState from "../../Utilities/FoodGlobalState";
import { useEffect } from "react";

const Meal = () => {
  const { category, categoryData, setCategoryData, URL } = FoodGlobalState();

  useEffect(() => {
    setCategoryData(URL, category);
  }, [category]);

  return (
    <div>
      <div>
        <h1>See all meals in category: {category}</h1>
      </div>
      {categoryData.map((article: CardTypes, index: number) => (
        <div key={index}>
          <Card article={article} />
        </div>
      ))}
    </div>
  );
};

export default Meal;
