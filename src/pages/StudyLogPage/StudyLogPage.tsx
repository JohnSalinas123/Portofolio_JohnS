import { useState } from "react";

import "./StudyLogPage.css";

import {
	Paper,
	SegmentedControl,
	Timeline,
	Spoiler,
	Title,
	Text,
	Divider,
} from "@mantine/core";

// import learning ndoe data from json
import nodeData from "../../data/studylog_data.json";

interface StudyLogNode {
	completed: boolean;
	title: string;
	text: string;
}

interface StudyLogTopic {
	label: string;
	value: string;
	nodes: StudyLogNode[];
}

interface StudyLogSectionProps {
	selectedTopic: StudyLogTopic;
}

export const StudyLogPage = () => {
	const [activeTopic, setActiveTopic] = useState<string>(nodeData[0].value);

	const selectedTopic = nodeData.find((topic) => topic.value === activeTopic);

	return (
		<>
			<div className="container-center">
				<div className="box-container">
					<div className="studylog-display" role="group" aria-label="studylog">
						<SegmentedControl
							value={activeTopic}
							onChange={setActiveTopic}
							data={nodeData.map((topic) => ({
								label: topic.label,
								value: topic.value,
							}))}
						/>
						<Divider my="sm" w="100%" color="#424242" />
						{selectedTopic && <StudyLogNodes selectedTopic={selectedTopic} />}
					</div>
				</div>
			</div>
		</>
	);
};

export const StudyLogNodes = ({ selectedTopic }: StudyLogSectionProps) => {
	const completedCount =
		selectedTopic.nodes.slice(0, 3).filter((node) => node.completed).length - 1;

	return (
		<>
			<Timeline
				m={8}
				active={completedCount}
				reverseActive
				bulletSize={24}
				lineWidth={3}
				color="var(--primary)"
				className="study-timeline"
			>
				{selectedTopic.nodes.slice(0, 3).map((node, index) => (
					<Timeline.Item key={index}>
						<Paper radius="md" role="listitem" shadow="sm" withBorder>
							<div className="study-node">
								<Title
									order={3}
									size="h4"
									className="study-node-title sub-heading c-white"
								>
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
											.map((line, i) => <Text key={i}>{line}</Text>)}
								</Spoiler>
							</div>
						</Paper>
					</Timeline.Item>
				))}
			</Timeline>
		</>
	);
};
