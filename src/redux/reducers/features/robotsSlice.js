import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
    deleteRobot: (robots, action) =>
      robots.filter((robot) => robot.id !== action.payload.id),
    createRobot: (robots, action) => [...robots, { ...action.payload }],
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
  createRobot: createRobotActionCreator,
} = robotsSlice.actions;

export default robotsSlice.reducer;
