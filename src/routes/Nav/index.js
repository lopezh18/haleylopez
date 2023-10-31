import React, { Fragment } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';
import { headerNav, pageProps } from '../../constants';

const Nav = () => {
  const { pathname } = useLocation();
  console.log(headerNav);
  return (
    <Fragment>
      <div className={`h-28 flex justify-between items-center text-white pl-11 ${pageProps[pathname]?.color || 'bg-pink'}`}>
        <Link to='/'>
          <Logo size='text-5xl' />
        </Link>
        <div>
          {Object.keys(headerNav).map((key, idx) => (
              <Link className='hover:underline text-5xl pr-11' key={`${key.toLowerCase()}-${idx}`} to={`${headerNav[key]}`}>
                {key}
              </Link>)
          )}
        </div>
      </div>
      <Outlet context={{ pageProps: pageProps[pathname]}}/>
    </Fragment>
  )
}

export default Nav;