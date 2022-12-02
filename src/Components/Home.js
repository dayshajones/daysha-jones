import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import About from "./About";
import { Container } from 'semantic-ui-react'
// import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container className="home">
            <About />
            <ProjectsContainer />
        </Container>
    )

}

export default Home