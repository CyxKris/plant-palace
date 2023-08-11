import "./Shop.css";

// ?JSX IMPORTS
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { plants } from "../../assets/plants.json";
import ProductCard from "../../components/ProductCard";
import FormSearch from "../../components/FormSearch";

import image1 from '/large/shop-1.jpg';
import image2 from '/large/shop-2.jpg';
import image3 from '/large/shop-3.jpg';
import image4 from '/large/shop-4.jpg';

import Slider from "../../components/Slider";

const Shop = () => {
    // Changing the document title
    useEffect(() => {
        document.title = "PlantPlanet | Shop";
        fetchData();
    }, []);

    // For the Search component
    const [searchQuery, setSearchQuery] = useState("");

    // Default State
    const [list, setList] = useState([]);
    // State for the filtered products
    const [filtered, setFiltered] = useState([]);

    // Setting the states
    const fetchData = () => {
        setList(plants);
        setFiltered(plants);
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const [activeCategory, setActiveCategory] = useState("");

    return (
        <>
            {/* THE HERO SECTION */}
            <section className="hero">
                <article className="hero-text">
                    <h1>THE SHOP</h1>
                    <p>
                        Step into a world where nature's embrace welcomes you. Our webpage is more than just a collection of plants – it's a sanctuary of growth, a haven of inspiration. As you explore, may you find the motivation to nurture both green life and the dreams they symbolize. Together, let's cultivate beauty, purpose, and endless wonder.
                    </p>
                </article>
                <article className="hero-carousel">
                    <Slider image1={image1} image2={image2} image3={image3} image4={image4} />
                </article>
            </section>

            {/* THE SEARCH FILTER */}
            <section className="search-form">
                <form onSubmit={onSubmit}>
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search products by name"
                    />
                    <svg
                        width="57"
                        height="57"
                        viewBox="0 0 57 57"
                        fill="none"
                    >
                        <path
                            className="search-icon"
                            d="M45.1796 40.3204C44.0673 39.2549 42.9847 38.1588 41.933 37.0334C41.0495 36.1356 40.5175 35.4825 40.5175 35.4825L33.8675 32.3071C36.5299 29.2876 37.9992 25.4006 38 21.375C38 12.2099 30.5425 4.75 21.375 4.75C12.2075 4.75 4.75 12.2099 4.75 21.375C4.75 30.5401 12.2075 38 21.375 38C25.5621 38 29.3787 36.4325 32.3071 33.8699L35.4825 40.5199C35.4825 40.5199 36.1356 41.0519 37.0334 41.9354C37.9525 42.7975 39.1614 43.9636 40.3204 45.182L43.5456 48.488L44.9801 50.0223L50.0175 44.9849L48.4832 43.5504C47.5831 42.6669 46.3814 41.4936 45.1796 40.3204ZM21.375 33.25C14.8271 33.25 9.5 27.9229 9.5 21.375C9.5 14.8271 14.8271 9.5 21.375 9.5C27.9229 9.5 33.25 14.8271 33.25 21.375C33.25 27.9229 27.9229 33.25 21.375 33.25Z"
                        />
                    </svg>
                </form>
            </section>
            <FormSearch
                list={list}
                setFiltered={setFiltered}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* THE PRODUCTS */}
            {/* Adding animations using framer motion */}
            <motion.section
                layout
                className="products"
            >
                <AnimatePresence>
                    {/* filtering the rendered plants by the user's input in the search bar */}
                    {filtered
                        .filter((item) => {
                            return searchQuery.toLowerCase() === ""
                                ? item
                                : item.commonName
                                      .toLowerCase()
                                      .includes(searchQuery);
                        })
                        .map((plant) => (
                            <Link
                                key={plant.id}
                                to={`/shop/products/${plant.id}`}
                                className="product"
                            >
                                <ProductCard plant={plant} />
                            </Link>
                        ))}
                </AnimatePresence>
            </motion.section>
        </>
    );
};
export default Shop;
