import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="title">
                John Salinas
            </Link>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </nav>
    )
}