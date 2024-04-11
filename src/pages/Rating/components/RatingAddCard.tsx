import RatingGlobalState from "../utils/RatingGlobalState";
import CommentsGlobalState from "../../Comments/utils/CommentsGlobalState";

const RatingAddCard = () => {
  const { recipeId } = CommentsGlobalState();
  const { postRating, fetchAverageRating } = RatingGlobalState();

  const handleOnClick = async (e: any) => {
    const { value } = e.target;
    await postRating(recipeId, value);
    await fetchAverageRating(recipeId);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="container mx-auto p-4 bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4 text-center">Add rating</h2>

        <div className="flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              value={index}
              onClick={handleOnClick}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              {index}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingAddCard;
