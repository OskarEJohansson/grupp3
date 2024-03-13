import '../App.css';
import CarouselPage from './CarouselPage';

const HomePage = () => {
    return (
        <>
        <section className='home-body-container'>
            <div className='home-body-content'>
                <div className='home-column'>
                    <h1 className="home-heading">Welcome</h1>
                    <p className="home-text">Most recommended</p>
                </div>   
            </div>
        </section>
        <CarouselPage/>  
        
        </>
       
    );
}

export default HomePage;

