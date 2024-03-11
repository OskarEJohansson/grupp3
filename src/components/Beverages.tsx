import { useEffect, useState } from "react";
import "../App.css";

//The [User] will be met by [Bevereges categories] to choose from [Picture] and a [Title].

//The [Bevereges categories] to choose from are [Alcoholic] [Non alcoholic].

//[Redirection] will be done by [onClick] [picture] of [Subsection Alcoholic/Non Alcoholic].

//[Beverage object] will show [picture], [name], [price]

const Beverages = () => {
  const [selectedType, setSelectedType] = useState("mixed");

  /* const [drinks,setDrinks] = useState([]);
  //useEffect fetches drinks data when selectedType changes.
  useEffect(()=>{
    //A function to fetch drinks based on selectedType.
    const fetchDrinks = async (type)=> {
        //Using -let- allows me to set the url trough an if() based on selectedType.
        let url;
        if (type === 'alcoholic'){
            url = www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
        }else if(type === 'nonAlcoholic'){
            url === www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
        }else{
            url === www.thecocktaildb.com/api/json/v1/1/random.php
        }
        try {
            //fetch the data from the API.
            const response = await fetch(url);
            //parse the data(json)
            const data = await response.json();
            //Update the drinks state with the fetched data
            setDrinks(data);
        } catch (error) {
            console.log('Error fetching drinks', error)
        }
    }
  }) */

  return (
    <div>
      <h1>BEVERAGES</h1>
      <div className="alcoholicChoiceBtns">
        <button onClick={() => setSelectedType("mixed")}>MIXED</button>
        <button onClick={() => setSelectedType("alcoholic")}>ALCOHOLIC</button>
        <button onClick={() => setSelectedType("nonAlcoholic")}>NON ALCOHOLIC</button>
      </div>
      <div className="imageContainer">
        {selectedType === "mixed" && (
          <img
            src="https://zinniahealth.com/_next/image?url=https%3A%2F%2Fcdn.zinniahealth.com%2Fwp-content%2Fuploads%2F20230322133115%2Fshutterstock_284143052.jpg&w=3840&q=75"
            alt="Mixed Image"
          />
        )}
        {selectedType === "alcoholic" && (
          <img
            src="https://www.tasteofhome.com/wp-content/uploads/2017/12/FB_shutterstock_438408706.jpg"
            alt="Alcoholic Image"
          />
        )}
        {selectedType == "nonAlcoholic" && (
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/tc-na-beer-1600271044.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*"
            alt="Non Alcoholic Image"
          />
        )}
      </div>
    </div>
  );
};

export default Beverages;
