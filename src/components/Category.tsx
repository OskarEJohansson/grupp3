import axios from "axios";
import GlobalState from "./GlobalState";
import { CardTypes } from "../types";
import Card from "./Card";
import { useEffect, useState } from "react";

const Category = () => {
  const URL = GlobalState((state) => state.URL);
  const category = GlobalState((state) => state.globalFoodCategory);
  const [categoryData, setCategoryData] = useState<CardTypes[]>([]);

  const FetchCategory = async () => {
    try {
      const response = await axios.get(`${URL}/categories/${category}/recipes`);

      if (response.status === 200) {
        setCategoryData(response.data);
      } else console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchCategory();
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

export default Category;
