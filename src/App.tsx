import React, { Fragment } from "react";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Game } from "./components/Game";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Game />
    </Fragment>
  );
}

export default App;
