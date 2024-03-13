export interface CardTypes {
  title: string;
  description: string;
  ratings: number[];
  imageUrl: string;
  categories: string[];
  instructions: string[];
  ingredients: [name: string, amount: number, unit: number];
}
export interface DrinkTypes{
  strDrink:string;
  strDrinkThumb:string;
  idDrink:string;
}
export interface ApiResponse{
  drinks:DrinkTypes[];
}