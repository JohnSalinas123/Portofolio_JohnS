import { useState, useRef, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HorizontalDivider } from "../components/HorizontalDivider.jsx";
import { FaArrowUp } from "react-icons/fa";

import "./StudyLogSection.css";

import {
	Paper,
	SegmentedControl,
	Timeline,
	Spoiler,
	Title,
} from "@mantine/core";

// import learning ndoe data from json
import nodeData from "../data/studylog_data.json";

export const StudyLogSection = () => {
	const [activeTopic, setActiveTopic] = useState(nodeData[0].value);

	const selectedTopic = nodeData.find((topic) => topic.value === activeTopic);

	return (
		<div role="region" aria-label="studylog">
			<div id="studylog-display" role="group" aria-label="studylog">
				<SegmentedControl
					value={activeTopic}
					onChange={setActiveTopic}
					data={nodeData.map((topic) => ({
						label: topic.label,
						value: topic.value,
					}))}
				/>
				{selectedTopic && <StudyLogNodes selectedTopic={selectedTopic} />}
			</div>
		</div>
	);
};

export const StudyLogNodes = ({ selectedTopic }) => {
	const completedCount =
		selectedTopic.nodes.slice(0, 3).filter((node) => node.completed).length - 1;

	return (
		<>
			<Timeline
				m={20}
				active={completedCount}
				reverseActive
				bulletSize={24}
				lineWidth={3}
			>
				{selectedTopic.nodes.slice(0, 3).map((node, index) => (
					<Timeline.Item key={index}>
						<Paper radius="md" role="listitem">
							<div className="study-node">
								<Title order={3} size="h4" className="study-node-title">
									{node.title}
								</Title>
								<Spoiler
									maxHeight={120}
									showLabel="Show more"
									hideLabel="Hide"
									className="study-node-text"
								>
									{node.text &&
										node.text
											.split("\\n")
											.map((line, i) => <p key={i}>{line}</p>)}
								</Spoiler>
							</div>
						</Paper>
					</Timeline.Item>
				))}
			</Timeline>
		</>
	);
};
