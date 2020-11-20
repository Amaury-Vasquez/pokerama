import React, { useState } from "react";

import {
  Input,
  Menu,
  Title,
  Legend,
  RadioGroup,
  RadioItem,
  Button,
} from "./styles";

export const ConfigMenu = (props: { callback: Function }) => {
  const [name, setName] = useState<String>("anonimo");
  const [radioValue, setRadioValue] = useState<number>(12);

  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(parseInt(e.target.value));
  };
  return (
    <Menu>
      <Title> {"Configuracion"} </Title>

      <Input
        placeholder="nombre"
        type="text"
        defaultValue=""
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <RadioGroup>
        <Legend>{"Intentos disponibles"}</Legend>
        <RadioItem>
          <input
            type="radio"
            name="level"
            defaultChecked
            value={12}
            onChange={valueChanged}
          />
          <span> {"12"} </span>
        </RadioItem>
        <RadioItem>
          <input type="radio" name="level" value={8} onChange={valueChanged} />
          <span> {"8"} </span>
        </RadioItem>
        <RadioItem>
          <input type="radio" name="level" value={5} onChange={valueChanged} />
          <span> {"5"} </span>
        </RadioItem>
      </RadioGroup>
      <Button
        onClick={() => {
          props?.callback(name, radioValue);
        }}
      >
        {"Aceptar"}
      </Button>
    </Menu>
  );
};
