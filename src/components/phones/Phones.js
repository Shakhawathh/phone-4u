import React, { useEffect, useState } from 'react';
import Product from '../items/Product';
import Phone from '../phone/Phone';
import './Phones.css'
//creatting phones component thats similar looks, different data
const Phones = () => {
    //declare a state
    const [phones, setPhones] = useState([]);
    const [product, setProduct] = useState([])
    useEffect(() => {

        fetch('Data.json')
            .then(Response => Response.json())
            .then(data => setPhones(data));
    }, [])
    // onclick arrow function
    const EventHandle = (phone) => {
        const newproduct = [...product, phone]
        setProduct(newproduct)
    }
    return (
        <div className='phone-shop'>
            <div className='phones-info'>
                {
                    phones.map(phone => <Phone
                        key={phone.id}
                        phone={phone}
                        EventHandle={EventHandle}
                    ></Phone>)
                }
            </div>
            <div className='phone-container'>
                <Product product={product} ></Product>
            </div>
        </div>
    );
};

export default Phones;