import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import RobotsProvider from "../../store/context/RobotsProvider";
import Robot from "./Robot";

describe("Given a component TvShowMobileDetail", () => {
  describe("When it receives name=Stars Wars posterURL=url rating=10.0 year=2020 genre=Acción", () => {
    test("Render component TvShowMobileDetailRender", () => {
      const history = createMemoryHistory();

      render(
        <RobotsProvider>
          <Router location={history.location} navigator={history}>
            <Robot name="Robocop" robotURL="url" />
          </Router>
        </RobotsProvider>
      );
      const linkElement = screen.getByText("Robocop");
      expect(linkElement).toBeInTheDocument();
    });
  });
});
