import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RobotsProvider from "../store/context/RobotsProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Robots'", () => {
      const expectedText = "Robots";

      render(
        <RobotsProvider>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </RobotsProvider>
      );
      const expectedRenderedHeading = screen.getByRole("heading", { level: 1 });

      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });
});
