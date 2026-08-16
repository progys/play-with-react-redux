import { test, expect } from "@playwright/test";

test.describe("Joke App", () => {
  test("shows initial prompt", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Press to load a Joke!")).toBeVisible();
    await expect(page.getByRole("button", { name: "Show!" })).toBeVisible();
  });

  test("loads and displays a joke after clicking Show", async ({ page }) => {
    await page.route("https://api.chucknorris.io/jokes/random", (route) =>
      route.fulfill({
        json: {
          icon_url: "https://example.com/chuck.png",
          value: "Chuck Norris can exit Vim.",
        },
      })
    );

    await page.goto("/");

    await page.getByRole("button", { name: "Show!" }).click();

    const image = page.getByRole("img", { name: "joke" });
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("src", "https://example.com/chuck.png");

    await expect(page.getByText("Chuck Norris can exit Vim.")).toBeVisible();
  });

  test("loads a different joke on second click", async ({ page }) => {
    let callCount = 0;
    await page.route("https://api.chucknorris.io/jokes/random", (route) => {
      callCount++;
      route.fulfill({
        json: {
          icon_url: "https://example.com/chuck.png",
          value: callCount === 1 ? "First joke" : "Second joke",
        },
      });
    });

    await page.goto("/");

    await page.getByRole("button", { name: "Show!" }).click();
    await expect(page.getByText("First joke")).toBeVisible();

    await page.getByRole("button", { name: "Show!" }).click();
    await expect(page.getByText("Second joke")).toBeVisible();
  });
});
