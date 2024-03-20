import '../../App.css';
import CarouselPage from './components/Carousel';

const HomePage = () => {
    return (
        <>
        <section className='home-body-container'>
            <div className='home-body-content'>
                <div className='home-column'>
                    <h1 className="home-heading">Welcome</h1>
                </div>   
            </div>
        </section>
        <CarouselPage/>  
        
        </>
       
    );
}

export default HomePage;

