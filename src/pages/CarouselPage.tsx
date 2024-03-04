import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; 



const CarouselPage = () => {

  /* funktionallitet för snurrmenyn 
   const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3
    }; */

    return (
        <div>
            <h1 className="page-header">CarouselMenu header</h1>
            <div className="carousel-container">
              {/* Denna snurrmeny ger fler alternativ för olika rätter / rekommendationer. "Slider" och "Slick" används för detta. */}
              <p>Carousel-menu (snurrmeny)</p>
            </div>
        </div>
    );
}

export default CarouselPage;
