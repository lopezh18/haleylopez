import React, { Fragment, useContext } from 'react';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { useOutletContext } from 'react-router-dom';
import { ProjectsContext } from '../../contexts/projects';

const ProjectsList = () => {
  const { pageProps } = useOutletContext()
  const { projects } = useContext(ProjectsContext)
  let projectKeys = Object.keys(projects);
  projectKeys.sort((a,b) => projects[b].sortOrder - projects[a].sortOrder);
  
  return (
    <div>
      <Header pageProps={pageProps}/>
      <div className='bg-green flex items-center flex-col pb-20'>
      {projects && projectKeys.map((name) => {
        return (
            <Fragment key={projects[name].id}>
              <ProjectCard name={name} projectDetails={projects[name]}/>
            </Fragment>
        )
      })}
      </div>
    </div>
  )
}

export default ProjectsList;