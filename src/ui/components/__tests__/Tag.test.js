import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tag from "../Tag";

describe("Tag Component", () => {
  test("renders without crashing", () => {
    render(<Tag tags={["React", "JavaScript", "CSS"]} />);
  });

  test("renders the correct number of tags", () => {
    const tags = ["React", "JavaScript", "CSS"];
    render(<Tag tags={tags} />);

    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });

    expect(screen.getAllByText(/React|JavaScript|CSS/i)).toHaveLength(
      tags.length
    );
  });

  test("renders empty state when tags array is empty", () => {
    render(<Tag tags={[]} />);

    expect(screen.queryByRole("div")).not.toBeInTheDocument();
  });
});
