import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/admin-page/add-recipe")}>
        Add Recipe
      </button>
      <button onClick={() => navigate("/admin-page/all-recipes")}>
        See all recipes
      </button>
    </div>
  );
};

export default AdminPage;
