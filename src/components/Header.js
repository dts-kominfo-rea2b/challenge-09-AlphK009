// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = ({title, subTitle}) => {
    return (
        <>
        <h1 className='title'>{title}</h1>
        <h3 className='subtitle'>{subTitle}</h3>
        <hr/>    
        </>
    )
}

export default Header;