import DrinkButton from "./DrinkButton";

const DrinkCategory = () => {
  const categories = ["Alcoholic", "NonAlcoholic"];

  return (
    <div className="drink-category-container">
      {categories.map((category, index: number) => (
        <div key={index}>
          <DrinkButton category={category} />
        </div>
      ))}
    </div>
  );
};

export default DrinkCategory;
