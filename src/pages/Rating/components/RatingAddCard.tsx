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
    <div>
      <h2>Add rating</h2>

      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <button key={index} value={index} onClick={handleOnClick}>
            {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingAddCard;
