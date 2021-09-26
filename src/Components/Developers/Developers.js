import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

const Developers = () => {
    const [developers, setDevelopers] = useState([])
    const [carts, setCart] = useState([])

    // Load data
    useEffect(() => {
        fetch('./programming.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])


    // handle hire button
    const handleHire = (developer) => {

        const newCart = [...carts, developer]
        // 
        let uniqueArr = [];
        // loop through array
        for (let i of newCart) {
            if (uniqueArr.indexOf(i) === -1) {
                uniqueArr.push(i);
                errorHandle('added')
            } else {
                errorHandle('duplicate')
            }
        }

        setCart(uniqueArr)
    }

    // Remove developer
    const removeDeveloper = (removeDeveloper) => {
        const removeItem = carts.filter(cart => cart.id !== removeDeveloper)
        setCart(removeItem);
        errorHandle('removed')
    }


    // Error Handling
    const errorHandle = (massage) => {
        let toastMixin = Swal.mixin({
            toast: true,
            icon: 'success',
            title: 'General Title',
            animation: false,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        if (massage === 'added') {
            toastMixin.fire({
                animation: true,
                title: 'Successfully added'
            });
        } else if (massage === 'duplicate') {
            toastMixin.fire({
                title: 'You already added the developer',
                icon: 'error'
            });
        } else if (massage === 'removed') {
            toastMixin.fire({
                animation: true,
                title: 'Removed'
            });
        }
    }

    // Developers detail cards
    return (
        <div className='row mx-4 py-4'>

            <div className='col-md-9'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        developers.map(developer => <Developer handleHire={handleHire} key={developer.id} developer={developer}></Developer>)
                    }
                </div>
            </div>
            <div className='col-md-3'>

                <Cart removeDeveloper={removeDeveloper} cart={carts}></Cart>

            </div>

        </div>
    );
};

export default Developers;