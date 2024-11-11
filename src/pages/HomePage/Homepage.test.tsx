import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { HomePage } from "../HomePage"

describe("Page", () => {
	test("renders a hello", () => {
		render(<HomePage />)
		const hello: HTMLElement = screen.getByText("Hello from Workspace!")
		expect(hello).toBeInTheDocument()
	})
})