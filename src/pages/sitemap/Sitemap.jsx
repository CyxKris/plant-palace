import { useEffect } from 'react';
import './Sitemap.css';

const Sitemap = () => {

    useEffect(() => {
        document.title = "PlantPlanet | Sitemap";
    }, []);

    return (
        <h2>The Sitemap</h2>
    );
}
export default Sitemap