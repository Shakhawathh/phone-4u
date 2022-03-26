import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Phone.css'

const Phone = ({ phone, EventHandle }) => {
    // console.log(phone);
    const { name, price, img } = phone;
    return (
        <div className='phone'>
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <h4>Price:${price}</h4>
            <button onClick={() => EventHandle(phone)} className='btn-cart'>
                <p className='btn-text'>explore</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Phone;