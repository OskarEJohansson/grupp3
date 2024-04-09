import { useState } from "react";
import { RecipeTypes } from "../../../types";
import AddToCartButton from "./RecipeAddToCartButton";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import DetailedCard from "./RecipeDetailedCard";
import UpdateFoodButton from "../../Update/component/UpdateRecipeButton";

interface RecipeCardInterface {
  article: RecipeTypes;
}

const RecipeCard = ({ article }: RecipeCardInterface) => {
  const { setArticle } = RecipeGlobalState();
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setArticle(article);
    setShowModal(true);
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
        <UpdateFoodButton article={article} />
        <AddToCartButton article={article} />
      </div>
      {showModal && <DetailedCard onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default RecipeCard;
