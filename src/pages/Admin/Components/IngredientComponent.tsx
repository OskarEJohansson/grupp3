// import FormGlobalState from "../Utils/FormGlobalState";

// export const IngredientComponent = () => {
//   const { setIngredientsName, setIngredientsUnit, setIngredientsAmount } =
//     FormGlobalState();

//   return (
//     <div>
//       <fieldset>
//         <label>Ingredient</label>
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => {
//             setIngredientsName(e.target.value);
//           }}
//         />

//         <label>Amount</label>
//         <input
//           type="number"
//           name="amount"
//           onChange={(e) => setIngredientsAmount(parseInt(e.target.value))}
//         />

//         <label>Unit</label>
//         <input
//           type="text"
//           name="unit"
//           onChange={(e) => setIngredientsUnit(e.target.value)}
//         />
//       </fieldset>
//     </div>
//   );
// };

// export default IngredientComponent;