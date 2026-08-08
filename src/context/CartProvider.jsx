"use client"
import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const add2Cart = (item) => {
        setCart([item, ...cart])
    };

    const cartData = {
        cart,
        setCart,
        add2Cart,
    }

    return <CartContext value={cartData}>
        {children}
    </CartContext>
};

export default CartProvider;