import React  from 'react';

const NotFound = () => {
    return (
       <div className='pt-10 pb-20 md:py-20 px-3 md:px-24 flex justify-center'>
            <div className='text-center w-fit'>
                <h1 className='text-center pb-5'>Let's Chat</h1>
                <p>
                    I'm always open to discussing new opportunities, projects, or simply connecting to exchange ideas.
                    Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
                </p>
                <div className='py-10 text-left'>
                    <div className='pb-7'>
                        <p className='text-3xl pb-2'>Let's Connect on LinkedIn</p>
                        <p>
                            Find me on LinkedIn to view my professional profile, endorsements, and network. It's a great
                            place to connect and discuss industry trends, opportunities, and professional growth.
                        </p>
                        <a className='text-lime font-semibold' href='https://www.linkedin.com/in/haleyalopez/' target='_blank' rel='noreferrer'>Visit my LinkedIn Profile</a>
                    </div>
                    <div className='pb-7'>
                        <p className='text-3xl pb-2'>Email Me Directly</p>
                        <p>
                            For more direct communication, especially regarding specific inquiries, proposals, or projects,
                            email is the best way to reach me. I aim to respond within 24-48 hours.
                        </p>
                        <a className='text-lime font-semibold' href='mailto:haleylopez95@gmail.com?subject=Portfolio Inquiry'>haleylopez95@gmail.com</a>
                    </div>
                    <div>
                        <p className='text-3xl pb-2'>Stay Updated</p>
                        <p>
                            If you're interested in staying updated with my latest projects, articles, or professional milestones,
                            LinkedIn is where I share significant updates and insights. Follow me there to be part of my professional
                            journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;