import React, { useEffect } from 'react'
import {useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll'
import "./Navbar.css"

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    

    return (
        <nav >
            <div className="menu" onClick={() => {setMenuVisible(!menuVisible)}}>
                <RxHamburgerMenu />
            </div>
            <div className="nav-edge-container logo-container">
                <div className="logo-box">
                    <Link 
                        to="top"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="inter-700 logo-link"
                    >John Salinas</Link>
                </div>
                
            </div>
            <div className="nav-container inter-500">
                <ul className={menuVisible ? "open" : ""}>
                    <li>
                        <Link 
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-element"
                        >About</Link>
                    </li>
                    <li>
                        <Link 
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-element"
                        >Skills</Link>
                    </li>
                    <li>
                        <Link 
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-element"
                        >Projects</Link>
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