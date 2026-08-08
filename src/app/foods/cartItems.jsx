"use client"
import { CartContext } from '@/context/CartProvider';
import { use } from 'react';

const CartItems = () => {
    const { cart } = use(CartContext)
    return (
        <h2>{cart.length} items added</h2>
    );
};

export default CartItems;