import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={() => navigate("/admin-page/add-recipe")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Recipe
      </button>
      <button
        onClick={() => navigate("/admin-page/all-recipes")}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        See all recipes
      </button>
    </div>
  );
};

export default AdminPage;
