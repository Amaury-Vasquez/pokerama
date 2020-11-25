import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { GameContainer } from "./styles";
import { GameBoard } from "../GameBoard";
import { CardsBoard } from "../CardsBoard";

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
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Executes after all cards are matched
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
    // Executes in case of reaching attempts limit
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
        score={0}
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
      <CardsBoard
        callback={(matched: boolean) => {
          matched
            ? setScore((score) => score + 1)
            : setAttempts((attempts) => attempts - 1);
        }}
      />
    </GameContainer>
  );
};
