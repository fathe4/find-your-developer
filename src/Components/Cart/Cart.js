import React from 'react';
import './cart.css'

const Cart = (props) => {
    const carts = props.cart;

    const totalReducer = (previousCost, currentCost) => previousCost + currentCost.salary
    const total = carts.reduce(totalReducer, 0)
    // All added list
    return (
        <div className='sticky-top table-color'>

            <div className='p-4 shadow'>
                <h4>Developer Added: {carts.length}</h4>
                <h4>Total Cost: ${total}</h4>
                {
                    carts.map(cart => <li className="added-developer d-flex justify-content-between align-items-center">
                        <span><img src={cart.img} alt="" /> {cart.name}</span>
                        <i className="fas fa-user-times fs-5 me-4 remove-developer" onClick={() => props.removeDeveloper(cart.id)}></i>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Cart;