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
      <button value="1" onClick={handleOnClick}>
        1
      </button>
      <button value="2" onClick={handleOnClick}>
        2
      </button>
      <button value="3" onClick={handleOnClick}>
        3
      </button>
      <button value="4" onClick={handleOnClick}>
        4
      </button>
      <button value="5" onClick={handleOnClick}>
        5
      </button>
    </div>
  );
};

export default RatingAddCard;
