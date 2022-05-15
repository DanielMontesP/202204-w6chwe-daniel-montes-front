import { useReducer } from "react";

import robotListReducer from "../reducer/RobotsReducer";
import RobotsContext from "./RobotsContext";

const RobotsProvider = ({ children }) => {
  const initialLoad = [];

  const [state, dispatch] = useReducer(robotListReducer, initialLoad);

  return (
    <RobotsContext.Provider value={{ state, dispatch }}>
      {children}
    </RobotsContext.Provider>
  );
};

export default RobotsProvider;
