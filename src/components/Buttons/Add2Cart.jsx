"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const Add2Cart = ({ food }) => {

    const { add2Cart } = use(CartContext);
    const [inCart, setInCart] = useState(false);
    const handleAdd2Cart = () => {
        add2Cart(food);
        setInCart(true);
    };

    return (
        <button onClick={handleAdd2Cart}
            disabled={inCart}
            className="flex-1 rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600 cursor-pointer disabled:bg-red-500">
            {
                inCart ? "Added" : "Add to Cart"
            }
        </button>
    );
};

export default Add2Cart;