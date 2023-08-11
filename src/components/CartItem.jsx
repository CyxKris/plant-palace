/* eslint-disable react/prop-types */
import { useShoppingCart } from '../context/ShoppingCartContext';
import './CartItem.css';

import {plants} from '../assets/plants.json';
import { formatCurrency } from '../utilities/formatCurrency';

const CartItem = ({ id, quantity }) => {

    const { removeFromCart } = useShoppingCart();
    const cartPlants = plants.find(item => item.id === id);

    if (cartPlants == null) return null;

    return (
        <div className='cart-item'>
            <picture className='cart-item-image'>
                <source srcSet={`/src/assets/plants/${cartPlants.img1.webp}`} />
                <img src={cartPlants.img1.mozjpeg} alt="" />
            </picture>

            <div className="cart-item-details">
                <div>
                    <p>{cartPlants.id}</p>
                    <p>{cartPlants.commonName}</p>
                    <p>{cartPlants.category}</p>
                </div>
                <div>
                    <div>
                        <p className="item-quantity">x{quantity}</p>
                        <p className="total-price">{formatCurrency(cartPlants.price * quantity)}</p>
                    </div>
                    <svg onClick={() => removeFromCart(cartPlants.id)} className='delete-icon' width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                </div>
            </div>
        </div>
    );
}
export default CartItem