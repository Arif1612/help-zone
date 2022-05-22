import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle =
    {
        fontWeight: "bold",
        color: "red",
        margin: "5px",
        textDecoration: 'none'
    }


    return (
        <div className='navbar'>
            <NavLink className='home' activeStyle={activeStyle} to="/home">Help Zone </NavLink>

            {/* <NavLink activeStyle={activeStyle} to="/home">Home</NavLink> */}

            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>

            <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>

            <NavLink activeStyle={activeStyle} to='/books'>Books</NavLink>

        </div >
    );
};

export default Header;