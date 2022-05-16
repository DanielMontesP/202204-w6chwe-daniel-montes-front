import axios from "axios";
import {
  createRobotActionCreator,
  deleteRobotActionCreator,
  loadRobotsActionCreator,
  updateRobotActionCreator,
} from "../reducers/features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots } = await axios.get(
      process.env.REACT_APP_PUBLIC_API_URL
    );

    dispatch(loadRobotsActionCreator(robots.robots));
  } catch (error) {
    return error;
  }
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  try {
    const { status } = await axios.delete(
      `${process.env.REACT_APP_PUBLIC_API_URL}/${id}`
    );

    if (status === 200) {
      dispatch(deleteRobotActionCreator(id));
    }
  } catch (error) {
    return error;
  }
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_PUBLIC_API_URL}/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(robot),
    }
  );

  const newRobot = await response.json();

  dispatch(createRobotActionCreator(newRobot));
};

export const updateRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_PUBLIC_API_URL}/update`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(robot),
    }
  );

  const updatedRobot = await response.json();
  dispatch(updateRobotActionCreator(updatedRobot));
};
