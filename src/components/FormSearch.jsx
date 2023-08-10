import { useEffect } from 'react';
import './FormSearch.css';

const FormSearch = ({ list, setFiltered, activeCategory, setActiveCategory }) => {
    
    // This runs every time the active category changes
    useEffect(() => {
        if (activeCategory === '') {
            setFiltered(list); // do nothing
            return;
        }

        const filtered = list.filter((plant) => plant.category.includes(activeCategory));
        setFiltered(filtered);

    },[activeCategory]);

    return (
        <>
            <section className="search-form">
                <form action="">
                    <input type="text" name="search" id="search" placeholder='Search our products' />
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none">
                        <path className="search-icon" d="M45.1796 40.3204C44.0673 39.2549 42.9847 38.1588 41.933 37.0334C41.0495 36.1356 40.5175 35.4825 40.5175 35.4825L33.8675 32.3071C36.5299 29.2876 37.9992 25.4006 38 21.375C38 12.2099 30.5425 4.75 21.375 4.75C12.2075 4.75 4.75 12.2099 4.75 21.375C4.75 30.5401 12.2075 38 21.375 38C25.5621 38 29.3787 36.4325 32.3071 33.8699L35.4825 40.5199C35.4825 40.5199 36.1356 41.0519 37.0334 41.9354C37.9525 42.7975 39.1614 43.9636 40.3204 45.182L43.5456 48.488L44.9801 50.0223L50.0175 44.9849L48.4832 43.5504C47.5831 42.6669 46.3814 41.4936 45.1796 40.3204ZM21.375 33.25C14.8271 33.25 9.5 27.9229 9.5 21.375C9.5 14.8271 14.8271 9.5 21.375 9.5C27.9229 9.5 33.25 14.8271 33.25 21.375C33.25 27.9229 27.9229 33.25 21.375 33.25Z"/>
                    </svg>
                </form>
            </section>
            
            <section className="search-filters">
                <button
                    className={activeCategory === '' ? 'active' : ''}
                    onClick={() => setActiveCategory('')}>
                    All
                </button>

                <button
                    className={activeCategory === 'Indoor Plants' ? 'active' : ''}
                    onClick={() => setActiveCategory('Indoor Plants')}>
                    Indoor
                </button>

                <button
                    className={activeCategory === 'Outdoor Plants' ? 'active' : ''}
                    onClick={() => setActiveCategory('Outdoor Plants')}>
                    Outdoor
                </button>

                <button 
                    className={activeCategory === 'Edible Plants' ? 'active' : ''}
                    onClick={() => setActiveCategory('Edible Plants')}>
                    Edible
                </button>

                <button 
                    className={activeCategory === 'Easy-to-Grow Plants' ? 'active' : ''}
                    onClick={() => setActiveCategory('Easy-to-Grow Plants')}>
                    Easy
                </button>
            </section>
        </>
    );
}
export default FormSearch