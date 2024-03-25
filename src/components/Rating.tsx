import React, { useState } from 'react';

const Rating = () => {
  const [ratings, setRatings] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setRatings(prevRatings => ({...prevRatings, [rating]: prevRatings[rating] + 1}));
  };

  const totalSum = Object.keys(ratings).reduce((acc, curr) => acc + (parseInt(curr) * ratings[curr]), 0);
  const totalCount = Object.values(ratings).reduce((acc, curr) => acc + curr, 0);
  const average = totalCount === 0 ? 0 : totalSum / totalCount;

  return (
    <div>
      <h2>Rate this</h2>
      {[1, 2, 3, 4, 5].map((rating) => (
        <button key={rating} onClick={() => handleRatingSelect(rating)}>
          {rating}
        </button>
      ))}
      <div>
        <h3>Rating distribution:</h3>
        <ul>
          {[1, 2, 3, 4, 5].map((rating) => (
            <li key={rating}>
              {`${rating} stars: ${ratings[rating]}`}
            </li>
          ))}
          <li><strong>Average Rating:</strong> {average.toFixed(1)}</li>
        </ul>
      </div>
    </div>
  );
};

export default Rating;
