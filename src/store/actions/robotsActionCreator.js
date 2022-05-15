import {
  addToFav,
  loadFavRobots,
  loadRobotById,
  loadRobots,
} from "./robotsActionTypes";

export const robotLoader = (robots) => ({
  type: loadRobots,
  robots,
});
export const favLoader = (robots) => ({
  type: loadFavRobots,
  robots,
});
export const favAdder = (robots) => ({
  type: addToFav,
  robots,
});

export const robotLoaderById = (robots) => ({
  type: loadRobotById,
  robots,
});
