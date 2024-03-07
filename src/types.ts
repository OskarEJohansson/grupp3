export interface CardTypes {
  title: string;
  description: string;
  ratings: number[];
  imageUrl: string;
  categories: string[];
  instructions: string[];
  ingredients: [name: string, amount: number, unit: number];
}
