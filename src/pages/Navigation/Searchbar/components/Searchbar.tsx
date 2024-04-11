import SearchbarInput from "./SearchbarInput";
import SearchbarButton from "./SearchbarButton";

const Searchbar = () => {
  return (
    <div className="flex items-center space-x-2">
      <SearchbarInput />
      <SearchbarButton />
    </div>
  );
};

export default Searchbar;
