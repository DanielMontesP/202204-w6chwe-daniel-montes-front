import Header from "../components/Header/Header";
import styled from "styled-components";
import Robots from "../components/Robots/Robots";
import { useContext, useEffect } from "react";
import RobotsContext from "../store/context/RobotsContext";
import useData from "../store/hooks/useData";

const StyledContainer = styled.div`
  .robots--container {
    display: flex;

    width: 150px;
    height: 150px;
  }
  .container {
    height: 130px;
  }
`;

const HomePage = () => {
  const { state } = useContext(RobotsContext);
  const { loadNewRobots } = useData();

  useEffect(() => {
    loadNewRobots();
  }, [loadNewRobots]);

  return (
    <StyledContainer className="container">
      <Header set Access-Control-Allow-Origin="*" />
      <div className="robots--container">
        <Robots pageKey={"home"} state={state} className="w-100" />
      </div>
    </StyledContainer>
  );
};

export default HomePage;
