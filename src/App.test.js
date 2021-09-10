import { render } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders heading", () => {
  const wrapper = render(<App />);
  const welcome = wrapper.getByText("React-Calculator");
  expect(welcome).toBeDefined;
});
