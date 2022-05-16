import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Robots from "../components/Robots/Robots";
import { loadRobotsThunk } from "../redux/thunks/robotsThunk";

const RobotsPage = () => {
  const dispatch = useDispatch();
  const robots = useSelector(state => state.robots);

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  debugger;
  return <Robots robots={robots} />;
};

export default RobotsPage;