import AdminGlobalState from "../utils/AdminGlobalState";
import { fetchCategoryTypes } from "../../../types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminCategoryCard = () => {
  const { fetchCategoryData, categoryData } = AdminGlobalState();
  const navigate = useNavigate();

  let fetchData = true;

  useEffect(() => {
    if (fetchData === true) {
      fetchCategoryData();
      fetchData = false;
    }
  }, [fetchData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center text-3xl font-bold mb-4">All Categories</h1>
      {categoryData.map((category: fetchCategoryTypes, index: number) => (
        <div key={index} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="font-bold">Category: {category.name}</div>
            <div>Total meals in category: {category.count}</div>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button
          className="mt-8 bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm"
          onClick={() => navigate(`/admin-page`)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AdminCategoryCard;
