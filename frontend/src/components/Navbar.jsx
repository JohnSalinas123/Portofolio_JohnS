import React, { useEffect } from 'react'
import {useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Navbar.css"

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled)
        };    
            
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
        
        
    }, []);

    

    return (
        <nav className={`main-color ${scrolled ? 'nav-background' : ''}`}>
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
                        <NavLink to="/" className="nav-element">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-element">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className="nav-element">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="nav-element">Blog</NavLink>
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