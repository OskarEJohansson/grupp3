/* The [User] will be met by [food categories] to choose from showing [Picture] and a [Title].

The [food categories] to choose from are [Meat] and [Veg].

[Redirection] will be done by [onClick] [Picture] of [Subsection Meat/Veg]

[Food object] will show [picture], [name], [price] and [symbols]

[food item] must contain [picture], [name], [price] and [symbols[] ].

[food item] should contain [description], [Ingredients[] ], [Tags] and [Ratings].
*/

/* * * TODO * * * /

/* Decide file format for pictures in our objects to set interface type */

import { useNavigate } from "react-router-dom";

const Food = () => {
  const navigate = useNavigate();
  const meat = "Meat";
  const veg = "Veg";

  const handleMeatClick = () => {
    navigate("/food/meat");
  };

  const handleVegClick = () => {
    navigate("/food/veg");
  };

  return (
    <>
      <div>
        <button onClick={handleMeatClick}>{meat}</button>
      </div>

      <div>
        <button onClick={handleVegClick}> {veg}</button>
      </div>
    </>
  );
};
export default Food;
