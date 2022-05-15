import { useReducer } from "react";

import robotListReducer from "../reducer/showListReducer";
import RobotsContext from "./ShowsContext";

const ShowsProvider = ({ children }) => {
  const initialLoad = [];

  const [state, dispatch] = useReducer(robotListReducer, initialLoad);

  return (
    <RobotsContext.Provider value={{ state, dispatch }}>
      {children}
    </RobotsContext.Provider>
  );
};

export default ShowsProvider;
