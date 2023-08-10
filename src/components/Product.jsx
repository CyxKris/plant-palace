import './Product.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { plants } from '../assets/plants.json';


const Product = () => {

    useEffect(() => {
        document.title = 'PlantPlanet | Product';
        fetchData();
    }, []);

    const { id } = useParams();
    const newId = { id };

    const [list, setList] = useState([]);
    const fetchData = () => {
        setList(plants);
    }


    console.log(list);

    const currentProduct = list.filter((plant) => {
        return plant.id === newId;
    });

    console.log(currentProduct);

    return (
        <>
            <h2>A Product!</h2>
            <h3>{currentProduct.commonName}</h3>
            {/* <p>This is product {id}</p> */}
        </>
    );
}
export default Product;