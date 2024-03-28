import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import NavLinkContainer from '../NavLinkContainer';

const DesktopNav = ({ bgColor, ...restProps }) =>  (
    <div className={`hidden py-9 md:flex justify-between items-center font-serif text-white px-16 ${bgColor}`}>
        <Link to='/' className=''>
            <Logo size='text-4xl' />
        </Link>
        <div>
            <NavLinkContainer {...restProps}/>
        </div>
    </div>
);

export default DesktopNav;