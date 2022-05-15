import shortid from "shortid";
import Robot from "../Robot/Robot";
import styled from "styled-components";

const StyledRobot = styled.div`
  text-align: center;
  margin: 10px;
  background: grey;
  border-radius: 45px;
  border: 2px solid white;
`;

const Robots = ({ state }) => {
  return (
    <>
      {state.map((robot) => (
        <StyledRobot key={shortid.generate()} className="img--robot">
          <div key={shortid.generate()}>
            {/* <Robot key={shortid.generate()} name={robot.name} robotURL=""></Robot> */}
            <Robot
              key={shortid.generate()}
              name={robot.name}
              robotURL={robot.url}
              speed={robot.speed}
              resistance={robot.resistance}
              created={robot.date}
            ></Robot>
          </div>
        </StyledRobot>
      ))}
    </>
  );
};

export default Robots;
