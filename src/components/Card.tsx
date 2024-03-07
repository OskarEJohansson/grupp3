import { CardTypes } from "../types";
import axios from "axios";

interface CardInterface {
  CardProps: CardTypes;
}

const Card = (CardPropps: CardInterface) => {
  const foodItem = async () => {
    const response = await axios.get(
      "https://sti-java-grupp3-mzba2l.reky.se/recepies"
    );

    if (response.status === 200) {
      response.data.map();
    }
  };

  return (
    <>
      <div>
        <p>Picture</p>
        <p>Title</p>
        <p>Symbols</p>
        <p>Price</p>
      </div>
    </>
  );
};

export default Card;
