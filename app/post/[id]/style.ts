import styled from "styled-components";

export const PostSection = styled.main`
  section {
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 50px;
  }

  h2 {
    margin: 0;
    font-size: 32px;
  }

  p {
    margin: 0;
    font-size: 20px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 40px;
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 20px 40px;
  gap: 20px;

  span {
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid gray;
  }

  svg {
    width: 30px;
    height: 30px;
    background: none;
  }

  p {
    font-size: 16px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
