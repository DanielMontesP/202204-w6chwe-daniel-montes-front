import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RobotsProvider from "../../store/context/RobotsProvider";
import Robots from "./Robots";

describe("Given a component Robots", () => {
  describe("When it receives an array with one array value with name=Robot4", () => {
    test("Then it shoul render an element with text 'Robot4'", () => {
      const arrayForTesting = [
        {
          id: 1,
          url: "",
          name: "Robot4",
        },
      ];
      render(
        <RobotsProvider>
          <BrowserRouter>
            <Robots pageKey={"fav"} state={arrayForTesting} />
          </BrowserRouter>
        </RobotsProvider>
      );
      const linkElement = screen.getByText("Robot4");

      expect(linkElement).toBeInTheDocument();
    });
  });
});
