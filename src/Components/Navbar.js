import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'


const Navbar = () => {
    return (
        <Menu>
            <Menu.Item>
            <Link to="/">home</Link>
            </Menu.Item>

            <Menu.Item>
            <Link to="/about">about</Link>
            </Menu.Item>
        </Menu>
    )

}

export default Navbar