import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { RecipeTypes } from "../../../types";
import CarouselGlobalState from "../utils/CarouselGlobalState";
import { FaStar } from "react-icons/fa";
import RecipeAddToCartButton from "../../Recipe/components/RecipeAddToCartButton";

const Carousel = () => {
  const { ratingList, filterRatingList } = CarouselGlobalState();
  const stop = "";

  useEffect(() => {
    filterRatingList();
    console.log("RATINGLIST", ratingList);
  }, [stop]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="max-w-screen-lg mx-auto mt-8 relative">
        <h1 className="text-center text-6xl font-bold mb-12">
          Highest ratings by our users
        </h1>
        <Slider {...settings} className="w-full">
          {ratingList.map((recipe: RecipeTypes, index: number) => (
            <div key={index}>
              <div className="w-full flex justify-center">
                <div className="overflow-hidden transition duration-300 ease-in-out p-1 relative">
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl relative">
                    <img
                      className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                      src={recipe.imageUrl}
                      alt={recipe.title} 
                    />
                    <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 text-black font-semibold rounded-b-lg h-16 w-full flex items-center justify-between px-10">
                      <p className="pl-4">{recipe.title}</p>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span>{recipe.avgRating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center"><RecipeAddToCartButton article={recipe} /></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
