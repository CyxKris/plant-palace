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
                <div className="card-info">
                    <p className="card-id">{plant.id}</p>

                    <div className="right">
                        <p className="card-name">{plant.commonName}</p>
                        <p className="card-category">{plant.category}</p>
                    </div>
                </div>

                <picture className="card-image">
                    <source type="image/webp" srcSet={`/plants/${plant.img1.webp}`} />
                    <img src={`/plants/${plant.img1.mozjpeg}`} alt="" />
                </picture>
            </motion.article>
        </>
    );
};
export default ProductCard;
