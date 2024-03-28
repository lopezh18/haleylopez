import React, {useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProjectsContext } from '../../contexts/projects';
import ListComponent from '../../components/ListComponent';
import ProjectsSubheader from '../../components/ProjectsSubheader';

const ProjectDetails = () => {
    const { name } = useParams();
    const { projects } = useContext(ProjectsContext);
    const [project, setProject] = useState(projects[name]);

    useEffect(() => {
        setProject(projects[name]);
    }, [name, projects])

    return (
        <div className='pt-9 pb-20 flex justify-center'>
            {
                project && 
                <div className='mx-5 lg:w-4/5'>
                    <img alt={`${project.fullName} site screenshot`} className='rounded-lg md:hidden' src={project.image}/>
                    <div className='rounded-lg hidden md:block' style={{backgroundImage: `url(${project.image})`, width: '100%', height: '350px', 'backgroundPosition': '10%', 'backgroundSize': 'cover' }}/>
                    <ProjectsSubheader
                        company={project.fullName}
                        details={{
                            role: project.role,
                            stack: project.stack,
                            team: project.team,
                        }}
                    />
                    <div className='bg-taupe px-5 py-7 rounded-lg my-8'>
                        <p className='text-center'>{project.shortDescription}</p>
                        <div className='my-5'>
                            <p className='text-4xl font-bold'>The Problem</p>
                            <p>{project.problem}</p>
                        </div>
                        <div className='my-5'>
                            <p className='text-4xl font-bold'>The Solution</p>
                            <p>{project.solution}</p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <ListComponent header='Responsibilities' items={project.responsibilities}/>
                    </div>
                    <div className='my-5'>
                        <ListComponent header='Noteworthy Achievements' items={project.milestones} />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectDetails;