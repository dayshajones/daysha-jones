import React from "react";
import { Container } from 'semantic-ui-react'
import ProjectCard from './ProjectCard/ProjectCard'
import projects from './Projects'

const ProjectsContainer = () => {
    
    return (
        <Container>
            {projects.map((project) => <ProjectCard {...project} key={project.id}/>)}
        </Container>
    )
}

export default ProjectsContainer