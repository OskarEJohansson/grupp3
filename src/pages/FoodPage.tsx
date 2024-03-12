import FetchItem from "../components/FetchItem";
import Subsection from "../components/Subsection";

const FoodPage = () => {
  const foodSections = [
    {
      title: "Meat",
      picture:
        "https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446-800x450.jpg",
      description: "Meat section",
      _id: 1,
    },
    {
      title: "Veg",
      picture:
        "https://www.thespruceeats.com/thmb/h3qLzZSITlnTJblh0s7OFmpMHAs=/6720x4480/filters:fill(auto,1)/green-vegetarian-buddha-bowl-salad-with-vegetables-and-quinoa--spinach--avocado--cucumbers--tomatoes--carrots--radishes--chickpeas-with-sesame-seeds-941023792-5acaca533128340037068ad3.jpg",
      description: "Veg section",
      _id: 2,
    },
  ];

  return (
    <div>
      {foodSections.map((foodSection) => (
        <Subsection key={foodSection._id} subsectionProps={foodSection} />
      ))}
    </div>
  );
};

export default FoodPage;
