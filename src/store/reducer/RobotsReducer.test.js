import {
  addToFav,
  loadFavRobots,
  loadRobots,
  newRobotToAdd,
} from "../actions/robotsActionTypes";
import RobotsReducer from "./RobotsReducer";

describe("Given the showListReducer", () => {
  describe("When it receive a group of three robots and action is loadRobots", () => {
    test("Then it Whould return a new group equals to the given one", () => {
      const thisRobots = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];
      const action = {
        type: loadRobots,
        shows: thisRobots,
      };

      const expectedResult = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];

      const robotsLoaded = RobotsReducer(thisRobots, action);

      expect(robotsLoaded).toEqual(expectedResult);
    });
  });
  describe("When it receive a group of three robots and no action", () => {
    test("Then it Whould return a new group equals to the given one", () => {
      const thisRobots = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot",
        },
      ];

      const action = {
        type: "",
        thisRobots,
      };

      const expectedResult = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];

      const robotsLoaded = RobotsReducer(thisRobots, action);

      expect(robotsLoaded).toEqual(expectedResult);
    });
  });
  describe("When it receive a group of three robots and action create", () => {
    test("Then it Whould return a new group equals to the given one with the new one added", () => {
      const thisRobots = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];
      const newValues = { id: 4, name: "Robot1" };
      const action = {
        type: newRobotToAdd,
        shows: newValues,
      };

      const expectedResult = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
        {
          id: 4,
          name: "Robot4",
        },
      ];

      const robotsLoaded = RobotsReducer(thisRobots, action);

      expect(robotsLoaded).toEqual(expectedResult);
    });
  });
  describe("When it receive a group of three shows and action is loadFavShows", () => {
    test("Then it Whould return a new group equals to the given one", () => {
      const thisFavRobots = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];
      const action = {
        type: loadFavRobots,
        shows: thisFavRobots,
      };

      const expectedResult = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];

      const robotsLoaded = RobotsReducer(thisFavRobots, action);

      expect(robotsLoaded).toEqual(expectedResult);
    });
  });
  describe("When it receive a group of three shows and action addToFav", () => {
    test("Then it Whould return a new group equals to the given one with the new one added", () => {
      const thisRobots = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
      ];
      const newValues = { id: 4, name: "Robot1" };
      const action = {
        type: addToFav,
        shows: newValues,
      };

      const expectedResult = [
        {
          id: 1,
          name: "Robot1",
        },
        {
          id: 2,
          name: "Robot2",
        },
        {
          id: 3,
          name: "Robot3",
        },
        {
          id: 4,
          name: "Robot4",
        },
      ];

      const robotsLoaded = RobotsReducer(thisRobots, action);

      expect(robotsLoaded).toEqual(expectedResult);
    });
  });
});
