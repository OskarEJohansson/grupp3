import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => navigate("/admin-page/add-recipe")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Recipe
        </button>
        <button
          onClick={() => navigate("/admin-page/all-recipes")}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          See all recipes
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/admin-page/see-categories")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          See Categories
        </button>
      </div>

      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <h1 className="text-xl font-bold text-center">Admin Page Disclaimer</h1>
        <p className="text-gray-700">
          You are now in <b className="text-red-500">admin</b> view. This
          section is restricted to authorized users only. <br />
          If you are not a member of the Taste Trails staff please navigate your
          way out of this page.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
