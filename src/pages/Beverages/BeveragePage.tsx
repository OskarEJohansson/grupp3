import "../../App.css";
import BeverageButton from "./Components/BeverageButton";
import BeverageCategory from "./Components/BeverageCategory";

const BeveragePage = () => {
  const categories = [
    { category: "Alcoholic Drinks" },
    { category: "Non Alcoholic Drinks" },
  ];

  return (
    <div>
      <BeverageCategory />
      {categories.map((category, index: number) => (
        <div key={index}>
          <BeverageButton category={category.category} />
        </div>
      ))}
    </div>
  );
};

export default BeveragePage;
