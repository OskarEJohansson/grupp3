import { useNavigate } from "react-router-dom";
import Subsection from "./Components/Food/Subsection";

const CategoryPage = () => {
  const navigate = useNavigate();

  const foodSections = [
    {
      category: "meat",
      picture:
        "https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446-800x450.jpg",
      description: "Meat section",
      _id: 1,
    },
    {
      category: "veg",
      picture:
        "https://www.thespruceeats.com/thmb/h3qLzZSITlnTJblh0s7OFmpMHAs=/6720x4480/filters:fill(auto,1)/green-vegetarian-buddha-bowl-salad-with-vegetables-and-quinoa--spinach--avocado--cucumbers--tomatoes--carrots--radishes--chickpeas-with-sesame-seeds-941023792-5acaca533128340037068ad3.jpg",
      description: "Veg section",
      _id: 2,
    },
  ];

  return (
    <div>
      <h1>FOOD CATEGORIES</h1>
      {foodSections.map((foodSection) => (
        <Subsection key={foodSection._id} subsectionProps={foodSection} />
      ))}
      <button onClick={() => navigate(`/`)}>Back</button>
    </div>
  );
};

export default CategoryPage;