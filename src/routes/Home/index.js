import React, { Fragment } from 'react';
import { useOutletContext } from 'react-router-dom';

import resume from '../../assets/haleylopez-resume.pdf';
import Timeline from '../../components/Timeline';
import HomeHeader from '../../components/HomeHeader';

const Home = () => {
  const { pageProps } = useOutletContext()
  return (
    <Fragment>
      <HomeHeader pageProps={pageProps} />
      <div id='about' className='pt-10 pb-20 md:py-20 px-3 md:px-20'>
        <div className='text-xl text-center'>
          <p>
            As a software engineer with a passion for leveraging technology to make a positive impact,
            I am exploring opportunities where I can leverage my technical expertise and drive for innovation. 
            I thrive in dynamic environments with complex challenges where I can apply my technical skills, customer focused approach
            and business acumen to improve and advance products.
          </p>
          <p className='pt-6'>
            I lead a digital strategy consulting firm where I help small businesses and non-profits grow their online presence. My
            experience in front-end development allows me to create engaging user experiences that drive engagement. I specialize in
            translating complex business requirements into user-friendly interfaces that align with branding and marketing goals.
            Additionally, my background in nonprofit fundraising has honed my skills in data analysis and strategic planning, which
            are essential for developing effective digital strategies. Whether you're looking to enhance your online presence,
            optimize conversion rates, or improve user engagement, I have the expertise to help you achieve your goals.
          </p>
          <p className='pt-6'>
            In my free time, I indulge my love for travel, education, literature, and the joy of building with Legos. I am a lifelong learner,
            constantly seeking new challenges and knowledge to fuel my curiosity. 
            <br/>
            To view my resume, click <a className='hover:underline' href={resume} target='_blank' rel='noreferrer'>here</a>.
          </p>
        </div>
        <Timeline />
      </div>
    </Fragment>
  )
}

export default Home;