import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { vi, describe, it, beforeEach, expect } from "vitest";
import App from "./AppContainer";

beforeEach(() => {
  vi.restoreAllMocks();
});

it("renders without crashing", () => {
  render(<App />);
});

it("renders content", () => {
  const { container, getByText } = render(<App />);
  expect(getByText("Show!")).toBeDefined();
  expect(container).toHaveTextContent("Press to load a Joke!");
});

it("loads image after clicking Show", async () => {
  const fakeUrl = "https://example.com/fake-thumbnail.jpg";
  const fakeText = "Chuck Norris can divide by zero.";
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: async () => ({
      icon_url: fakeUrl,
      value: fakeText
    })
  } as Response);

  render(<App />);
  fireEvent.click(screen.getByText("Show!"));
  const image = await screen.findByAltText("joke");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", fakeUrl);
  expect(screen.getByText(fakeText)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith("https://api.chucknorris.io/jokes/random");
});
