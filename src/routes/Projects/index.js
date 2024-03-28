import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';
import ProjectsList from '../ProjectsList';

const Projects = () => {
  
  return (
    <Routes>
      <Route index element={<ProjectsList />}/>
      <Route path=':name' element={<ProjectDetails />}/>
    </Routes>
  ) 
}

export default Projects;
