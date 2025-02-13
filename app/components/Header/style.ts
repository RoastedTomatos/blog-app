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

  form {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
  }

  input {
    min-width: 400px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &:focus {
      outline: none;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  button {
    font-family: "Merriweather";
    font-size: 20px;
    padding: 10px 20px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border: 1px solid lightgray;
  }
`;
