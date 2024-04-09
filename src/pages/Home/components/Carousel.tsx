import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 

  return (
    <div className="max-w-screen-lg mx-auto mt-8 relative">
      <h1 className="text-center text-3xl font-bold mb-6">Most Recommended</h1>
      <div className="w-full flex justify-center">
        <Slider {...settings} className="w-full">
          <div className="overflow-hidden transition duration-300 ease-in-out p-1">
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
              <img className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out" src="https://www.zeta.nu/app/uploads/2016/06/Pasta-Carbonara-scaled.jpg" alt="Carbonara" />
            </div>
          </div>
          <div className="overflow-hidden transition duration-300 ease-in-out p-1">
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
              <img className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out" src="https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1692000872/cloud/287547.jpg" alt="Carbonara" />
            </div>
          </div>
          <div className="overflow-hidden transition duration-300 ease-in-out p-1">
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
              <img className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out" src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg" alt="Carbonara" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
