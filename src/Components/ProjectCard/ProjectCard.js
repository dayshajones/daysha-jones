import React from "react";
import '../ProjectCard/ProjectCard.css';
import {
    List,
    Icon,
    Image
} from 'semantic-ui-react'

const ProjectCard = ({title, url, liveSite, img}) => {
    return (
        <List.Item>
            <List.Content>
            <List.Header as='h2'>{title}</List.Header>
            <a href={liveSite} target={liveSite}>live site</a>
            <a href={url} target={url}><Icon name='github'/></a>
            </List.Content>
            <Image className="project-img" src={img} alt={title} size='big'/>
        </List.Item>
    )

}

export default ProjectCard