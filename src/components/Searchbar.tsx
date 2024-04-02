import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BeverageGlobalState from '../pages/Beverages/Utilities/BeveragesGlobalState';
import FoodGlobalState from '../pages/Food/Utilities/FoodGlobalState';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResultsFound, setSearchResultsFound] = useState(true);
  const navigate = useNavigate();
  const { fetchBeverage } = BeverageGlobalState();
  const { fetchFood, categoryData, URL } = FoodGlobalState();

  //useState med hämtad data

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    try {
        //kategorisering (if-stas)
      fetchFood(URL);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResultsFound(false); 
    }
    console.log(categoryData)
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {!searchResultsFound && <p>Nothing matched your search.</p>}
    </div>
  );
};

export default SearchBar;
