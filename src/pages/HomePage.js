import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Robots from "../components/Robots/Robots";
import { useContext, useEffect } from "react";
import RobotsContext from "../store/context/RobotsContext";
import useData from "../store/hooks/useData";

const StyledContainer = styled.div`
  .robots--container {
    display: flex;
    /* background: white; */
    width: 100%;
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
      {/* <Footer /> */}
    </StyledContainer>
  );
};

export default HomePage;
