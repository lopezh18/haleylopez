import React from 'react';
import homeImg from '../../assets/homeimg.png';

const HomeHeader = ({ pageProps: { color, subtitle, title }}) => (
    <div className={`${color} flex py-5 px-3 md:px-0 items-center justify-center flex-col md:flex-row text-center`}>
        <div className='flex justify-center content-center md:w-1/2'>
            <img className='w-8/12 md:w-7/12' alt='haley in an arch with stars' src={homeImg}/>
        </div>
        <div className='font-serif font-medium flex flex-col justify-center items-center md:w-1/2 text-mint'>
            <h1 className='text-6xl'>{title}</h1>
            <h2 className='text-xl mt-3 mb-4'>Technologist | Entrepreneur | Digital Strategist | Human</h2>
            <a
                className='bg-lime text-white px-5 py-1 text-lg rounded-2xl hover:underline hover:border-2'
                href='#about'
            >
                Explore
            </a>
        </div>
    </div>
);

export default HomeHeader;