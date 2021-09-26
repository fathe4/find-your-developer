import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

const Developers = () => {
    const [developers, setDevelopers] = useState([])
    useEffect(() => {
        fetch('./programming.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])

    return (
        <div className='row mx-4'>

            <div className='col-md-9'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        developers.map(developer => <Developer key={developer.id} developer={developer}></Developer>)
                    }
                </div>
            </div>
            <div className='col-md-3'>
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Developers;