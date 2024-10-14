import { useState, useRef, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HorizontalDivider } from "../components/HorizontalDivider.jsx";

import "./StudyLogPage.css";

// import learning ndoe data from json
import nodeData from "../data/StudyLogNodeData.json";

export const StudyLogPage = () => {
	return <StudyLogDisplay />;
};

const StudyLogDisplay = () => {
	const [selectedTopic, setSelectedTopic] = useState(nodeData[0]);

	return (
		<>
			<div id="studylog-display">
				<StudyLogSelector setSelectedTopic={setSelectedTopic} />
				<CSSTransition appear={true} timeout={1000} classNames="fade">
					<HorizontalDivider />
				</CSSTransition>

				<StudyLogNodes selectedTopic={selectedTopic} />
			</div>
		</>
	);
};

const StudyLogSelector = ({ setSelectedTopic }) => {
	const [activeTopic, setActiveTopic] = useState(nodeData[0]);

	const handleTopicClick = (topic) => {
		setSelectedTopic(topic);
		setActiveTopic(topic);
	};

	return (
		<>
			<TransitionGroup className="studylog-selector">
				{nodeData.map((topic, index) => (
					<CSSTransition
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

const StudyLogNodes = ({ selectedTopic }) => {
	return (
		<>
			<TransitionGroup className="studylog-nodes">
				{selectedTopic.nodes.map((node, index) => (
					<CSSTransition
						appear={true}
						key={index}
						timeout={1000}
						classNames="fade"
					>
						<div>
							<div key={index} className="study-node">
								<h3 className="study-node-title">{node.title}</h3>
								<div className="study-node-text">
									{node.text &&
										node.text
											.split("\\n")
											.map((line, i) => <p key={i}>{line}</p>)}
								</div>
							</div>
							<div className="study-node-path"></div>
						</div>
					</CSSTransition>
				))}
				<div className="study-node-start">Start</div>
			</TransitionGroup>
		</>
	);
};
