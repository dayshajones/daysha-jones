import React from "react";
import { Container } from 'semantic-ui-react'

const About = () => {
    return (
        <Container className="about">
            <div className="about-photo">
            <img src="daysha.jpeg" alt="daysha" />
            <img src="name.png" alt="dayshajones" />
            </div>
            <p>
            Software Developer with a background in beauty. 
            As an esthetician and previous business owner, 
            I bring a uniquely detailed and creative perspective to every project. 
            Thrive in a fast-paced environment where I can contribute my problem-solving
            acumen and drive for excellence.
            </p>
        </Container>
    )
}

export default About