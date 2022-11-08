import React from "react";
import { Container } from 'semantic-ui-react'

const resume = 'https://docs.google.com/document/d/13FWPKUwKbN6jfze3OTDB0u1O4fBcP9xNqHpPlIHiNuk/edit?usp=sharing'

const About = () => {
    return (
        <Container>
            <button className="ui button">
            <a href={resume} target={resume}>Resume</a>
            </button>
            <p>
            Trading in my career as a beauty professional for a career in tech. 
            My interested for tech peaked when I worked on my website for my Esthetics business. 
            Due to the pandemic, I aquired quite a bit of free time which allowed me to graduate 
            from the Software Engineering program with Flatiron, 
            as well as refine my skills as a new developer.
            </p>
            <p>
            Software Developer with a background in Esthetics. 
            As an esthetician and previous business owner, 
            I bring a uniquely detailed and creative perspective to every project. 
            Thrive in a fast-paced environment where I can contribute my problem-solving
            acumen and drive for excellence.
            </p>
        </Container>
    )
}

export default About