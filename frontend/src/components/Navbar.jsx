import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Navbar = () => {
    return (
        <nav>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav-edge-container logo-container">
                <NavLink to="/" className="logo-link"><div>JS</div></NavLink>
            </div>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav-edge-container social-container">
                <a href="https://www.linkedin.com/in/johnsalinas123/" target="_blank"><FaLinkedin className="social-icon"/></a>
                <a href = "mailto: salinasjohn257@gmail.com" target="_blank"><IoIosMail className="social-icon"/></a>
                <a href = "https://github.com/JohnSalinas123" target="_blank"><FaGithub className="social-icon"/></a>
            </div>
            
        </nav>
    )
}