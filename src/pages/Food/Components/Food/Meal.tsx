import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardTypes } from "../../../../types";
import Card from "./Card";
import FoodGlobalState from "../../Utilities/FoodGlobalState";

const MealPage = () => {
  const { category } = useParams<{ category: string }>();
  const { categoryData, setCategoryData, URL } = FoodGlobalState();

  useEffect(() => {
    if (category) {
      setCategoryData(URL, category);
    }
  }, [URL, category, setCategoryData]);

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

export default MealPage;
