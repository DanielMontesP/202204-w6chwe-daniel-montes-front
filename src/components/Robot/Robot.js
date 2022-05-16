import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DeleteButton from "../DeleteButton/DeleteButton";

const StyledRobot = styled.ul`
  color: white;
  text-align: left;
  margin-bottom: 50px;
  font-size: 14px;
  ul,
  li {
    list-style-type: none;
  }
  .robot__name {
    color: white;
    font-size: 20px;
    background: none;
    margin-bottom: 10px;
  }
`;

const Robot = ({ name, robotURL, robotId, speed, resistance, created }) => {
  const robotIdToProcess = "/robotdetail?id=" + robotId;
  return (
    <>
      <StyledRobot>
        <NavLink to={robotIdToProcess}></NavLink>
        <li className="robot__name">{name}</li>
        <li>Speed: {speed}</li>
        <li>Resistance: {resistance}</li>
        <li>Created: {created}</li>
        <DeleteButton>id={robotId}</DeleteButton>
      </StyledRobot>
    </>
  );
};

export default Robot;
