import React, { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { headerNav, pageProps, footerLinks } from '../../constants';
import Footer from '../../components/Footer';
import DesktopNav from '../../components/DesktopNav';
import MobileNav from '../../components/MobileNav';

const Nav = () => {
  const { pathname } = useLocation();
  let bgColor = pageProps[pathname]?.color || 'bg-green';

  return (
    <Fragment>
      <DesktopNav links={headerNav} bgColor={bgColor} pathname={pathname}/>
      <MobileNav links={headerNav} bgColor={bgColor}  pathname={pathname}/>
      <Outlet context={{ pageProps: pageProps[pathname]}}/>
      <Footer links={footerLinks}/>
    </Fragment>
  )
}

export default Nav;