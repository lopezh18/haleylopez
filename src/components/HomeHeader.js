import React from 'react';
import headerImage from '../images/headerImage.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';

const HomeHeader = () => {
  // return (
  //   <div className='flex flex-col items-center text-orange w-full'>
  //     <img className='object-contain' alt='haley lopez header' src={headerImage}/>
  //   </div>
  // )
  return (
    <div className='bg-pink relative flex flex-col items-center text-orange overflow-hidden'>
      <h1 className='mt-36 text-header text-center'>
        HALEY LOPEZ
      </h1>
      <h2 className='text-subtitle'>
        TECHNOLOGIST
      </h2>
      <img className='absolute bottom-0 h-3/4' src={image1}/>
    </div>
  )
}

export default HomeHeader;