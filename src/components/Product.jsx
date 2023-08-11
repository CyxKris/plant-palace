import "./Product.css";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import { plants } from "../assets/plants.json";

const Product = () => {
    useEffect(() => {
        document.title = "PlantPlanet | Product";
    }, []);


    const { id } = useParams();


    const currentProduct = plants.find((plant) => plant.id === id);

    return (
        <section className="product-page">
            <picture className="product-image">
                <source
                    type="image/webp"
                    srcSet={`/src/assets/plants/${currentProduct.img1.webp}`}
                />
                <img
                    src={`/src/assets/plants/${currentProduct.img1.mozjpeg}`}
                    alt=""
                />
            </picture>

            <section className="product-details">
                <article className="product-page-info">
                    <div>
                        <p className="product-name">{currentProduct.commonName}</p>
                        <p className="product-id">{currentProduct.id}</p>
                    </div>
                    <div className="information">
                        <p className="info-item">
                            <span>Category:</span> {currentProduct.category}
                        </p>
                        <p className="info-item">
                            <span>Scientific Name</span>
                            {currentProduct.scientificName}
                        </p>
                        <p className="info-item">
                            <span>Origin</span> {currentProduct.origin}
                        </p>
                        <p className="info-item">
                            <span>Water Requirements</span>
                            {currentProduct.waterRequirements}
                        </p>
                        <p className="info-item">
                            <span>Light Requirements</span>
                            {currentProduct.lightRequirements}
                        </p>
                    </div>
                </article>
                
                <div className="product-buttons">
                    <Link
                        to={"/shop"}
                        className="product-button"
                    >
                        Back To Products
                    </Link>
                    <a className="product-button">Add To Cart</a>
                </div>
            </section>
        </section>
    );
};
export default Product;
