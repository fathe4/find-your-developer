import React from 'react';

const Header = () => {
    return (
        <div className='container text-center shadow-sm rounded w-50 py-4 my-4' style={{ background: 'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))', color: '#fff' }}>
            <h2 className='text-center'>Find your Developer</h2>
            <p>If you are looking for hiring freelancers so this is the right place for you</p>
            <h3>Our freelancer average salary is <strong>$10000</strong></h3>
        </div>
    );
};

export default Header;