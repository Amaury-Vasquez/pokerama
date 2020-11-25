import React, { useState } from "react";

import { Card, Image } from "./styles";
import { Cover } from "../../svg/index";

export const PokeCard = (props: {
  url: string;
  pokeId: number;
  cardId: number;
  callback: Function;
  onLoad: Function;
}) => {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);

  const ImageLoaded = () => {
    setLoading(false);
    setActive(false);
  };
  return (
    <Card
      onClick={() => {
        if (!active) {
          props.callback(props.cardId, props.pokeId, setActive);
        }
      }}
    >
      {active ? (
        <Image
          active={!loading}
          onLoad={() => {
            if (loading) ImageLoaded();
            props.onLoad();
          }}
          src={props.url}
          alt={"Pokemon"}
        />
      ) : (
        <Cover size={"100%"} />
      )}
    </Card>
  );
};
