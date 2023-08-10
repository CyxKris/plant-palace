import './Shop.css';

// ?JSX IMPORTS
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { plants } from '../assets/plants.json';
import ProductCard from './ProductCard';
import FormSearch from './FormSearch';

const Shop = () => {

    // Changing the document title
    useEffect(() => {
        document.title = 'PlantPlanet | Shop';
        fetchData();
    }, []);

    const [list, setList] = useState([]);
    const fetchData = () => {
        setList(plants);
        setFiltered(plants);
    }

    const [filtered, setFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');

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

            <FormSearch list={list} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <motion.section
                layout
                className="products"
            >
                <AnimatePresence>
                        {filtered.map((plant) => (
                            <Link
                                key={plant.id}
                                to={"/shop/products/" + plant.id}
                                className="product">
                                <ProductCard plant={plant} />
                            </Link>
                        ))}
                </AnimatePresence>
            </motion.section>
        </>
    );
}
export default Shop