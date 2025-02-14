import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;

  nav {
    display: flex;
    padding: 50px 50px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.block};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  h1 {
    text-align: center;
    font-size: 32px;
    margin: 0;
  }

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    flex-direction: row;
    gap: 20px;
    margin: 0;
  }

  li {
    text-align: center;
    align-self: center;
    font-size: 20px;
  }
`;
