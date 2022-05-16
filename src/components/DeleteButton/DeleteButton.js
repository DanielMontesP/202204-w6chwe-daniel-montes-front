import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteRobotThunk } from "../../redux/thunks/robotsThunk";

const StyledDelete = styled.div`
  color: rgba(198, 0, 0, 0.6);

  div div {
    background: none;
    background-color: none;
  }
  .deleteIcon {
    font-size: 35px;
    background: rgba(226, 182, 22, 1);
    border-radius: 60%;
    margin-bottom: -13px;
  }
`;

const DeleteButton = (robotId) => {
  const dispatch = useDispatch();

  const deleteRobot = () => {
    dispatch(deleteRobotThunk(robotId.id));
  };

  return (
    <StyledDelete>
      <FontAwesomeIcon
        onClick={deleteRobot}
        id={robotId}
        data-testid="FaxMarkXCircle"
        icon={faXmarkCircle}
        className="deleteIcon"
      />
    </StyledDelete>
  );
};

export default DeleteButton;
