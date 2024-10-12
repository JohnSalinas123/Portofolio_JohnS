import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<nav>
			<div
				className="menu"
				onClick={() => {
					setMenuVisible(!menuVisible);
				}}
			>
				<RxHamburgerMenu />
			</div>
			<div className="nav-edge-container logo-container">
				<div className="logo-box">
					<h1>
						<Link to="/" className="inter-700 logo-link">
							John Salinas
						</Link>
					</h1>
				</div>
			</div>
			<div className="nav-container inter-500">
				<ul className={menuVisible ? "open" : ""}>
					<li>
						<NavLink to="/projects" className="nav-element">
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="/progress" className="nav-element">
							Progress
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
