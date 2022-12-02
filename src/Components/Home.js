import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import About from "./About";
import { Container } from 'semantic-ui-react'

const Home = () => {
    return (
        <Container className="home">
            <About />
            <ProjectsContainer />
        </Container>
    )

}

export default Home