import axios from "axios";
import GlobalState from "./GlobalState";
import { CardTypes } from "../types";
import Card from "./Card";
import { useEffect, useState } from "react";

const Category = () => {
  const URL = GlobalState((state) => state.URL);
  const category = GlobalState((state) => state.globalFoodCategory);
  const [responseData, setResponseData] = useState<CardTypes[]>([]);

  const FetchCategory = async () => {
    const response = await axios.get(`${URL}/categories/${category}/recipes`);

    if (response.status === 200) {
      setResponseData(response.data);
    }
  };

  useEffect(() => {
    FetchCategory();
  }, [category]);

  return (
    <div>
      {responseData.map((foodItem: CardTypes) => (
        <Card key={foodItem._id} CardProps={foodItem} />
      ))}
    </div>
  );
};

export default Category;
