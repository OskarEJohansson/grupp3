/* The [User] will be met by [food categories] to choose from showing [Picture] and a [Title].

The [food categories] to choose from are [Meat] and [Veg].

[Redirection] will be done by [onClick] [Picture] of [Subsection Meat/Veg]

[Food object] will show [picture], [name], [price] and [symbols]

[food item] must contain [picture], [name], [price] and [symbols[] ].

[food item] should contain [description], [Ingredients[] ], [Tags] and [Ratings].
*/

/* * * TODO * * * /

/* 

- Decide file format for pictures in our objects to set interface type.
- Find out how to store symobles.
- Design Meat/Veg Button
- 


*/

import { useNavigate } from "react-router-dom";

const Food = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate("/food/meat")}>Meat</button>
      </div>

      <div>
        <button onClick={() => navigate("/food/veg")}>Veg</button>
      </div>
    </>
  );
};
export default Food;
