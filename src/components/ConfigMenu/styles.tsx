import styled from "styled-components";

export const Menu = styled.div`
  width: 25vw;
  height: 35vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background-color: var(--white);
  box-shadow: var(--shadow);
  border-radius: 2px;
  padding: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    width: 70vw;
    grid-gap: 2vh;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;

export const Legend = styled.p`
  font-size: 14px;
  text-align: left;
  margin-top: 1vh;
`;

export const Input = styled.input`
  width: 100%;
  height: 5vh;
  padding: 20px;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 1px;
  text-align: left;
`;

export const RadioGroup = styled.fieldset`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  border: none;
  font-size: 14px;
`;

export const RadioItem = styled.label``;

export const Button = styled.button`
  width: 100%;
  background-color: var(--dark-blue);
  box-shadow: var(--shadow);
  height: 5vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;
