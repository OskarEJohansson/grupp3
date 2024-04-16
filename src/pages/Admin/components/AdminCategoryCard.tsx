import AdminGlobalState from "../utils/AdminGlobalState";
import { fetchCategoryTypes } from "../../../types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminCategoryCard = () => {
  const { fetchCategoryData, categoryData } = AdminGlobalState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetchCategoryData();
      setLoading(false);
    }
  }, [fetchCategoryData, loading]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {categoryData.map((category: fetchCategoryTypes, index: number) => (
        <div
          key={index}
          className={`bg-${index % 2 === 0 ? 'blue' : 'green'}-100 rounded-md p-6 shadow-md mb-4 w-80`}
        >
          <h2 className="text-lg font-semibold mb-4">Category: {category.name}</h2>
          <div className="text-gray-600">Total meals: {category.count}</div>
        </div>
      ))}
      <button
        className="bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm"
        onClick={() => navigate(`/admin-page`)}
      >
        Back
      </button>
    </div>
  );
};

export default AdminCategoryCard;
