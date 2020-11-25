import styled, { StyledFunction } from "styled-components";

interface Props {
  active: boolean;
}

const Div: StyledFunction<Props & any> = styled.div;
export const CardContainer = Div`
  box-sizing: border-box;
  height: 82vh;
  width: 90vw;
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

export const SpinContainer = styled.div`
  box-sizing: border-box;
  height: 82vh;
  width: 90vw;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;
