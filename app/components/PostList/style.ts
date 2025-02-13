import styled from "styled-components";

export const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  div {
    display: flex;
    border: 1px solid;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px 10px;
    background-color: white;
    text-align: center;
    height: 150px;
    overflow: hidden;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
