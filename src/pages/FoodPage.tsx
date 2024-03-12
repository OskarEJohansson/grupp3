import { subscribeWithSelector } from "zustand/middleware";
import FetchItem from "../components/FetchItem";
import Subsection from "../components/Subsection";
import { CardTypes, SubsectionTypes } from "../types";

const FoodPage = () => {
  const foodSections = [
    { title: "Meat", picture: "picture", _id: 1 },
    { title: "Veg", picture: "picture", _id: 2 },
  ];

  return (
    <div>
      <div>
        {foodSections.map((foodSection) => (
          <Subsection key={foodSection._id} subsectionProps={foodSection} />
        ))}
      </div>

      <FetchItem />
    </div>
  );
};

export default FoodPage;
