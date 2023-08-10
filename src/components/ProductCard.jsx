/* eslint-disable react/prop-types */
import "./ProductCard.css";

import { motion } from "framer-motion";

const ProductCard = (props) => {
    const { plant } = props;
    return (
        <>
            <motion.article
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                className="product-card"
            >
                <h3>{plant.commonName}</h3>
                <p>{plant.category}</p>
                <p>
                    <em>Water:</em> {plant.waterRequirements}
                </p>
                <p>
                    <em>Light: </em>
                    {plant.lightRequirements}
                </p>
            </motion.article>
        </>
    );
};
export default ProductCard;
