import React, { ReactElement, useState, useEffect, Fragment } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import { CardContainer, SpinContainer } from "./styles";
import { PokeCard } from "../PokeCard";
import { randomArray, shuffle } from "../../functions";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface CardData {
  setter: Function;
  pokeId: number;
  cardId: number;
}

export const CardsBoard = (props: { callback: Function }) => {
  const len = 12;
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<Array<ReactElement>>();
  const [prevCard, setPrevCard] = useState<CardData>();
  const [currentCard, setCurrentCard] = useState<CardData>();
  const [count, setCount] = useState(0);
  const [cardsFetched, setCardsFetched] = useState(0);
  const [fetched, setFetched] = useState(false);
  // Effects
  useEffect(() => {
    // Initializes gameboard
    if (loading === true) {
      const arr1: Array<number> = randomArray(len, 252, 1);
      const arr2: Array<number> = arr1.slice();
      const aux: Array<number> = arr1.concat(arr2);
      const numbers: Array<number> = shuffle(aux);
      const cards = numbers.map((element, index) => (
        <PokeCard
          url={`https://pokeres.bastionbot.org/images/pokemon/${element}.png`}
          pokeId={element}
          cardId={index}
          callback={(cardId: number, pokeId: number, setter: Function) => {
            const clickedCard: CardData = { setter, cardId, pokeId };
            setCount((count) => count + 1);
            setCurrentCard(clickedCard);
          }}
          key={index}
          onLoad={() => {
            setCardsFetched((cardsFetched) => cardsFetched + 1);
          }}
        />
      ));
      setCards(() => cards);
      setLoading(false);
    }
  }, [
    loading,
    cards,
    setCards,
    count,
    setCount,
    setCurrentCard,
    cardsFetched,
    setCardsFetched,
  ]);

  useEffect(() => {
    if (cardsFetched === len * 2) setFetched(true);
  }, [cardsFetched, setFetched]);

  useEffect(() => {
    // Activated after onClick event from cards
    if (count === 1) {
      currentCard?.setter(true);
      setPrevCard(() => currentCard);
    } else if (count === 2) {
      setCount(() => 0);
      if (
        prevCard?.pokeId === currentCard?.pokeId &&
        prevCard?.cardId !== currentCard?.cardId
      ) {
        props.callback(true);
        prevCard?.setter(true);
        currentCard?.setter(true);
      } else {
        props.callback(false);
        currentCard?.setter(true);
        setTimeout(() => {
          prevCard?.setter(false);
          currentCard?.setter(false);
        }, 1000);
      }
      setPrevCard(() => undefined);
      setCurrentCard(() => undefined);
    }
  }, [
    count,
    setCount,
    prevCard,
    setPrevCard,
    currentCard,
    setCurrentCard,
    props,
  ]);

  return (
    <Fragment>
      <CardContainer active={fetched}>{cards}</CardContainer>
      {!fetched ? (
        <SpinContainer>
          <Spin indicator={antIcon} size={"large"} />
        </SpinContainer>
      ) : null}
    </Fragment>
  );
};
