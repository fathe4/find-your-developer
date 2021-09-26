import React, { useEffect, useState } from 'react';
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
    const handleHire = (freelancer) => {
        const newCart = [...carts, freelancer]
        setCart(newCart)
    }

    // Developers detail cards
    return (
        <div className='row mx-4 py-4'>

            <div className='col-md-9'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        developers.map(developer => <Developer handleHire={handleHire} key={developer.id} developer={developer}></Developer>)
                    }
                </div>
            </div>
            <div className='col-md-3'>

                <Cart cart={carts}></Cart>

            </div>

        </div>
    );
};

export default Developers;