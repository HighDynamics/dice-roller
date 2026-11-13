import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, vi } from "vitest";
import App from "./App";

afterEach(() => {
  vi.restoreAllMocks();
});

test("renders a button for each die", () => {
  render(<App />);

  const labels = screen.getAllByRole("button").map((b) => b.textContent);
  expect(labels).toEqual(["20", "12", "10", "8", "6", "4", "100"]);
});

test("rolling a die shows a result between 1 and its sides", async () => {
  const user = userEvent.setup();
  vi.spyOn(Math, "random").mockReturnValue(0.5);
  render(<App />);

  await user.click(screen.getByRole("button", { name: "20" }));

  // floor(0.5 * 20) + 1
  expect(screen.getByText("11")).toBeInTheDocument();
});

test("rolling one die leaves the others blank", async () => {
  const user = userEvent.setup();
  vi.spyOn(Math, "random").mockReturnValue(0.999);
  render(<App />);

  await user.click(screen.getByRole("button", { name: "6" }));

  const rolls = [...document.querySelectorAll(".roll")].map((r) => r.textContent);
  expect(rolls.filter(Boolean)).toEqual(["6"]);
  expect(rolls).toHaveLength(7);
});
