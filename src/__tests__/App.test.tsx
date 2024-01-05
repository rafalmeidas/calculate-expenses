import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renderiza o componente App corretamente", () => {
  render(<App />);

  expect(screen.getByText("Vite + React")).toBeInTheDocument();

  const countButton = screen.getByText("count is 0");
  expect(countButton).toBeInTheDocument();

  fireEvent.click(countButton);
  expect(screen.getByText("count is 1")).toBeInTheDocument();
});
