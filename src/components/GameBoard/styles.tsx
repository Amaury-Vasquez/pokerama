import styled from "styled-components";

export const Board = styled.div`
  width: 90vw;
  height: 8vh;
  margin: 0 auto;
  margin-top: 1vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: var(--shadow);
  background-color: var(--blue);
  & > svg {
    font-size: 20px;
    color: var(--white);
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 16vh;
    width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0;
    & > svg {
      grid-column: 3;
      grid-row: 1;
      justify-self: flex-end;
    }
    & > div {
      grid-column: 3;
      justify-self: flex-end;
    }
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--white);
`;

export const Score = styled.p`
  font-size: 16px;
  color: var(--white);
  @media screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
