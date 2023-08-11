/* eslint-disable react/prop-types */
import "./FormSearch.css";

import { useEffect } from "react";

const FormSearch = (props) => {
    // Destructuring the props
    const { list, setFiltered, activeCategory, setActiveCategory } = props;

    // This runs every time the active category changes
    useEffect(() => {
        if (activeCategory === "") {
            setFiltered(list); // do nothing
            return;
        }

        const filtered = list.filter((plant) =>
            plant.category.includes(activeCategory)
        );
        setFiltered(filtered);
    }, [activeCategory]);

    return (
        <>
            <section className="search-filters">
                <button
                    className={activeCategory === "" ? "active" : ""}
                    onClick={() => setActiveCategory("")}
                >
                    All
                </button>

                <button
                    className={
                        activeCategory === "Indoor Plants" ? "active" : ""
                    }
                    onClick={() => setActiveCategory("Indoor Plants")}
                >
                    Indoor
                </button>

                <button
                    className={
                        activeCategory === "Outdoor Plants" ? "active" : ""
                    }
                    onClick={() => setActiveCategory("Outdoor Plants")}
                >
                    Outdoor
                </button>

                <button
                    className={
                        activeCategory === "Edible Plants" ? "active" : ""
                    }
                    onClick={() => setActiveCategory("Edible Plants")}
                >
                    Edible
                </button>

                <button
                    className={
                        activeCategory === "Easy-to-Grow Plants" ? "active" : ""
                    }
                    onClick={() => setActiveCategory("Easy-to-Grow Plants")}
                >
                    Easy
                </button>
            </section>
        </>
    );
};
export default FormSearch;

