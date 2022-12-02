import React from "react";
import { Container, Header, List, Divider} from 'semantic-ui-react'
import ProjectCard from './ProjectCard/ProjectCard'
import projects from './Projects'
import Fade from 'react-reveal/Fade';

const ProjectsContainer = () => {
    
    return (
        <Container className="projects" textAlign='left'>
            <Fade bottom>
            <List>
            <Divider horizontal>
            <Header><h1>Projects:</h1></Header>
            </Divider>
           
            {projects.map((project) => <ProjectCard {...project} key={project.id}/>)}
            </List>
            </Fade>
        </Container>
    )
}

export default ProjectsContainer