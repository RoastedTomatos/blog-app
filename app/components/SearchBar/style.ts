import styled from "styled-components";

export const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;

  & > form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 40px 0;
  }

  input {
    min-width: 400px;
    max-width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      min-width: 100%;
      font-size: 16px;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  button {
    font-family: "Merriweather", serif;
    font-size: 20px;
    padding: 10px 20px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border: 1px solid lightgray;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
`;
