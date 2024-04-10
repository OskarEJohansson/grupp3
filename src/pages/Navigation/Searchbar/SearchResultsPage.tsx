import SearchbarGlobalState from './utils/SearchbarGlobalState';
import { DrinkDetails } from '../../../types';
import DrinkAddToCartButton from '../../Drinks/components/DrinkAddToCartButton';

const SearchResultsPage = () => {
  const { searchResultList } = SearchbarGlobalState();
  console.log(searchResultList);

  return (
    <div>
      {searchResultList.length === 0 ? (
        <div>
          <h1>No search results found</h1>
          <p>Your search did not find any corresponding articles</p>
        </div>
      ) : (
        searchResultList.map((article: DrinkDetails, index: number) => (
          <div key={index}>
            {article.strDrink}
            <img src={article.strDrinkThumb} alt="Drink picture" />
            <div>
              <DrinkAddToCartButton article={article} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResultsPage;
