import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

const blog = 'https://daysha-vu.medium.com/'
const linkedIn = 'https://www.linkedin.com/in/dayshajones/'
const github = 'https://github.com/dayshajones'
const youtube = 'https://www.youtube.com/channel/UClCwyhvBu20SGkO0V2fVPQA'

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
            <a href={github} target={github}>Github</a>
            </Menu.Item>

            <Menu.Item>
            <a href={linkedIn} target={linkedIn}>LinkedIn</a>
            </Menu.Item>

            <Menu.Item>
            <a href={blog} target={blog}>Blog</a>
            </Menu.Item>

            <Menu.Item>
            <a href={youtube} target={youtube}>YouTube</a>
            </Menu.Item>
        </Menu>
    )

}

export default Navbar