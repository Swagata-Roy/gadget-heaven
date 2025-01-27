import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.product_id === product.product_id);
            if (existingItem) {
                toast.success('Item already in cart!');
                return prevItems;
            }
            toast.success('Item added to cart!');
            return [...prevItems, product];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        toast.success('Item removed from cart!');
    };

    const sortCartByPrice = () => {
        setCartItems(prevItems => [...prevItems].sort((a, b) => b.price - a.price));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        sortCartByPrice,
        clearCart,
        getTotalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};
