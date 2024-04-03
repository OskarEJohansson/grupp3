/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        searchResults.map((result: any) => (
          <div key={result.id}>
            <img src={result.imageUrl} alt={result.name} />
            <p>{result.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResultsPage;
