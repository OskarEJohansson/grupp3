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
*/

import Subsection from "./Subsection";
import { SubsectionTypes } from "../types";

interface itemsInterface {
  itemProps: SubsectionTypes;
}

const Item = ({ itemProps }: itemsInterface) => {
  return (
    <div>
      <Subsection key={itemProps._id} subsectionProps={itemProps} />
    </div>
  );
};

export default Item;
