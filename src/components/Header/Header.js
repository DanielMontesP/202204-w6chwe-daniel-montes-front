import styled from "styled-components";
import AddButton from "../DeleteButton/AddButton";

const StyledHeader = styled.div`
  text-align: center;
  h1 {
    color: white;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Robots</h1>
      <AddButton />
    </StyledHeader>
  );
};
export default Header;
