import "./StudyPage.css";

import {
	Spoiler,
	Text,
	Group,
	useMantineTheme,
} from "@mantine/core";

import studyData from "../../data/studylog_data.json";

export function StudyPage() {

	const theme = useMantineTheme();

	return (
		<>
			<div className="study-outer">
				{studyData.map((item, index) => (
					<>
						<div className="study-node" key={index}>
							<Group>
								<span role="img" aria-label={"placeholder label"}>
									{item.symbol}
								</span>
								<Text
									className="study-node-title" c={theme.white}
								>
									{item.title}
								</Text>
							</Group>
							<Group>
								{item.categories.map(category => (
									<Text className="study-category">[ {category} ]</Text>
								))}
							</Group>
							<div className="study-node-text">
								{item.description &&
								item.description
									.split("\\n")
									.map((line, i) => <Text key={i}>{line}</Text>)
								}
							</div>
							
						</div>
					</>
				))

				}
			</div>
		</>
	);
};