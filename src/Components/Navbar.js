import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react'

const blog = 'https://daysha-vu.medium.com/'
const linkedIn = 'https://www.linkedin.com/in/dayshajones/'
const github = 'https://github.com/dayshajones'
const youtube = 'https://www.youtube.com/channel/UClCwyhvBu20SGkO0V2fVPQA'
const resume = 'https://docs.google.com/document/d/13FWPKUwKbN6jfze3OTDB0u1O4fBcP9xNqHpPlIHiNuk/edit?usp=sharing'

const Navbar = () => {
    return (
        <Menu>
            <Menu.Item>
            <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item>
            <Link to="/about">About</Link>
            </Menu.Item>

            <Menu.Item>
            <a href={blog} target={blog}>Blog</a>
            </Menu.Item>

            <Menu.Item>
            <a href={resume} target={resume}>Resume</a>
            </Menu.Item>

            <Menu.Item href={github} target={github}>
            <Icon name="github" />
            </Menu.Item>

            <Menu.Item href={linkedIn} target={linkedIn}>
            <Icon name="linkedin" />
            </Menu.Item>


            <Menu.Item href={youtube} target={youtube}>
            <Icon name="youtube" />
            </Menu.Item>
        </Menu>
    )

}

export default Navbar