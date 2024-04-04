import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import { icons } from '../../constants';
import NavLinkContainer from '../NavLinkContainer';

const MobileNav = ({ bgColor, ...restProps }) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = (event) => {
        if (event.target.id === 'logo' && !showMenu) {
            setShowMenu(showMenu)
        } else {
            setShowMenu(!showMenu);
        }
    };

    return (
        <div className={`md:hidden font-serif text-white px-8 py-9 ${bgColor} relative w-full`}>
            <div className='flex justify-between items-center'>
                <Link to='/' className='hover:no-underline no-underline z-50' onClick={toggleMenu}>
                    <Logo size='text-5xl' />
                </Link>
                <button onClick={toggleMenu} className={`${showMenu && 'bg-lime p-1'}`}>{icons.hamburgerIcon}</button>
            </div>
            <div className={`${showMenu ? 'flex' : 'hidden'} absolute h-screen w-screen z-40 bg-transparent top-0 left-0`} onClick={toggleMenu}/>
            <div className={`${showMenu ? 'flex' : 'hidden'} flex-col items-center sm:flex-row absolute z-50 left-0 right-0 mt-3 mx-auto opacity-75 bg-black w-11/12 justify-center rounded-xl py-3`}>
                <NavLinkContainer toggle={toggleMenu} {...restProps} />
            </div>
        </div>
    );
};

export default MobileNav;