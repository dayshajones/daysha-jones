import React from "react";
import '../ProjectCard/ProjectCard.css';
import {
    Card,
    Icon,
    Image
} from 'semantic-ui-react'

const ProjectCard = ({title, url, liveSite, img}) => {
    return (
        <Card>
            <Image src={img} alt={title} size='big'/>
            <Card.Content>
            <Card.Header as='h2'>{title}</Card.Header>
            <br />
            <br />
            <a href={liveSite} target={liveSite}>live site</a>
            <br />
            <a href={url} target={url}><Icon name='github' size='big' /></a>
            </Card.Content>
        </Card>
    )

}

export default ProjectCard