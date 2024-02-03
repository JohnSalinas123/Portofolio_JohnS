import React from 'react'
import {useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Navbar.css"

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <nav className="main-color">
            <div className="menu" onClick={() => {setMenuVisible(!menuVisible)}}>
                <RxHamburgerMenu />
            </div>
            <div className="nav-edge-container logo-container">
                <div className="logo-box">
                    <NavLink to="/" className="logo-link">John Salinas</NavLink>
                </div>
                
            </div>
            <div className="nav-container">
                <ul className={menuVisible ? "open" : ""}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    
                    <li className="menu-socials">
                        <a href="https://www.linkedin.com/in/johnsalinas123/" target="_blank"><FaLinkedin className="social-icon"/></a>
                        <a href = "mailto: salinasjohn257@gmail.com" target="_blank"><IoIosMail className="social-icon"/></a>
                        <a href = "https://github.com/JohnSalinas123" target="_blank"><FaGithub className="social-icon"/></a>
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