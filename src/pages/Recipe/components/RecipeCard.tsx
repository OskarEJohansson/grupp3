import { useState } from "react";
import { RecipeTypes } from "../../../types";
import AddToCartButton from "./RecipeAddToCartButton";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import DetailedCard from "./RecipeDetailedCard";
import { useNavigate } from "react-router-dom";
import CommentsGlobalState from "../../Comments/utils/CommentsGlobalState";

interface RecipeCardInterface {
  article: RecipeTypes;
  index: number;
}

const RecipeCard = ({ article, index }: RecipeCardInterface) => {
  const { setArticle } = RecipeGlobalState();
  const { setRecipeId, setRecipe } = CommentsGlobalState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    setArticle(article);
    setShowModal(true);
  };

  const commentHandleOnClick = () => {
    setRecipeId(article._id);
    setRecipe(article);
    navigate("/category-page/comments");
  };

  return (
    <div className="p-4 mb-4">
      <div>
        <div className="text-xl font-semibold mb-2">{article.title}</div>
        <img
          onClick={handleOnClick}
          src={article.imageUrl}
          alt="PICTURE OF DISH"
          className="cursor-pointer rounded-md mb-2"
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
        <div className="text-lg mb-2">Categories: {article.categories}</div>
      </div>
      <div className="mt-2">Price: {article.price} :-</div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <AddToCartButton article={article} />
          <button
            onClick={commentHandleOnClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
          >
            Comments
          </button>
        </div>
      </div>
      {showModal && (
        <DetailedCard onClose={() => setShowModal(false)} index={index} />
      )}
    </div>
  );
};

export default RecipeCard;
