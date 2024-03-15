import { CardTypes } from "../types";

interface DetailedCardInterface {
  article: CardTypes;
}

const DetailedCard = ({ article }: DetailedCardInterface) => {
  console.log(article);
  return (
    <div>
      <h1>DETAILED CARD</h1>
      {article && (
        <div>
          {article.title}
          {article.categories}
          {article.description}
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
