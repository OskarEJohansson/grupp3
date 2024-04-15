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
    <div>
      {categoryData.map((category: fetchCategoryTypes, index: number) => (
        <div key={index}>
          <div>Category: {category.name}</div>
          <div>Total meals in category: {category.count}</div>
        </div>
      ))}
      <div>
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
