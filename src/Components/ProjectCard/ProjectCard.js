import React from "react";
import '../ProjectCard/ProjectCard.css';

import { Container, Header, Icon} from 'semantic-ui-react'

const ProjectCard = ({title, url}) => {
    return (
        <Container>
            <Header as='h2'>{title}</Header>
            <a href={url} target={url}><Icon name='github' size='big' /></a>
        </Container>
    )

}

export default ProjectCard