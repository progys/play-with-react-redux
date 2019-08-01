import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./AppContainer";

it("renders without crashing", () => {
  render(<App />);
});

it("renders content", () => {
  const { container, getByText } = render(<App />);
  expect(getByText("Show!")).toBeDefined();
  expect(container).toHaveTextContent("Press to load a Joke!");
});

it("loads image", async () => {
  const { getByText, findByAltText } = render(<App />);
  fireEvent.click(getByText("Show!"));
  const image = await findByAltText("joke");
  expect(image).toBeInTheDocument();
});
