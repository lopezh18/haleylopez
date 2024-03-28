import React  from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
       <div className='pt-10 pb-20 md:py-20 px-3 md:px-24 flex justify-center'>
            <div className='text-center w-fit'>
                <h1 className='text-center pb-10'>Whoops! You've Discovered Uncharted Territory 🌍✨</h1>
                <p>
                    Hold up, adventurer! It looks like the page you were trying to reach has mysteriously vanished or never existed.
                    <br/>
                    But don't worry! We've got several magical pathways for you to choose from:
                </p>
                <ul className='text-left px-5'>
                    <li><Link className='hover:underline' to='/'>🏠 Return to our Home Base: Home Page</Link></li>
                    <li><Link className='hover:underline' to='/projects'>📚 Explore my Projects: Learn more about my professional contributions and side projects.</Link></li>
                    <li><a
                        className='hover:underline'
                        href='https://www.linkedin.com/in/haleyalopez/'
                        rel='noreferrer'
                        target='_blank'>
                            💻 Visit my LinkedIn: Learn more about my professional background.
                        </a>
                    </li>
                </ul>
                <p>
                    🤝 Contact me if you have further questions. 
                    <br/>
                    Happy Exploring!
                </p>
            </div>
        </div>
    );
};

export default NotFound;