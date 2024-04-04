import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeTypes } from "../../../types";
import Card from "./RecipeCard";
import RecipeGlobalState from "../utils/RecipeGlobalState";

const Recipe = () => {
  const { category } = useParams<{ category: string }>();
  const { categoryData, setCategoryData, URL } = RecipeGlobalState();

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
      {categoryData.map((article: RecipeTypes, index: number) => (
        <div key={index}>
          <Card article={article} />
        </div>
      ))}
    </div>
  );
};

export default Recipe;
