import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import resume from '../../assets/haleylopez-resume.pdf'

const NavLinkContainer = ({ links, pathname, toggle }) =>  {
    const linkKeysArray = Object.keys(links);

    return (
        <Fragment>
            {linkKeysArray.map((key, idx) => {
                const addPadding = idx < linkKeysArray.length - 1;
                const keyPathname = `/${key.toLowerCase()}`;
                const isActivePath = keyPathname === pathname;

                if (key === 'Resume') {
                    return (
                        <a className={`
                        hover:underline pb-2 sm:pb-0 text-xl md:text-2xl
                        ${addPadding && 'sm:pr-8 md:pr-11'}
                        ${isActivePath && 'underline'}`}
                        key={`${key.toLowerCase()}-${idx}`}
                        to={`${links[key]}`}
                        href={resume}
                        target='_blank'
                        rel='noreferrer'
                        onClick={toggle}
                        >
                            {key}
                        </a>
                    );
                }
                return (
                <Link
                    className={`
                    hover:underline pb-2 sm:pb-0 text-xl md:text-2xl
                    ${addPadding && 'sm:pr-8 md:pr-11'}
                    ${isActivePath && 'underline'}`}
                    key={`${key.toLowerCase()}-${idx}`}
                    to={`${links[key]}`}
                    onClick={toggle}
                >
                    {key}
                </Link>)}
            )}
        </Fragment>
    );
};

export default NavLinkContainer;