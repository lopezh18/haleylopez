import React from 'react';

const Header = ({ pageProps: { color, title }}) => (
  <div className={`${color} text-white pb-9 relative flex flex-col leading-none items-center overflow-hidden`}>
    <h1 className='font-serif text-6xl xs:text-7xl md:text-9xl text-center'>
      {title}
    </h1>
  </div>
);
export default Header;