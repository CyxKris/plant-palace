import './Shop.css';
import FormSearch from './FormSearch';

// ?JSX IMPORTS
import { useEffect } from 'react';

const Shop = () => {

    // Changing the document title
    useEffect(() => {
        document.title = 'PlantPlanet | Shop';
    }, []);

    return (
        <>
            <section className="hero">
                <article className="hero-text">
                    <h1>THE SHOP</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit officiis sunt nam vel ipsa assumenda vero iusto blanditiis in! Inventore rerum maxime dolores ex excepturi ut quidem, dolorem ducimus.</p>
                </article>
                <article className="hero-carousel">
                    <div className="carousel"></div>
                </article>
            </section>
            <FormSearch />
        </>
    );
}
export default Shop