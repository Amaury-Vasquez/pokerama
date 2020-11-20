import React from "react";

import { HeaderContainer, P } from "./styles";
import { PokeBall } from "../../svg/index";

export const Header = () => {
  return (
    <HeaderContainer>
      <PokeBall />
      <P> {"Pokerama"} </P>
    </HeaderContainer>
  );
};
