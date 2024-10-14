import "./HomePage.css";
import { CSSTransition } from "react-transition-group";

export const HomePage = () => {
	return (
		<>
			<CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
				<div id="home-box">
					<div id="intro-box">
						<img
							id="intro-image"
							src="johnsalinas_profilepic.jpg"
							alt="Image of john salinas"
						/>
						<div id="intro-text-box inter-400">
							<p id="intro-text">
								{" "}
								Hi!, I&apos;m <br /> John Salinas,
								<br />
								Software Engineer{" "}
							</p>
							<p id="intro-sub-text">Dedicated to growth and development.</p>
							<p id="intro-summary">
								Thank you for visiting! Take a look at my projects and
								experiences <br />
								to learn more about my journey in software engineering.
							</p>
						</div>
					</div>
				</div>
			</CSSTransition>
		</>
	);
};
