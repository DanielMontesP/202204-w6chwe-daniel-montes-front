import { useCallback, useContext } from "react";
import { favLoader, robotLoader } from "../actions/robotsActionCreator";
import RobotsContext from "../context/RobotsContext";

const useData = () => {
  const publicApiUrl =
    "https://two02204-w6chwe-daniel-montes-back.onrender.com/robots/";
  const privateApiUrl =
    "https://two02204-w6chwe-daniel-montes-back.onrender.com/robots/";

  const { state, dispatch } = useContext(RobotsContext);

  const loadNewRobots = useCallback(async () => {
    const response = await fetch(publicApiUrl);
    const robotsData = await response.json();

    let reducedData = [];
    for (let i = 0; i <= 8; i++) {
      reducedData.push(robotsData[i]);
    }
    dispatch(robotLoader(reducedData));
    return robotsData;
  }, [dispatch]);

  const loadFavRobots = useCallback(async () => {
    const response = await fetch(privateApiUrl);
    const favsData = await response.json();
    dispatch(favLoader(favsData));
    return favsData;
  }, [dispatch]);

  const addToApi = async (robotId) => {
    const robotsToFilter = state.find((robot) => {
      return robot.id === robotId.children[1];
    });
    const robotsFiltered = { ...robotsToFilter };

    const idToJson = JSON.stringify({ ...robotsFiltered });

    const response = await fetch(privateApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: idToJson,
    });

    return response.json();
  };

  const deleteToApiById = async (robotId) => {
    const robotsToFilter = state.find((robot) => {
      return robot._id === robotId.children[1];
    });
    const robotsFiltered = { ...robotsToFilter };

    const idToJson = JSON.stringify({ ...robotsFiltered });

    const response = await fetch(
      "https://two02204-w6chwe-daniel-montes-back.onrender.com/delete-robot/" +
        robotId.children[1],
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: idToJson,
      }
    );

    loadFavRobots();
    return response.json();
  };

  return {
    loadNewRobots,
    loadFavRobots,
    addToApi,
    deleteToApiById,
  };
};

export default useData;
