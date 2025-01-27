import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const WishListContext = createContext();

export const useWishList = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
    const [wishListItems, setWishListItems] = useState(() => {
        const savedWishList = localStorage.getItem('wishlist');
        return savedWishList ? JSON.parse(savedWishList) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishListItems));
    }, [wishListItems]);

    const addToWishList = (product) => {
        setWishListItems((prevItems) => {
            const existingItem = prevItems.find(item => item.product_id === product.product_id);
            if (existingItem) {
                toast.error('Item already in wishlist!');
                return prevItems;
            }
            toast.success('Item added to wishlist!');
            return [...prevItems, product];
        });
    };

    const removeFromWishList = (productId) => {
        setWishListItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        toast.success('Item removed from wishlist!');
    };

    const isInWishList = (productId) => {
        return wishListItems.some(item => item.product_id === productId);
    };

    const value = {
        wishListItems,
        addToWishList,
        removeFromWishList,
        isInWishList
    };

    return (
        <WishListContext.Provider value={value}>
            {children}
        </WishListContext.Provider>
    );
};

WishListProvider.propTypes = {
    children: PropTypes.node.isRequired
};
