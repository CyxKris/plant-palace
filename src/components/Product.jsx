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
        <>
            <h2>A Product!</h2>
            <h3>{currentProduct.commonName}</h3>
            <p>This is product {id}</p>
            <Link to={"/shop"}>Back To Products</Link>
        </>
    );
};
export default Product;
