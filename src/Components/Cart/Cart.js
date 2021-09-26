import React from 'react';
import './cart.css'

const Cart = (props) => {
    const carts = props.cart;
    const totalReducer = (previousCost, currentCost) => previousCost + currentCost.salary
    const total = carts.reduce(totalReducer, 0)
    return (
        <div className='sticky-top table-color'>

            <div className='p-4 shadow'>
                <h2>Freelancer Added: {carts.length}</h2>
                <h2>Total Cost: ${total}</h2>
                {
                    carts.map(cart => <h5>Freelancer Name: <strong>{cart.name}</strong></h5>)
                }
            </div>
        </div>
    );
};

export default Cart;