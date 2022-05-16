// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createRobotThunk } from "../../redux/thunks/robotsThunk";

const StyledAdd = styled.div`
  color: white;
  font-size: 30px;

  div div {
    background: none;
    background-color: none;
  }
  .addIcon {
    font-size: 35px;
    background: white;
    border-radius: 60%;
    width: 45px;
    height: 45px;
  }
`;

const AddButton = (robotId) => {
  const dispatch = useDispatch();

  const createRobot = () => {
    dispatch(createRobotThunk(robotId.children[1]));
  };
  return (
    <StyledAdd>
      <button onClick={createRobot} id={robotId} className="addIcon">
        +
      </button>
    </StyledAdd>
  );
};

export default AddButton;
