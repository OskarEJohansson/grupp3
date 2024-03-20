import { useNavigate } from "react-router-dom";
import Subsection from "./Components/Food/Subsection";
import { foodSections } from "../../assets/foodSection";

const CategoryPage = () => {
  const foodSection = foodSections;
  const navigate = useNavigate();

  return (
    <div>
      <h1>FOOD CATEGORIES</h1>
      {foodSection.map((foodSection) => (
        <Subsection key={foodSection._id} subsectionProps={foodSection} />
      ))}
      <button onClick={() => navigate(`/`)}>Back</button>
    </div>
  );
};

export default CategoryPage;
