import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='bg-indigo-200 py-4 px-8 flex items-center justify-between'>
            <div>
                <h1 className='text-4xl font-bold'>Alter Quiz</h1>
            </div>
            <div className='links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='blog'>Blog</NavLink>
                <NavLink to='about'>About</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;