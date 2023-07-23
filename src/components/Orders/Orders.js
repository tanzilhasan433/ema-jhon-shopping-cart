import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products, initialCart} = useLoaderData();   //{ products : products, initialCart : initialCart };
    const [cart, setCart] = useState(initialCart)


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                cart.map(product => <ReviewItem
                
                ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;

