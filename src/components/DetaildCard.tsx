import { CardTypes } from "../types";

interface DetailedCardInterface {
  article: CardTypes;
}

const DetailedCard = ({ article }: DetailedCardInterface) => {
  return (
    <div>
      <h1>DETAILED CARD</h1>
      {article && (
        <div>
          Title: {article.title} <br />
          Category: {article.categories} <br />
          Description: {article.description} <br />
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
