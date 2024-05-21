export interface RecipeTypes {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  timeInMins: number;
  price: number;
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
  avgRating: number;
}

export interface IngredientsTypes {
  name: string;
  amount: number;
  unit: string;
  _id: string;
}

export interface CategoryTypes {
  category: string;
  picture: string;
  description: string;
  _id: number;
  allergen: string;
  allergenPicture: string;
}

export interface fetchCategoryTypes {
  name: string;
  count: number;
}

export interface DrinkTypes {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
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

export interface CommentTypes {
  _id?: string;
  comment: string;
  name: string;
}

export interface Letter {
  letter: string;
}

export const StaticLetters: Letter[] = [
  { letter: "a" },
  { letter: "b" },
  { letter: "c" },
  { letter: "d" },
  { letter: "e" },
  { letter: "f" },
  { letter: "g" },
  { letter: "h" },
  { letter: "i" },
  { letter: "j" },
  { letter: "k" },
  { letter: "l" },
  { letter: "m" },
  { letter: "n" },
  { letter: "o" },
  { letter: "p" },
  { letter: "q" },
  { letter: "r" },
  { letter: "s" },
  { letter: "t" },
  { letter: "v" },
  { letter: "w" },
  { letter: "x" },
  { letter: "y" },
  { letter: "z" },
];
