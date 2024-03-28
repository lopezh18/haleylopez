import React, { Fragment } from 'react';
import haley1 from '../assets/haley1.png';

const HomeHeader = ({ pageProps: { color, subtitle, title }}) =>(
  <div className={`${color} pt-32 pb-10 relative flex flex-col leading-none items-center ${subtitle ? 'text-mint' :'text-white'} overflow-hidden`}>
    <h1 className='font-serif text-7xl xs:text-8.5xl md:text-subtitle xl:text-header 2xl:text-header text-center'>
      {title}
    </h1>
    <Fragment>
      <h2 className='font-serif text-4xl xs:text-5xl sm:text-7xl md:text-8.5xl xl:text-subtitle'>
        {subtitle}
      </h2>
      <img alt='haley lopez' className='absolute -bottom-5 md:bottom-0 h-3/5 md:h-3/4' src={haley1}/>
    </Fragment>
  </div>
);

export default HomeHeader;