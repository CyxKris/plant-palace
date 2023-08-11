import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect } from 'react';

const Home = () => {

    // Changing the document title
    useEffect(() => {
        document.title = 'PlantPlanet | Home';
    }, []);

    return (
        <>
            <section id="hero">
                <h1>Make your home eco-friendly</h1>
                <div className="hero-image">

                </div>
                <Link to="/shop" className='cta'>SHOP PRODUCTS</Link>
            </section>
        </>
    );
}
export default Home;