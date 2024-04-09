/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      {searchResults.length === 0 ? (
        <p className="text-lg">No results found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((result: any) => (
            <div key={result.id} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={result.imageUrl}
                alt={result.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">{result.name}</p>
                <p className="text-gray-700">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
