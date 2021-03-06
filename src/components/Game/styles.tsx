import styled, { StyledFunction } from "styled-components";

export const GameContainer = styled.div`
  width: 100vw;
  min-height: 90vh;
  box-sizing: border-box;
`;

interface Props {
  active: boolean;
}

const cardsDiv: StyledFunction<Props & any> = styled.div;
export const CardContainer = cardsDiv`
  box-sizing: border-box;
  height: 82vh;
  width: 90vw;
  padding: 10px;
  margin: 0 auto;
  display: ${(props) => (props.active ? "grid" : "none")};
  grid-gap: 1vw;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-content: center;
  padding: 30px;
  @media screen and (max-width: 500px) {
    width: 100vw;
    grid-template-columns: repeat(4, 1fr);
    padding: 5px;
    grid-gap: 0;
  }
`;
