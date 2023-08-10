import './Shop.css';

// ?JSX IMPORTS
import { useEffect } from 'react';

const Shop = () => {

    // Changing the document title
    useEffect(() => {
        document.title = 'PlantPlanet | Shop';
    }, []);

    return (
        <h2>The Shop</h2>
    );
}
export default Shop