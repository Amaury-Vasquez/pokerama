import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";

import { Board, Text, Score } from "./styles";
import { DropDownMenu } from "../DropDownMenu";
import { ConfigMenu } from "../ConfigMenu";

interface BoardProps {
  name: string;
  score: number;
  callback: Function;
  settings: Function;
  attempts: number;
}

export const GameBoard = (props: BoardProps) => {
  return (
    <Board>
      <Text> {props.name} </Text>
      <Text> {"Puntacion: " + props.score} </Text>
      <Score> {"Intentos restantes: " + props.attempts} </Score>
      <DropDownMenu
        cover={AiFillSetting}
        content={ConfigMenu}
        menu={props.settings}
      />
      <VscDebugRestart onClick={() => props.callback()} />
    </Board>
  );
};
