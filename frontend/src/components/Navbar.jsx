import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	window.addEventListener("scroll", function () {
		const nav = document.querySelector("nav");
		if (window.scrollY > 20) {
			// Adjust the scroll value as needed
			nav.classList.add("scrolled");
		} else {
			nav.classList.remove("scrolled");
		}
	});

	return (
		<nav>
			<div className="nav-edge-container logo-container">
				<h1 className="logo-box">
					<Link to="/" className="inter-700 logo-link">
						John Salinas
					</Link>
				</h1>
			</div>

			<div className="nav-container">
				<ul className={menuVisible ? "open" : ""}>
					<li>
						<NavLink to="/projects" className="nav-element">
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="/studylog" className="nav-element">
							Study Log
						</NavLink>
					</li>

					<li className="menu-socials">
						<a
							href="https://www.linkedin.com/in/johnsalinas123/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin className="social-icon" />
						</a>
						<a
							href="mailto: salinasjohn257@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<IoIosMail className="social-icon" />
						</a>
						<a
							href="https://github.com/JohnSalinas123"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub className="social-icon" />
						</a>
					</li>
				</ul>
			</div>
			<div className="nav-mobile-spacer">

			</div>
			<div className={`nav-menu ${menuVisible ? "active" : ""}`}>
				<RxHamburgerMenu
					onClick={() => {
						setMenuVisible(!menuVisible);
					}}
				/>
			</div>
			<div className="nav-edge-container social-container">
				<a
					href="https://www.linkedin.com/in/johnsalinas123/"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin className="social-icon" />
				</a>
				<a
					href="mailto: salinasjohn257@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					<IoIosMail className="social-icon" />
				</a>
				<a
					href="https://github.com/JohnSalinas123"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub className="social-icon" />
				</a>
			</div>
		</nav>
	);
};
