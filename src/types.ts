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
  title: string;
  picture: string;
  description: string;
  _id: number;
}
export interface DrinkTypes{
  strDrink:string;
  strDrinkThumb:string;
  idDrink:string;
}
export interface ApiResponse{
  drinks:DrinkTypes[];
}