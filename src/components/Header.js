// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = ({title, subTitle}) => {
    return (
        <>
        <h1 className='title'>Call a Friend</h1>
        <h3 className='subtitle'>Your Friendly Contact App</h3>
        <hr/>    
        </>
    )
}

export default Header;