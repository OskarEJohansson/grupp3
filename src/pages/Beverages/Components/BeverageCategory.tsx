import BeverageButton from "./BeverageButton";

const BeverageCategory = () => {
  const categories = ["Alcoholic", "NonAlcoholic"];

  return (
    <div>
      {categories.map((category, index: number) => (
        <div key={index}>
          <BeverageButton category={category} /> 
        </div>
      ))}
    </div>
  );
};

export default BeverageCategory;
