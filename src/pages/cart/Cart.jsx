import './Cart.css';

import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../../components/CartItem';
import { formatCurrency } from '../../utilities/formatCurrency';

import { plants } from '../../assets/plants.json';

const Cart = () => {

    const { cartItems, cartQuantity } = useShoppingCart();

    return (
        <>
            <section id="cart-page">
                <h1>WELCOME TO THE CART</h1>
                {(cartQuantity === 0) ? (
                    <div className="empty-cart-message">
                        <h2>YOUR CART IS EMPTY!</h2>
                    </div>
                ) : (
                        <div>
                            {cartItems.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))}
                            <h3>
                                {`Total :  
                                ${formatCurrency(cartItems.reduce((total, cartItem) => {
                                    const item = plants.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0))}`}
                            </h3>
                    </div>
                )}
            </section>
        </>
    );
}
export default Cart