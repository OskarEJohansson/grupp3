import { BeverageDetails } from "../../../types";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const DetailedBeverageCard = () => {
  const { beverage } = BeverageGlobalState();

  return (
    <div>
      {beverage.map((article: BeverageDetails, index: number) => (
        <div key={index}>
          <div> Beverage: {article.strAlcoholic}</div>
          <div>Category: {article.strCategory}</div>
          <div>Title: {article.strDrink}</div>
          <img src={article.strDrinkThumb} alt="Picture of drink" width={300} />

          <section>
            Served in: {article.strGlass}
            <br />
            Ingredients: {article.strIngredient1}
            <br />
            {article.strIngredient2}
          </section>
        </div>
      ))}
    </div>
  );
};

export default DetailedBeverageCard;
