import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ProjectsPage } from "../pages/pagesIndex";
import projectsData from "../data/projects_data.json";
import "@testing-library/jest-dom";

describe("ProjectsPage", () => {
	// test rendering of projects page
	test("renders without crashing", () => {
		render(<ProjectsPage />);
		const regionElement = screen.getByRole("region", { name: /projects/i });
		expect(regionElement).toBeInTheDocument();
	});

	// test rendering of project gallery
	test("renders ProjectGallery inside ProjectsPage", () => {
		render(<ProjectsPage />);
		const galleryElement = screen.getByTestId("projects");
		expect(galleryElement).toBeInTheDocument();
	});

	// test rendering of correct number of projects based on projects_data.json
	it("displays the correct number of projects", () => {
		render(<ProjectsPage />);
		const projectImages = screen.getAllByRole("img");
		expect(projectImages.length).toBe(projectsData.length);
	});
});
