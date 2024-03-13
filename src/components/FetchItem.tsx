import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { CardTypes } from "../types";

const FetchItem = () => {
  var [responseData, setResponsdata] = useState<CardTypes[]>([]);

  const foodItem = async () => {
    const response = await axios.get(
      "https://sti-java-grupp3-mzba2l.reky.se/recipes"
    );

    if (response.status === 200) {
      setResponsdata(response.data);
    }
  };

  useEffect(() => {
    foodItem();
  }, []);

  return (
    <div>
      {responseData.map((object) => (
        <Card key={object._id} CardProps={object} />
      ))}
      <br />
    </div>
  );
};

export default FetchItem;
