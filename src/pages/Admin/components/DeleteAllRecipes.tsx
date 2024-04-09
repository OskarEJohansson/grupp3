import axios from "axios";
import { useState } from "react";

const DeleteAllRecipesButton = () => {
  const url = "https://sti-java-grupp3-mzba2l.reky.se";
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteAllRecipes = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteAllRecipes();
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const deleteAllRecipes = async () => {
    try {
      const response = await axios.get(`${url}/clear`);
      if (response.status === 200) {
        console.log("Deletion successful");
      }
    } catch (error) {
      console.log("Delete all recipes failed", error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-red-500 text-3xl font-bold mb-6">Danger Zone</h1>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
        onClick={handleDeleteAllRecipes}
      >
        Delete all recipes
      </button>
      {showConfirmation && (
        <div className="mt-4">
          <p className="text-gray-700 mb-2">
            Are you sure you want to delete all recipes?
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md mr-2"
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md shadow-md"
            onClick={cancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteAllRecipesButton;
