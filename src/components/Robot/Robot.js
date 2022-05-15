import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DeleteButton from "../DeleteButton/DeleteButton";

const StyledRobot = styled.div`
  color: white;
  text-align: left;
  .robot__name {
    color: white;
    text-align: center;
  }
`;

const Robot = ({ name, robotURL, robotId, speed, resistance, created }) => {
  const robotIdToProcess = "/robotdetail?id=" + robotId;
  return (
    <>
      <StyledRobot>
        <div className="container">
          <NavLink to={robotIdToProcess}>
            <img width={105} height={146} src={robotURL} alt={name} />
          </NavLink>
          <h3 className="robot__name">{name}</h3>
          Speed:
          {speed}
          <br />
          Resistance: {resistance}
          <br />
          Created: <br /> {created}
        </div>

        <DeleteButton>id={robotId}</DeleteButton>
      </StyledRobot>
    </>
  );
};

export default Robot;
