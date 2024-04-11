import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect } from "react";
import { RecipeTypes } from "../../../types";
import CarouselGlobalState from "../utils/CarouselGlobalState";

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
        <h1 className="text-center text-3xl font-bold mb-6">
          Most Recommended
        </h1>
        <Slider {...settings} className="w-full">
          {ratingList.map((recipe: RecipeTypes, index: number) => (
            <div key={index}>
              <div className="w-full flex justify-center">
                <div className="overflow-hidden transition duration-300 ease-in-out p-1">
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                    <img
                      className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                      src={recipe.imageUrl}
                      alt="Carbonara"
                    />
                  </div>
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
