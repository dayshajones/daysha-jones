import React, {useEffect, useState} from "react";
import { Container, Button } from 'semantic-ui-react'
import ProjectCard from './ProjectCard/ProjectCard'

const ProjectsContainer = () => {

    const [projectData, setProjectsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/projects")
        .then((r) => r.json())
        .then((results) => setProjectsData(results))
    }, [])


    const handleSort = () => {
        const newSorted = [...projectData].sort((a,b) => {
            return a.title > b.title ? 1 : -1
        })
        setProjectsData(newSorted)
    }

    
    return (
        <Container>
        <Button onClick={handleSort}>sort</Button>
            {projectData.map((project) => <ProjectCard {...project} key={project.id}/>)}
        </Container>
    )
}

export default ProjectsContainer