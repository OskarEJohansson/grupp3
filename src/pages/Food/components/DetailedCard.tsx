import React, { useState, useEffect } from "react";
import { CardTypes } from "../../../types";
import "../../../App.css";
import FoodGlobalState from "../utils/FoodGlobalState";
import QuantityInput from "../../../components/QuantityInput";
import CommentBox from "../../../components/CommentBox";
import CommentList from "../../../components/CommentList";
import { useComments } from "../../../pages/CommentsGlobalState";

const DetailedCard = ({ onClose }: { onClose: () => void }) => {
  const article = FoodGlobalState((state) => state.article as CardTypes & { id: string });

  const [quantity, setQuantity] = useState(1);
  const { comments, fetchComments, handleSubmit } = useComments(); 

  useEffect(() => {
    if (article?.id) {
      fetchComments(article.id);
    }
  }, [article?.id, fetchComments]);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="detailed-card-container"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h1 className="detailed-card-title">DETAILED CARD</h1>
        <div className="detailed-card-info">
          <img src={article?.imageUrl} alt="Dish" className="card-image" /> <br />
          Title: {article?.title} <br />
          Category: {article?.categories} <br />
          Description: {article?.description} <br />
          Quantity:
          <QuantityInput value={quantity} onChange={handleQuantityChange} />
        </div>
        <CommentBox onSubmit={handleSubmit} />
        <CommentList comments={comments} />
        <button className="back-button" onClick={onClose}>Back</button>
      </div>
    </div>
  );
};

export default DetailedCard;
