import './Sitemap.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Sitemap = () => {

    useEffect(() => {
        document.title = "PlantPlanet | Sitemap";
    }, []);

    return (
        <section id="sitemap">
            <h1>THE SITEMAP</h1>

            <section className='links-section'>
                <h2>OUR PAGES</h2>
                <div className="links">
                    <Link to="/">HOME</Link>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/sitemap">SITEMAP</Link>
                </div>
            </section>

            <section className='links-section'>
                <h2>OUR PRODUCTS</h2>
                <div className="links">
                    <Link to="/shop/products/001">SNAKE PLANT</Link>
                    <Link to="/shop/products/002">ZZ PLANT</Link>
                    <Link to="/shop/products/003">POTHOS</Link>
                    <Link to="/shop/products/004">CHINESE EVERGREEN</Link>
                    <Link to="/shop/products/005">ROSE BUSH</Link>
                    <Link to="/shop/products/006">LAVENDER</Link>
                    <Link to="/shop/products/007">FERNS</Link>
                    <Link to="/shop/products/008">BOUGAINVILLEA</Link>
                    <Link to="/shop/products/009">BASIL</Link>
                    <Link to="/shop/products/010">CHERRY TOMATO</Link>
                    <Link to="/shop/products/011">MINT</Link>
                    <Link to="/shop/products/012">STRAWBERRY</Link>
                    <Link to="/shop/products/013">SPIDER PLANT</Link>
                    <Link to="/shop/products/014">PEACE LILY</Link>
                    <Link to="/shop/products/015">JADE PLANT</Link>
                    <Link to="/shop/products/016">ZUCCHINI</Link>
                </div>
            </section>
        </section>
    );
}
export default Sitemap