import React from 'react';

import FooterLinkContainer from '../FooterLinkContainer';
import { icons } from '../../constants';
import Logo from '../Logo';
import heartIcon from '../../assets/heartIcon.png'
const Footer = ({ links }) => (
  <div className='bg-lime font-serif text-white flex flex-col items-center justify-center py-5'>
    <div className='flex flex-col sm:flex-row items-center justify-center py-5'>
      <Logo addedStyles='pb-3 sm:pb-0 sm:pr-8 md:pr-40' size='text-7xl'/>
      <div className='flex flex-row space-x-8 md:space-x-40'>
          <FooterLinkContainer title='Navigation' links={links.navigation} />
          <FooterLinkContainer title='Extras' links={links.extras} />
      </div>
    </div>
    <div className='flex items-center'>{icons.copyrightIcon} <p className='pl-2'>2024 All Rights Reserved.</p></div>
    <div className='flex items-center pt-2'><p className='pr-3'>Hecho con amor</p> <img width="40" height="40" src={heartIcon} alt="like"/></div>
  </div>
);

export default Footer;