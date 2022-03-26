import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    let name = '';
    let img;
    for (const items of product) {
        name = items.name;
        img = items.img;
    }

    return (
        <div className='details'>
            <div><img src={img} alt=''></img></div>
            <p>{name}</p>
        </div>
    );
};

export default Product;