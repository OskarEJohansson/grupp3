import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../App.css'
import Slider from 'react-slick'



const CarouselPage = () => {

  // funktionallitet för snurrmenyn 
  
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
        <div>
            <h1 className="page-header">Most recommended</h1>
            <div className="carousel-container">
              <Slider {...settings}>
                <div>
                  <img className='carousel-container-img' src="https://www.zeta.nu/app/uploads/2016/06/Pasta-Carbonara-scaled.jpg" alt="Carbonara" />
                </div>
                <div>
                  <img className='carousel-container-img'src="https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1692000872/cloud/287547.jpg" alt="Carbonara" />
                </div>
                <div>
                  <img className='carousel-container-img'src="https://cdn.discordapp.com/attachments/1183881495958528061/1217783406520176730/68853872-d292bcc5d6ac45b8a33e3c8002cba32c.jpg?ex=6605482d&is=65f2d32d&hm=e9d4c63909c28afe20cfa5b916f9ea375a06680d6f3a1727676203677a43b745&" alt="Carbonara" />
                </div>
                <div>
                  <img className='carousel-container-img'src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg" alt="Carbonara" />
                </div>
              </Slider>  
            </div>
        </div>
    );
}

export default CarouselPage;
