import BeverageButton from "./BeverageButton";

const BeverageCategory = () => {
  const categories = [{ category: "Alcoholic" }, { category: "NonAlcoholic" }];

  return (
    <div>
      {categories.map((category, index: number) => (
        <div key={index}>
          <BeverageButton category={category.category} />
        </div>
      ))}
    </div>
  );
};

export default BeverageCategory;
