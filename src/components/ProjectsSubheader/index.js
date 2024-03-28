import React, { Fragment } from 'react';

const ProjectsSubheader = ({ company, details }) => {
    const { role,stack, team } = details
    return (
        <Fragment>
            <h1 className='text-center pt-9 font-serif'>{company}</h1>
            <div className='flex justify-between'>
                <p className='flex flex-col md:flex-row'><b>Role:&nbsp;</b>{role}</p>
                <p className='flex flex-col md:flex-row'><b>Team:&nbsp;</b>{team}</p>
            </div>
            <div className='flex flex-col md:flex-row mt-7 md:w-3/5'>
                <p><b className='whitespace-nowrap'>Tech Stack:</b>&nbsp;</p>
                <ul className='inline'>
                    {stack.map((tool, idx) => (
                        <li key={`tool-${idx+1}`} className='inline-flex'>
                            <p>{tool}</p>{idx < stack.length - 1 && <p className='mx-1 inline'>|</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default ProjectsSubheader;