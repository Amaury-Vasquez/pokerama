import styled, { StyledFunction } from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: var(--shadow);
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 15vh;
  }
`;
interface Props {
  active: true;
}

const image: StyledFunction<Props & any> = styled.img;

export const Image = image`
  display: ${(props) => (props.active === false ? "none" : "block")};
  width: 100%;
  height: auto;
`;
