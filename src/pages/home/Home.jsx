import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";
import Category from "../../components/Category";

import { categories } from "../../assets/categories.json";

import image1 from "/large/large-1.jpg";
import image2 from "/large/large-2.jpg";
import image3 from "/large/large-3.jpg";
import image4 from "/large/large-4.jpg";

import Slider from "../../components/Slider";

const Home = () => {
    // Changing the document title
    useEffect(() => {
        document.title = "PlantPlanet | Home";
    }, []);

    return (
        <>
            <section id="hero">
                <h1>Make your home eco-friendly</h1>
                <div className="hero-image">
                    <Slider image1={image1} image2={image2} image3={image3} image4={image4} />
                </div>
                <Link
                    to="/shop"
                    className="cta"
                >
                    SHOP PRODUCTS
                </Link>
            </section>

            <section id="messages">
                <div className="message">
                    <p>breathe new life <br /> into your space</p>
                </div>

                <div className="divider"></div>
                
                <div className="message">
                    <p>eco-conscious <br /> commitment</p>
                </div>

                <div className="divider"></div>

                <div className="message">
                    <p>customer-first <br /> approach</p>
                </div>
            </section>

            <section id="categories">
                <h2>Our Categories</h2>
                <div className="categories-card">
                    <Category
                        category={categories[0].category}
                        description={categories[0].contentLong}
                        webp={`/large/${categories[0].image.webp}`}
                        mozjpeg={`/large/${categories[0].image.mozjpeg}`}
                    />
                    <Category
                        category={categories[1].category}
                        description={categories[1].contentLong}
                        webp={`/large/${categories[1].image.webp}`}
                        mozjpeg={`/large/${categories[1].image.mozjpeg}`}
                    />
                    <Category
                        category={categories[2].category}
                        description={categories[2].contentLong}
                        webp={`/large/${categories[2].image.webp}`}
                        mozjpeg={`/large/${categories[2].image.mozjpeg}`}
                    />
                    <Category
                        category={categories[3].category}
                        description={categories[3].contentLong}
                        webp={`/large/${categories[3].image.webp}`}
                        mozjpeg={`/large/${categories[3].image.mozjpeg}`}
                    />
                </div>
            </section>
        </>
    );
};
export default Home;
