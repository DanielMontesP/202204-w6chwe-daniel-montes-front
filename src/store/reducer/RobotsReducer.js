import {
  addToFav,
  loadFavRobots,
  loadRobots,
  newRobotToAdd,
} from "../actions/robotsActionTypes";

const robotsReducer = (robots, action) => {
  let newRobot;

  switch (action.type) {
    case loadRobots:
      newRobot = [...action.robots];
      break;
    case loadFavRobots:
      newRobot = [...action.robots];
      break;
    case newRobotToAdd:
      newRobot = [...robots, action.robots];
      break;
    case addToFav:
      newRobot = [...robots, action.robots];
      break;
    default:
      newRobot = [...robots];
  }

  newRobot = newRobot.filter(function (element) {
    return element !== undefined;
  });
  return newRobot;
};

export default robotsReducer;
