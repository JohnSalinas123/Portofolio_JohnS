import { useState, useRef, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HorizontalDivider } from "../components/HorizontalDivider.jsx";

import "./ProgressPage.css";

// import progress data from json
import progressData from "../data/ProgressData.json";

export const ProgressPage = () => {
	return <ProgressDisplay />;
};

const ProgressDisplay = () => {
	const [selectedTopic, setSelectedTopic] = useState(progressData[0]);

	return (
		<>
			<div id="progress-display">
				<ProgressSelector setSelectedTopic={setSelectedTopic} />
				<CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
					<HorizontalDivider />
				</CSSTransition>

				<ProgressNodes selectedTopic={selectedTopic} />
			</div>
		</>
	);
};

const ProgressSelector = ({ setSelectedTopic }) => {
	const [activeTopic, setActiveTopic] = useState(progressData[0]);

	const handleTopicClick = (topic) => {
		setSelectedTopic(topic);
		setActiveTopic(topic);
	};

	return (
		<>
			<TransitionGroup className="progress-selector">
				{progressData.map((topic, index) => (
					<CSSTransition
						in={true}
						appear={true}
						key={index}
						timeout={1000}
						classNames="fade"
					>
						<button
							key={index}
							className={`topic-button ${
								activeTopic === topic ? "topic-button-active" : ""
							}`}
							onClick={() => handleTopicClick(topic)}
						>
							{topic.name}
						</button>
					</CSSTransition>
				))}
			</TransitionGroup>
		</>
	);
};

const ProgressNodes = ({ selectedTopic }) => {
	console.log(selectedTopic.nodes[0].text);

	return (
		<>
			<TransitionGroup className="progress-nodes">
				{selectedTopic.nodes.map((node, index) => (
					<CSSTransition
						in={true}
						appear={true}
						key={index}
						timeout={1000}
						classNames="fade"
					>
						<div>
							<div key={index} className="p-node">
								<h3 className="p-node-title">{node.title}</h3>
								<div className="p-node-text">
									{node.text &&
										node.text
											.split("\\n")
											.map((line, i) => <p key={i}>{line}</p>)}
								</div>
							</div>
							<div className="p-node-path"></div>
						</div>
					</CSSTransition>
				))}
				<div className="p-node-start">Start</div>
			</TransitionGroup>
		</>
	);
};
