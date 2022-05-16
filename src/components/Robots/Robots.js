import shortid from "shortid";
import Robot from "../Robot/Robot";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRobot = styled.div`
  text-align: center;
  margin: 10px;
  /* background: grey; */
  border-radius: 45px;
  border: 2px solid white;
  width: 170px;
  height: 320px;
  display: inline-grid;
  margin-bottom: 90px;

  .robot--container {
    height: 100px;
  }
  h1 {
    color: white;
  }
  .img--container {
    background: #335689;
    border-radius: 43px;
  }
  img {
    margin-top: 17px;
  }
`;

const Robots = ({ robots }) => {
  return (
    <>
      {robots.map((robot) => (
        <StyledRobot key={shortid.generate()} className="robot--container">
          {/* <ul key={shortid.generate()}> */}
          {/* <Robot key={shortid.generate()} name={robot.name} robotURL=""></Robot> */}
          <div className="img--container">
            <img
              width="170px"
              height="130px"
              src={robot.url}
              alt={robot.name}
            />
          </div>
          <Robot
            key={shortid.generate()}
            name={robot.name}
            robotURL={robot.url}
            speed={robot.speed}
            resistance={robot.resistance}
            created={robot.date}
            robotId={robot._id}
            _id={robot._id}
          ></Robot>
          {/* </ul> */}
        </StyledRobot>
      ))}
    </>
  );
};
Robot.propTypes = {
  robot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    resistance: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  }),
};
export default Robots;
