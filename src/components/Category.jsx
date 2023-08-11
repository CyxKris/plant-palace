/* eslint-disable react/prop-types */

import './Category.css';

import { Link } from 'react-router-dom';

const Category = (props) => {

    const { category, description, webp, mozjpeg } = props;

    return (
        <article className='home-category'>
            <div className="info child">
                <h3>{category}</h3>
                <p>{description}</p>
                <Link to="/shop">SHOP NOW</Link>
            </div>
            <div className="image child">
                <picture>
                    <source srcSet={webp} />
                    <img src={mozjpeg} alt="" />
                </picture>
            </div>
        </article>
    );
}
export default Category