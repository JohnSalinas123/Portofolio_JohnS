import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { StudyLogPage, StudyLogDisplay } from "../pages/StudyLogPage";
import studylogData from "../data/studylog_data.json";
import "@testing-library/jest-dom";

jest.mock("../data/studylog_data.json", () => [
	{
		name: "Topic 1",
		nodes: [
			{ title: "Node 1", text: "This is the first node." },
			{ title: "Node 2", text: "This is the second node." },
		],
	},
	{
		name: "Topic 2",
		nodes: [
			{ title: "Node 3", text: "This is the third node." },
			{ title: "Node 4", text: "This is the fourth node." },
		],
	},
]);

describe("StudyLogPage", () => {
	const originalError = console.error;

	beforeAll(() => {
		console.error = (...args) => {
			if (
				/Unknown event handler property|Received `true` for a non-boolean attribute/.test(
					args[0]
				)
			) {
				return; // Ignore specific warnings
			}
			originalError(...args); // Call the original console.error for other errors
		};
	});

	afterAll(() => {
		console.error = originalError; // Restore original console.error
	});

	// test rendering of study log page
	test("renders without crashing", () => {
		render(<StudyLogPage />);
		const regionElement = screen.getByRole("region", { name: /studylog/i });
		expect(regionElement).toBeInTheDocument();
	});

	test("renders StudyLogSelector", () => {
		render(<StudyLogDisplay />);
		const studyLogSelector = screen.getByRole("group", { name: /studylog/i });
		expect(studyLogSelector).toBeInTheDocument();
	});

	test("initial state of selectedTopic corresponds to the first item in nodeData", () => {
		render(<StudyLogDisplay />);
		const firstNodeTitle = screen.getByText("Node 1");
		expect(firstNodeTitle).toBeInTheDocument();
	});

	it("displays the correct number of nodes on start", () => {
		render(<StudyLogDisplay />);
		const studyLogNodes = screen.getAllByRole("listitem");
		expect(studyLogNodes.length).toBe(studylogData[0].nodes.length);
	});
});
