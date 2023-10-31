import React from 'react';
import { useOutletContext } from 'react-router-dom';

import Header from '../../components/Header';
import test from '../../test.svg';
import resume from '../../images/lopez_resume.pdf';
import Timeline from '../../components/Timeline';

const Home = () => {
  const { pageProps } = useOutletContext()
  return (
    <div>
      <Header pageProps={pageProps}/>
      <img alt='checkerboard' src={test}/>
      <div className='pt-20 px-5'>
        <p className='text-center text-3xl pb-20'>
          Welcome, I’m Haley Lopez. I am a life long learner passionate about creating products that people will LOVE.
          I lead Eleven11 digital agency where I help small businesses and non-profits grow their online presence. In my spare time I love to travel, build Legos, read, and paint.
          To view my resume, click <a className='hover:underline' href={resume} target='_blank' rel='noopener noreferrer'>here</a>.
        </p>
        <Timeline />
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

export default Home;