import "./Product.css";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import { formatCurrency } from "../utilities/formatCurrency";

// import { ShopContext } from "../context/shop-context";

import { plants } from "../assets/plants.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Product = () => {
    useEffect(() => {
        document.title = "PlantPlanet | Product";
    }, []);

    const { id } = useParams();

    const currentProduct = plants.find((plant) => plant.id === id);

    // const { } = useContext(ShopContext);
    const { getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart  } = useShoppingCart();

    const quantity = getItemQuantity(currentProduct.id);

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
                    <div className="product-name-details">
                        <div>
                            <p className="product-name">
                                {currentProduct.commonName}
                            </p>
                            <p className="product-id">{currentProduct.id}</p>
                        </div>

                        <p className="product-currency">
                            {formatCurrency(currentProduct.price)}
                        </p>
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
                    {quantity === 0 ? (
                        <a className="product-button" onClick={() => increaseCartQuantity(currentProduct.id)}>Add To Cart</a>
                    ) : (
                            <div className="add-cart-functions">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" onClick={() => decreaseCartQuantity(currentProduct.id)}><path className="add-to-cart-icon" d="M5 11h14v2H5z" /></svg>
                                    <p>{quantity}</p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" onClick={() => increaseCartQuantity(currentProduct.id)}><path className="add-to-cart-icon" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                                </div>
                                <button onClick={() => removeFromCart(currentProduct.id)}>Remove</button>
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
};
export default Product;
