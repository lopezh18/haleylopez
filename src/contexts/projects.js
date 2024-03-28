import { createContext, useEffect, useState } from 'react';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
import projectsData from '../projectsData';

// the actual value you want to access
export const ProjectsContext = createContext({
    projects: {},
});

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        // addCollectionAndDocuments('projects', projectsData)
       const getCategoriesMap = async () => {
        const projectsMap = await getCategoriesAndDocuments('projects')
        setProjects(projectsMap)
       }
       getCategoriesMap();
    }, []);

    const value = { projects };

    return <ProjectsContext.Provider value = {value}>{children}</ProjectsContext.Provider>
}
