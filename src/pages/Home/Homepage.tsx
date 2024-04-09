import { Link } from "react-router-dom";
import CustomerReviews from "./components/CustomerReviews";
import EatingBurger from "../../assets/images/burger-eating.jpeg";
import Carousel from "./components/Carousel";

const HomePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end font-serif relative">
      <div>
        <div className="flex flex-col justify-center items-center px-4 py-12 md:px-8 relative z-10">
          <div className="w-full md:w-4/5 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:pr-2">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-left text-gray-800 font-sans antialiased mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">Indulge in Culinary Delights</h1>
                <p className="text-base md:text-lg mb-6">Embark on a journey of taste and flavor with our handcrafted menu, meticulously curated by our culinary experts. From savory bites to sweet delights, every dish is a masterpiece waiting to be savored.</p>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <Link to="/category-page">
                    <button className="bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">Explore Food</button>
                  </Link>
                  <Link to="/drink-page">
                    <button className="bg-[#fcdaab] text-white py-2 px-6 rounded-md shadow-md hover:bg-[#e3c499] transition duration-300 ease-in-out">Explore Drinks</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-2 relative">
              <div className="border-4 border-black rounded-full overflow-hidden">
                <img src={EatingBurger} alt="A man eating a burger" className="w-full h-auto md:h-full object-cover" style={{ maxHeight: "80vh" }} /> 
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-gray-100 py-8 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Delightful Dining Experience</h2>
          <p className="text-base md:text-lg text-gray-700">Experience culinary perfection with our carefully crafted menu, curated by top chefs from around the world. Each dish is meticulously prepared using the finest ingredients to tantalize your taste buds and leave you craving for more.</p>
        </section>
        
        <section>
          <div className="max-w-screen-lg mx-auto mt-12">
            <Carousel />
          </div>
        </section>
        
        <section>
          <CustomerReviews />
        </section>
      </div>
    </section>
  );
};

export default HomePage;
