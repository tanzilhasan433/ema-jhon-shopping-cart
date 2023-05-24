import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart} = props; 
    const {name, img, seller, price, ratings} = props.product;
    
    return (
        <div className='product'>
            <img src= {img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-info'>
                <p>Price : $ {price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings} stars</small></p>
            </div>
            <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;