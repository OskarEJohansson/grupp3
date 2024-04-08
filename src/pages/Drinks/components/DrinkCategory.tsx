import DrinkButton from "./DrinkButton";

const DrinkCategory = () => {
  const categories = ["Alcoholic", "NonAlcoholic"];

  return (
    <div className="drink-category-container">
<<<<<<< HEAD
=======
      <h1>Drinks</h1>
>>>>>>> a89725dd9a986280e6fec112b40162ba0de420a5
      {categories.map((category, index: number) => (
        <div key={index}>
          <DrinkButton category={category} />
        </div>
      ))}
    </div>
  );
};

export default DrinkCategory;
