import DrinkButton from "./DrinkButton";

const DrinkCategory = () => {
  const categories = ["Alcoholic", "NonAlcoholic"];

  return (
    <div>
      {categories.map((category, index: number) => (
        <div key={index}>
          <DrinkButton category={category} />
        </div>
      ))}
    </div>
  );
};

export default DrinkCategory;
