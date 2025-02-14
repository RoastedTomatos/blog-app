import styled from "styled-components";

export const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  & > div {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px 10px;
    background-color: white;
    text-align: center;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition:
      box-shadow 0.5s ease,
      opacity 0.5s ease;
  }

  & > div:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    text-decoration-line: underline;
  }

  span {
    display: flex;
    gap: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  div:hover span {
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: gray;
  }

  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
