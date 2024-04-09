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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categoryData.map((article: RecipeTypes, index: number) => (
       <div
       key={index}
       className="rounded-lg shadow-md overflow-hidden border border-gray-300"
     >
       <Card article={article} />
     </div>
      ))}
    </div>
  );
};

export default Recipe;
