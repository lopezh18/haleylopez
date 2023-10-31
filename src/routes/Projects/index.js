import React from 'react';
import Header from '../../components/Header';
import { useOutletContext } from 'react-router-dom';
const Projects = () => {
  const { pageProps } = useOutletContext()

  return (
    <div>
      <Header pageProps={pageProps}/>
      <h1>
        Hello world from projects.
      </h1>
    </div>
  )
}

export default Projects;