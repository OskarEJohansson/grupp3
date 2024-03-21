export interface CardTypes {
  _id: string;
  title: string;
  description: string;
  ratings: number[];
  imageUrl: string;
  categories: string[];
  instructions: string[];
  ingredients: [
    {
      name: string;
      amount: number;
      unit: string;
      _id: string;
    }
  ];
}

export interface IngredientsTypes {
  name: string;
  amount: number;
  unit: string;
  _id: string;
}

export interface SubsectionTypes {
  category: string;
  picture: string;
  description: string;
  _id: number;
}
export interface DrinkTypes {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
export interface ApiResponse {
  drinks: DrinkTypes[];
}

export interface DrinkDetails {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string | null;
  strIBA: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strInstructions: string | null;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}