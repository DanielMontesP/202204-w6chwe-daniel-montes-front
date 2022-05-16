import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DeleteButton from "../DeleteButton/DeleteButton";

const StyledRobot = styled.ul`
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
        <NavLink to={robotIdToProcess}></NavLink>
        <li>{name}</li>
        <li>Speed: {speed}</li>
        <li>Resistance: {resistance}</li>
        <li>Created: {created}</li>
        <DeleteButton>id={robotId}</DeleteButton>
      </StyledRobot>
    </>
  );
};

export default Robot;
