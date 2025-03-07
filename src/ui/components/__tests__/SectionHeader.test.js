import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionHeader from "../SectionHeader";

describe("SectionHeader Component", () => {
  test("renders the section header", () => {
    render(<SectionHeader text="Test Header" />);

    // Check if text appears correctly
    expect(screen.getByText("Test Header")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/assets/svg/star.svg");
  });
});
