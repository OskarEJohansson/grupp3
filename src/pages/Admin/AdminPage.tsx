import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/add-recipe")}> Add Recipe</button>
      <button onClick={() => navigate("/all-recipes")}>See all recipes</button>
    </div>
  );
};

export default AdminPage;
