import DeleteButton from "../DeleteButton/DeleteButton";
import { NavLink } from "react-router-dom";

const Robot = ({ name, robotURL, robotId }) => {
  const robotIdToProcess = "/robotdetail?id=" + robotId;

  return (
    <>
      <div className="container">
        <NavLink to={robotIdToProcess}>
          <img width={210} height={295} src={robotURL} alt={name} />
        </NavLink>
        <p className="robot__name">{name}</p>
        <DeleteButton>id={robotId}</DeleteButton>
      </div>
    </>
  );
};

export default Robot;
