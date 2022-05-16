// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
  // const { addToApi } = useData();

  return (
    <StyledAdd>
      {/* <FontAwesomeIcon
        onClick={(event) => {
          event.preventDefault();
          addToApi(robotId);
        }}
        id={robotId}
        icon={solid("fa-circle-plus")}
        className="addIcon"
      /> */}
      <button
        onClick={(event) => {
          event.preventDefault();
          // addToApi(robotId);
        }}
        id={robotId}
        className="addIcon"
      >
        +
      </button>
    </StyledAdd>
  );
};

export default AddButton;
