import React, { Fragment, useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { Card, Image } from "./styles";
import { Cover } from "../../svg/index";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const PokeCard = (props: {
  url: string;
  pokeId: number;
  cardId: number;
  callback: Function;
}) => {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);

  const ImageLoaded = () => {
    setLoading(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
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
        <Fragment>
          <Image
            active={!loading}
            onLoad={loading ? ImageLoaded : null}
            src={props.url}
            alt={"Pokemon"}
          />
          {loading ? <Spin indicator={antIcon} /> : null}
        </Fragment>
      ) : (
        <Cover size={"100%"} />
      )}
    </Card>
  );
};
