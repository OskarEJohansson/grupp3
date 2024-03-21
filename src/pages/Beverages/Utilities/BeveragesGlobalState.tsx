import { create } from "zustand";
import { DrinkDetails, DrinkTypes } from "../../../types";
import axios from "axios";
export interface BeverageGlobalStateInterface {
  drink: [];
  drinkList: Object[];
  setDrink: (Object: DrinkDetails) => void;
  fetchDrink: (drinkId:string) => void;
  fetchAlcoholicDrinks:([]) => void;
}

const BeverageGlobalState = create<BeverageGlobalStateInterface>((set) => ({
  drink: [],
  drinkList: [],



  setDrink: (article:any) => {
    set(() => ({
      drink: article,
    }));
  },
  fetchDrink: async (drinkId:string)=> {
        let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
        try{
            const response = await axios.get(`${url}${drinkId}`)
            if(response.status === 200){
                console.log("response.data",response.data)
                set(()=>({
                    drink:response.data
                }));
            }
            console.log("url",`${url}${drinkId}`)
        }catch(error){
            console.error("Error fetching drink", error)
        }
    },
    fetchAlcoholicDrinks: async ([])=>{
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
        try{
            const response = await axios.get(`${url}`)
            if(response.status === 200){
                set(()=>({
                    drinkList:response.data
                }))
            }
        }catch(error){
            console.error("Error fetching data", error)
        }
        
    }
}));

export default BeverageGlobalState;
