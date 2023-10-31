import React, { Fragment } from 'react';
// import headerImage from '../images/headerImage.png';
import image1 from '../images/image1.png';
// import image2 from '../images/image2.png';

const Header = ({ pageProps: { color, subtitle, title }}) => {
  const HomeDetails = () => {
    return (
      <Fragment>
        <h2 className='text-subtitle'>
          {subtitle}
        </h2>
        <img alt='haley lopez' className='absolute bottom-0 h-3/4' src={image1}/>
      </Fragment>
    );
  };

  return (
    <div className={`${color} pt-32 pb-10 relative flex flex-col leading-none items-center ${subtitle ? 'text-orange' :'text-white'} overflow-hidden`}>
      <h1 className='text-9xl 2xl:text-header text-center'>
        {title}
      </h1>
      {subtitle && <HomeDetails />}
    </div>
  )
}

export default Header;