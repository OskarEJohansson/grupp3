// import { useState } from "react";
// import IngredientComponent from "./IngredientComponent";
// import FormGlobalState from "../Utils/FormGlobalState";

// export const InputIngredients = () => {
//   const [componentCount, setComponentList] = useState(1);
//   const { formDataIngredients, setFormDataIngredients } = FormGlobalState();

//   const handleOnClick = () => {
//     setComponentList(componentCount + 1);
//     setFormDataIngredients(formDataIngredients);
//   };

//   return (
//     <div className="container">
//       <div className="form-group">
//         {[...Array(componentCount)].map((index: number) => (
//           <div key={index}>
//             <IngredientComponent />
//           </div>
//         ))}
//         <button onClick={handleOnClick}>Add Ingredient</button>
//       </div>
//     </div>
//   );
// };

// export default InputIngredients;
