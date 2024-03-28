import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ name, projectDetails }) => {
    const { image, fullName, role, shortDescription } = projectDetails;

    return (
        <div className='bg-white flex flex-col items-center w-11/12 lg:w-11/20 max-w-3xl rounded-xl text-center mb-5 py-7'>
            <img alt={`${fullName} home page`} className='w-11/12 md:w-10/12' src={image} />
            <div className='py-3 md:py-7 mx-3 md:mx-10'>
                <h1 className='text-2xl md:text-4xl'>{fullName}</h1>
                <p className='text-dark-grey text-lg'>{role}</p>
                <p>{shortDescription}</p>
            </div>
            <Link className='bg-grey px-6 py-3 rounded-lg hover:underline hover:bg-darker-grey' to={name}>
                View Project
            </Link>
        </div>
    );
};

export default ProjectCard;