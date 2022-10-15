import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-indigo-200 py-4 px-8 md:flex items-center justify-between'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Alter Quiz</h1>
                <div onClick={() => setOpen(!open)} className="h-8 w-8 md:hidden">
                    {

                        open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>

                    }
                </div>
            </div>
            <div className={`links bg-indigo-200 w-full md:w-auto flex text-center flex-col md:flex-row absolute md:static duration-500 ease-in ${open ? 'top-15 left-0' : 'top-[-200px]'}`}>
                <NavLink end className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='blog'>Blog</NavLink>
                <NavLink to='about'>About</NavLink>
            </div>

        </nav >
    );
};

export default NavBar;