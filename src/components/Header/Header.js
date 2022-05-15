import styled from "styled-components";

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
    </StyledHeader>
  );
};
export default Header;
