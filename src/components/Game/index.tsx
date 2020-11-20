import React, { ReactElement, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { GameContainer, CardContainer } from "./styles";
import { GameBoard } from "../GameBoard";
import { PokeCard } from "../PokeCard";
import { randomArray, shuffle } from "../../functions/index";

interface CardData {
  setter: Function;
  pokeId: number;
  cardId: number;
}

export const Game = () => {
  const len = 12;
  const [name, setName] = useState(() => {
    const aux = window.sessionStorage.getItem("name");
    if (aux !== null) return aux;
    return "jugador 1";
  });
  const [attempts, setAttempts] = useState<number>(() => {
    const aux = window.sessionStorage.getItem("attempts");
    if (aux !== null) return parseInt(aux);
    return 12;
  });
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<Array<ReactElement>>();
  const [prevCard, setPrevCard] = useState<CardData>();
  const [currentCard, setCurrentCard] = useState<CardData>();
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
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
        />
      ));
      setCards(() => cards);
      setLoading(false);
    }
  }, [loading, cards, setCards, count, setCount, setCurrentCard]);

  useEffect(() => {
    if (count === 1) {
      currentCard?.setter(true);
      setPrevCard(() => currentCard);
    } else if (count === 2) {
      setCount(() => 0);
      if (
        prevCard?.pokeId === currentCard?.pokeId &&
        prevCard?.cardId !== currentCard?.cardId
      ) {
        setScore((score) => score + 1);
        prevCard?.setter(true);
        currentCard?.setter(true);
      } else {
        currentCard?.setter(true);
        setAttempts((attempts) => attempts - 1);
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
    score,
    setScore,
    attempts,
    setAttempts,
  ]);
  useEffect(() => {
    if (score === len) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Felicidades ${name}! Has ganado`,
        confirmButtonText: "Volver a jugar",
        timer: 10000,
      }).then((result) => {
        if (result.isConfirmed) window.location.reload();
      });
    }
  }, [score, name]);

  useEffect(() => {
    if (attempts === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Ooops! Vuelve a intentarlo ${name}`,
        confirmButtonText: "Volver a jugar",
        timer: 10000,
      }).then((result) => {
        if (result.isConfirmed) window.location.reload();
      });
    }
  }, [attempts, name]);
  return (
    <GameContainer>
      <GameBoard
        name={name}
        score={score}
        callback={() => {
          window.location.reload();
        }}
        attempts={attempts}
        settings={(name: string, attempts: number) => {
          setName(name);
          window.sessionStorage.setItem("name", name);
          window.sessionStorage.setItem("attempts", `${attempts}`);
          setAttempts(attempts);
        }}
      />
      <CardContainer>{cards}</CardContainer>
    </GameContainer>
  );
};
