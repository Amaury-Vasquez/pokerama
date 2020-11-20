import React, { ElementType, useState } from "react";

import { DropDown, DropDownContent } from "./styles";

export const DropDownMenu = (props: {
  content?: ElementType;
  cover: ElementType;
  callback?: Function;
  menu: Function;
}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <DropDown active={active}>
      <props.cover
        onClick={() => {
          if (props.callback) props.callback(setActive);
          setActive(!active);
        }}
      />
      <DropDownContent>
        {props.content ? <props.content callback={props.menu} /> : ""}
      </DropDownContent>
    </DropDown>
  );
};
