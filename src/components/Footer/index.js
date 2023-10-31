import React from 'react';
import footer from '../images/footer.png';

const Footer = () => {
  // return (
  //   <div className='flex flex-col items-center text-orange w-full'>
  //     <img className='object-contain' alt='haley lopez header' src={headerImage}/>
  //   </div>
  // )
  return (
    <div className='bg-pink relative flex flex-col items-center text-orange overflow-hidden'>
      <img className='absolute bottom-0 h-3/4' src={footer}/>
    </div>
  )
}

export default Footer;