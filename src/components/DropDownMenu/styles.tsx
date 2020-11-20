import styled, { StyledFunction } from "styled-components";

interface DropDownProps {
  active: false;
}

const dropdown: StyledFunction<DropDownProps & any> = styled.div;

export const DropDown = dropdown`
  position: relative;
  display: inline-block;
  & > div {
    display: ${(props) => (props.active ? "block" : "none")};
  }
  & > svg {
    font-size: 20px;
    color: var(--white);
  }
  &:hover {
    & > svg:hover {
    cursor: pointer;
    transform: scale(1.2)
  }
    display: block;
  }
`;

export const DropDownContent = styled.div`
  margin-top: 2vh;
  display: none;
  position: absolute;
  width: auto;
  height: auto;
  left: -150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  & > * {
    display: block;
  }
  @media screen and (max-width: 500px) {
    left: -60vw;
  }
`;
